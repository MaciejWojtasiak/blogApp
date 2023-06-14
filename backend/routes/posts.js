const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');


// ALL POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err)
    }
});

// GET ONE POST

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id });
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

// ADD POST

router.post('/', async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            description: req.body.description,
            username: req.body.username,
            image: req.body.image,
            category: req.body.category
        });

        const post = await newPost.save();

        res.status(200).send(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE POST

router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findOneAndUpdate(
                    { _id: req.params.id },
                    {
                        $set: req.body
                    },
                    { new: true }
                );
                res.status(200).json(updatedPost);

            } catch (err) {
                res.status(500).json(err);
            }
        }

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;