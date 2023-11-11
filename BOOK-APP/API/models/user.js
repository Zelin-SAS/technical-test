const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
});

const User = mongoose.model('User', userSchema);


exports.userSchema = userSchema;
exports.User = User;

