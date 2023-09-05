const Comment = require('../Models/commentModel');
const Blog = require('../Models/BlogModel');

async function createComment(req, res) {
    try {
        const { content } = req.body;
        const { blogId } = req.params;

        const blog = await Blog.findOne({ _id: blogId });

        if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
        }

        const userId = req.user._id;
        
        const comment = new Comment({
            content,
            userId,
            blogId,
        });

        const savedComment = await comment.save();
        res.status(201).json({ comment: savedComment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create a comment' });
    }
}

async function updateComment(req, res) {
    try {
        const { commentId } = req.params;
        const { content } = req.body;

        const Comment = await Comment.findOne({ _id: commentId });

        if (!Comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        if(req.user._id.toString() !== blog.publisherId.toString()){
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const updatedComment = await Comment.findByIdAndUpdate(
            commentId,
            { content },
            { new: true }
        );

        res.status(200).json({ comment: updatedComment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update the comment' });
    }
}

async function deleteComment(req, res) {
    try {
        const { commentId } = req.params;

        const Comment = await Comment.findOne({ _id: commentId });

        if (!Comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        if(req.user._id.toString() !== blog.publisherId.toString()){
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const deletedComment = await Comment.findByIdAndRemove(commentId);

        if (!deletedComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete the comment' });
    }
}

async function getCommentsByBlogId(req, res) {
    try {
        const { blogId } = req.params;

        const comments = await Comment.find({ blog: blogId }).populate('user');

        res.status(200).json({ comments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve comments' });
    }
}

module.exports = {
    getCommentsByBlogId,
};

module.exports = {
    updateComment, createComment, deleteComment, getCommentsByBlogId
};
