const {User} = require('../models/user');
const { Book } = require('../models/book');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.send(books);
});

router.post('/', async (req, res) =>{
    //const user = await User.findById(req.body.userId);
    const book = new Book({ 

        title: req.body.title,
        author: req.body.author,
        image: req.body.image,
        note: req.body.note

    }) 

    await book.save();
    res.send(book);
});

router.put('/:id', async (req, res) =>{
    const book = await Book.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        author: req.body.author,
        image: req.body.image,
        note: req.body.note
     }, {new: true });
    
    //if(!book) returnres.status(404).send('The book with the given ID is not existe');
    
    res.send(book);
});

router.delete('/:id', async (req, res) =>{
    const book = await Book.findByIdAndRemove(req.params.id);
    
    if(!book) returnres.status(404).send('The book with the given ID is not existe');

    res.send(book);
});

router.get('/:id', async (req, res) =>{
    const book = await Book.findById(req.params.id);
    
    if(!book) returnres.status(404).send('The book with the given ID is not existe');

    res.send(book);
});


module.exports = router;
