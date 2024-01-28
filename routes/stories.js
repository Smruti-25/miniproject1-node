const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middleware/auth');
const Story = require('../models/Story');

//desc = add stories page
//route = GET /stories/add
router.get('/add', ensureAuth, (req, res) => {
  res.render('stories/add');
});

//desc = Process add forms
//route = POST /stories
router.get('/add', ensureAuth, (req, res) => {
  try {
    req.body();
  } catch (err) {
    console.log(err);
    res.render('error/500');
  }
})

module.exports = router;