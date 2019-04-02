const db = require('../config/db');

const Schema = new db.Schema({
    username: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true
    },

    sex: {
        type: Number,
        default: function () {
            return 1;
        }
    },

    age: {
        type: Number,
        default: function () {
            return 18;
        }
    },

    avatar: {
        type: String,
        default: function () {
            return 'https://upload.jianshu.io/users/upload_avatars/17085474/914a1153-656e-4a22-b1b0-e14f963bdf40?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120'
        }
    }
})


module.exports = db.model('a',Schema);