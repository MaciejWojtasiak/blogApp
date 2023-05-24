const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(console.log('Connected to MongoDB'));

app.listen("5000", () => {
    console.log(`Server running`);
});

app.get('/', (req, res) => {
    res.send('hello')
})