const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    tags: {
        type: Array,
        required: false,
        unique: false
    },
    image: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
