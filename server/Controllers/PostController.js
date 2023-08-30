const Post = require('../Models/PostModel');

async function createPost(req, res) {
    try {
        const {title, interestedFields, content, photoUrl, } = req.body;

        const publisherId = req.user._id;
        const publisherName = req.user.name;

        console.log(interestedFields)

        const newPost = new Post({
            title,
            publisherId,
            publisherName,
            interestedFields,
            content,
            photoUrl,
        });

        const savedPost = await newPost.save();
        res.json(savedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create a blog post' });
    }
};


module.exports = {
    createPost,
};