const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detailSchema = new Schema({
    site: {
        type: String,
        required: true,
        trim:true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    details: [ detailSchema ]
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User; 