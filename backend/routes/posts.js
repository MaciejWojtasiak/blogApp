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

// GET POSTS FROM CATEGORY

router.get('/category/:category', async (req, res) => {
    try {
        const posts = await Post.find({ category: req.params.category });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err)
    }
});


// ADD POST

router.post('/', async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            description: req.body.description,
            user: req.body.user,
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

// DELETE POST 

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await Post.findByIdAndDelete(req.params.id);
                res.status(200).json('Post removed.')
            } catch (err) {
                res.status(500).json(err);
            }
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


// LIKE POST

router.put('/:id/like', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {

            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json('Post liked.')
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json('Post unliked.')
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

// GET LIKES 

router.get('/:id/likes', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post.likes);
    } catch (err) {
        res.status(500).json(err);
    }
});


// COMMENT POST

router.put('/:id/comments', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const newComment = { username: req.body.username, comment: req.body.comment }
        await post.updateOne({ $push: { comments: newComment } });
        res.status(200).json('Post commented.');

    } catch (err) {
        res.status(500).json(err);
    }
});

// GET COMMENTS 

router.get('/:id/comments', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post.comments);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;