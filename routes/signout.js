var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// 登出
router.get('/', checkLogin, function (req, res, next) {
    // 清空session 中的用户信息
    req.session.user = null;
    req.flash('sucess', '登出成功');
    res.redirect('/posts');
});

module.exports = router;
