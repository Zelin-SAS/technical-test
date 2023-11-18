const {User} = require('../models/user');
const { Book } = require('../models/book');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/:id', async (req, res) => {
    //const books = await Book.find();
    
    const user = await User.findById(req.params.id)
    const books = await Book.find({user: user});
    
    res.send(books);
});

router.post('/:id', async (req, res) =>{
    const user = await User.findById(req.params.id);

    let book = new Book({ 

        title: req.body.title,
        author: req.body.author,
        image: req.body.image,
        note: req.body.note,
       
        user:{
            _id: user._id,
            name: user.name
        }
    

    }) 

    await book.save();
    res.send(book);});

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
    const user = await User.findById(req.params.id);
    const book = await Book.find({user: user});

    res.send(book);
});



module.exports = router;
