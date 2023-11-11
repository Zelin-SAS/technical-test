const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();



router.post('/', async (req, res) => {
    let user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('Invalid email or password.');

    let validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Invalid email or password.');
    
    res.send(true);

});

module.exports = router;
