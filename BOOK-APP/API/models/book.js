const Joi = require('joi');
const mongoose = require('mongoose');
const {userSchema} = require('./user');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    image: String,
    note: String,
    user:{
        type: new mongoose.Schema({
        name:{
                type: String
        }
    })}

});

const Book = mongoose.model('Book', bookSchema);

exports.Book = Book;