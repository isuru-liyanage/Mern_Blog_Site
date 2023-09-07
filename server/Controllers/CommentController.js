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
        const userName = req.user.name;
        
        const comment = new Comment({
            content,
            userId,
            blogId,
            userName,
        });

        const savedComment = await comment.save();
        res.status(201).json({ comment: savedComment , message: "Successfully created"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create a comment' });
    }
}

async function updateComment(req, res) {
    try {
        const { commentId } = req.params;
        const { content } = req.body;

        const comment = await Comment.findOne({ _id: commentId });

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        if(req.user._id.toString() !== comment.userId.toString()){
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

        const comment = await Comment.findOne({ _id: commentId });

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        if(req.user._id.toString() !== comment.userId.toString()){
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const deletedComment = await Comment.findByIdAndRemove(commentId);

        if (!deletedComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        res.status(200).json({message: "Comment deleted Succcessfully"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete the comment' });
    }
}

async function getCommentsByBlogId(req, res) {
    try {
        const { blogId } = req.params;

        const blog = await Blog.findOne({ _id: blogId });

        if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
        }

        const comments = await Comment.find({ blogId });

        res.status(200).json({ comments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve comments' });
    }
}


module.exports = {
    updateComment, createComment, deleteComment, getCommentsByBlogId
};
