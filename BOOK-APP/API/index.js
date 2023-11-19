const mongoose = require('mongoose');
const books = require('./routes/books');
const users = require('./routes/users');
const express = require('express');
const cors = require('cors');
const app = express();

//4Jg99wAvbPaN8a70

mongoose.connect('mongodb+srv://taibamjoud5:4Jg99wAvbPaN8a70@cluster0.xktt75d.mongodb.net/playground?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(cors())
app.use(express.json());
app.use('/api/books', books);
app.use('/api/users', users);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));