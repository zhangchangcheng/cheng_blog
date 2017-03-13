var config = require('config-lite');
var Mongolass = require('mongolass');
var mongolass = new Mongolass();
mongolass.connect(config.mongodb);
var moment = require('moment');
var objectIdTimestamp = require('objectid-to-timestamp');

// 根据ID生成创建时间 created_at
mongolass.plugin('addCreatedAt', {
    afterFind: function (results) {
        results.forEach(function (item) {
            item.created_at = moment(objectToTimestamp(item._id)).format('YYYY-MM-DD HH:mm');
        });
        return results;
    },
    afterFindOne: function (result) {
        if (result) {
            result.created_at =  moment(objectIdToTimestamp(result._id)).format('YYYY-MM-DD HH:mm');
        }
        return result;
    }
})

exports.User = mongolass.model('User', {
    name: {type: 'string'},
    password: {type: 'string'},
    avatar: {type: 'string'},
    gender: {type: 'string', enum: ['m', 'f', 'x']},
    bio: {type: 'string'}
});
exports.User.index({
    name: 1
}, {
    unique: true
}).exec();
