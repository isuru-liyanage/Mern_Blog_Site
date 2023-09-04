const express = require('express');
const router = express.Router();
const {createSupport } = require('../Controllers/SupportController');
const { authenticate } = require('../Middleware/AuthoMiddleware');

// router.get('/:SupportId', getSupportsBySupportId);
router.post('/create', authenticate, createSupport);
// router.put('/update/:commentId', authenticate, updateBlog);
// router.delete('/delete/:commentId', authenticate, deleteBlog);

module.exports = router;
