const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
const cors = require('cors');
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

dotenv.config();
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(console.log('Connected to MongoDB'));

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);

app.listen("5000", () => {
    console.log(`Server running`);
});

app.get('/', (req, res) => {
    res.send('Server app')
})