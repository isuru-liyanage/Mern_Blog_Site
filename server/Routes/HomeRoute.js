const express = require('express');
const router = express.Router();
const { myBlog, viewBlog, updateBlog, deleteBlog } = require('../Controllers/HomeController');
const { authenticate } = require('../Middleware/AuthoMiddleware');

router.get('/:pagenum', viewBlog);
router.post('/myblog', authenticate, myBlog);
router.put('/update/:blogId', authenticate, updateBlog);
router.delete('/delete/:blogId', authenticate, deleteBlog);

module.exports = router;
