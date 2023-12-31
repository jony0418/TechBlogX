const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const userRoutes = require('./controllers/userRoutes');

const app = express();
const PORT = process.env.PORT || 3001;
app.use('/', userRoutes);

// Set up sessions with Sequelize
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Set up Handlebars.js engine
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes defined in the controllers folder
app.use(routes);

// Connect to the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
