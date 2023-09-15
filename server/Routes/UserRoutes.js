const express = require('express');
const router = express.Router();
const { deleteUser, viewUser, updateUser, allUsers } = require('../Controllers/UserController');
const { authenticate } = require('../Middleware/AuthoMiddleware');

router.get('/profile',authenticate, viewUser);
router.put('/update/', authenticate, updateUser);
router.delete('/delete/', authenticate, deleteUser);
router.get('/all/', authenticate, allUsers);

module.exports = router;
