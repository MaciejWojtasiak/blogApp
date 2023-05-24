const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');

dotenv.config();
app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then(console.log('Connected to MongoDB'));

app.use("/api/auth", authRoute);

app.listen("5000", () => {
    console.log(`Server running`);
});

app.get('/', (req, res) => {
    res.send('hello')
})