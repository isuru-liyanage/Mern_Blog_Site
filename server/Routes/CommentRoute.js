const express = require('express');
const router = express.Router();
const { getCommentsByBlogId, createComment, updateComment, deleteComment } = require('../Controllers/CommentController');
const { authenticate } = require('../Middleware/AuthoMiddleware');

router.get('/:blogId', getCommentsByBlogId);
router.post('/create/:blogId', authenticate, createComment);
router.put('/update/:commentId', authenticate, updateComment);
router.delete('/delete/:commentId', authenticate, deleteComment);

module.exports = router;
