const router = require('express').Router();
const userController = require('../controllers/userController');
const blogController = require('../controllers/blogController');

// User routes
router.use('/users', userController);

// Blog routes
router.use('/blogs', blogController);

module.exports = router;
