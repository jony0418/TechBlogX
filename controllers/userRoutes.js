const router = require('express').Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');

// Route for user signup
router.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      username: req.body.username,
      password: hashedPassword,
    });
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      res.status(201).json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for user login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user) {
      res.status(400).json({ message: 'No user with that username!' });
      return;
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res.json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for user logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
