const express = require('express');
const router = express.Router();
const {createSupport,getSupportsBySupportId,DeleteSupport,updateSupport, allSupports } = require('../Controllers/SupportController');
const { authenticate } = require('../Middleware/AuthoMiddleware');

router.get('/adminSupport/', authenticate, allSupports);
router.get('/:SupportId',authenticate, getSupportsBySupportId);
router.post('/create', authenticate, createSupport);
router.put('/update/:SupportId', authenticate, updateSupport);
router.delete('/delete/:SupportId', authenticate, DeleteSupport);

module.exports = router;
