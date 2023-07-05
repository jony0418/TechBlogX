const router = require('express').Router();
const userController = require('../controllers/userController');
const blogController = require('../controllers/blogController');

// User routes
router.use('/user', userController);

// Blog routes
router.use('/blog', blogController);

module.exports = router;
