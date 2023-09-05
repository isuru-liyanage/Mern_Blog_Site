const express = require('express');
const router = express.Router();
const {createSupport,getSupportsBySupportId,DeleteSupport } = require('../Controllers/SupportController');
const { authenticate } = require('../Middleware/AuthoMiddleware');

router.get('/:SupportId',authenticate, getSupportsBySupportId);
router.post('/create', authenticate, createSupport);
//router.put('/update/:commentId', authenticate, updateBlog);
router.delete('/delete/:SupportId', authenticate, DeleteSupport);

module.exports = router;
