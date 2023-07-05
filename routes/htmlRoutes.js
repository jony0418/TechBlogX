const router = require('express').Router();
const path = require('path');

// Route for homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.handlebars'));
});

// Route for dashboard
router.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/dashboard.handlebars'));
});

// Route for login
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.handlebars'));
});

// Route for signup
router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/signup.handlebars'));
});

module.exports = router;
