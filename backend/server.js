const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
const cors = require('cors');

dotenv.config();
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }))

mongoose.connect(process.env.MONGO_URL).then(console.log('Connected to MongoDB'));

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);

app.listen("5000", () => {
    console.log(`Server running`);
});

app.get('/', (req, res) => {
    res.send('hello')
})