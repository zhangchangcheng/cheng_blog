var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// 注册页
router.get('/', checkLogin, function (req, res, next) {
    res.send(req.flash());
});

// 用户注册
router.post('/', checkLogin, function (req, res, next) {
    res.send(req.flash());
});

module.exports = router;
