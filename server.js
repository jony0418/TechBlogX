// Require necessary npm packages
const express = require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Session setup
const sess = {
  secret: 'secretKey',
  cookie: {
    maxAge: 600000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
    visitCount: 0,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

// Handlebars setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Apply routes
app.use('/api', routes); // Updated this line

// Start the server after syncing the database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
