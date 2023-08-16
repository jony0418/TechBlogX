const router = require('express').Router();
const { Post } = require('../models');

// Route for creating a new post
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      contents: req.body.contents,
      user_id: req.session.user_id,
    });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for updating a post
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for deleting a post
router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
