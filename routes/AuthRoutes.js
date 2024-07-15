const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/AuthController');
const { authenticateToken} = require('../configurations/middleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', authenticateToken, logoutUser);

module.exports = router;
