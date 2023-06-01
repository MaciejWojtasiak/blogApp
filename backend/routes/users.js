const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt')


// GET ALL USERS
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);

    } catch (err) {
        res.status(500).json(err);
    }
});
// GET ONE USER
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        res.status(200).json(user);

    } catch (err) {
        res.status(500).json(err);
    }
})

// UPDATE USER

router.put('/:id', (req, res) => {
    if (req.body.userID === req.body.id) {
        if (req.body.password) {
            const salt = bcrypt.genSalt(10);
        }
    }
})

module.exports = router;