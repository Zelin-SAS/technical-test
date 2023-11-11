const Joi = require('joi');
const mongoose = require('mongoose');
const {userSchema} = require('./user');

const Book = mongoose.model('Book', new mongoose.Schema({
    title: String,
    author: String,
    user: {
        type: userSchema,
    }

}));


exports.Book = Book;