const express = require('express');
const router = express.Router();
const { createBlog, viewBlog, updateBlog, deleteBlog } = require('../Controllers/CommentController');
const { authenticate } = require('../Middleware/AuthoMiddleware');

router.get('/:blogId', getCommentsByBlogId);
router.post('/create/:blogId', authenticate, createBlog);
router.put('/update/:commentId', authenticate, updateBlog);
router.delete('/delete/:commentId', authenticate, deleteBlog);

module.exports = router;
