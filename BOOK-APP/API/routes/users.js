const _ = require('lodash');
const { User } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', async (rea, res) => {
    const users = await User.find();
    res.send(users);
});

router.post('/', async (req, res) => {

    const user = new User({ 
        name: req.body.name
    }) 

    await user.save();
    res.send(user);

});


module.exports = router;
