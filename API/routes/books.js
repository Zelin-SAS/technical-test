const {User} = require('../models/user');
const { Book } = require('../models/book');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


//get books
router.get('/', async (req, res) => {
    const books = await Book.find();
    res.send(books);
});

//create a book
router.post('/', async (req, res) =>{
    const user = await User.findById(req.body.userId);
    const book = new Book({ 

        title: req.body.title,
        author: req.body.author,
        user: {
            _id: user._id
        }

    }) 

    await book.save();
    res.send(book);
});

//update a book
router.put('/:id', async (req, res) =>{
    const book = await Book.findByIdAndUpdate(req.params.id, {title: req.body.title }, {new: true });
    
    if(!book) returnres.status(404).send('The book with the given ID is not existe');
    
    res.send(book);
});

//delete a book
router.delete('/:id', async (req, res) =>{
    const book = await Book.findByIdAndRemove(req.params.id);
    
    if(!book) returnres.status(404).send('The book with the given ID is not existe');

    res.send(book);
});

//find byId
router.get('/:id', async (req, res) =>{
    const book = await Book.findById(req.params.id);
    
    if(!book) returnres.status(404).send('The book with the given ID is not existe');

    res.send(book);
});


module.exports = router;
