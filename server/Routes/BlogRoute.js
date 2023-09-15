const express = require('express');
const router = express.Router();
const { createBlog, viewBlog, updateBlog, deleteBlog, allBlogs } = require('../Controllers/BlogController');
const { authenticate } = require('../Middleware/AuthoMiddleware');

router.get('/', viewBlog);
router.post('/create', authenticate, createBlog);
router.put('/update/:blogId', authenticate, updateBlog);
router.delete('/delete/:blogId', authenticate, deleteBlog);
router.get('/all', authenticate, allBlogs);

module.exports = router;
