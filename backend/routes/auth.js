const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');


// REGISTER
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        const validate = await bcrypt.compare(req.body.password, user.password);

        if (!user) {
            res.json('Wrong credentials!');
            return;
        }
        if (!validate) {
            res.json('Wrong password!');
            return;
        }
        res.status(200).json(user);

    } catch (err) {
        res.status(500).json(err)
    }
})

// LOGIN


module.exports = router;