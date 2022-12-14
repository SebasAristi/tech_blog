const router = require('express').Router();
const { Post, Comment, User } = require('../models');


router.get('/', async (req, res) => {
  try {
    // Get all post and JOIN with user data
    const postData = await Post.findAll({
      include: [User],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// this route will need to return one single post and include the user, its associated comments and the user who creted the comment. it needs to render the comment-post handlebar
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [User, {
        model: Comment,
        include: [User]
      }]
    });

    const post = postData.get({ plain: true });
    console.log(post)
    res.render('comment-post', {
      post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
