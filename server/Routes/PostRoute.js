// postRoutes.js
const express = require('express');
const router = express.Router();
const { createPost } = require('../Controllers/PostController');
const { authenticate } = require('../Middleware/AuthoMiddleware');

router.post('/create', authenticate, createPost);

module.exports = router;
