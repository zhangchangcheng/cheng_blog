var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;
var Post = require('../lib/mongo').Post;

// Get  /posts 所有用户或者特定用户的文章页
router.get('/', function (req, res, next) {
    res.render('posts');
});

// Post  /posts发表一篇文章
router.post('/', function (req, res, next) {
    res.send(req.flash());
});

//GET 发表文章页
router.get('/cteate', checkLogin, function (req, res, next) {
    res.render('create');
});

// GET  单独一篇的文章页

module.exports = router;
