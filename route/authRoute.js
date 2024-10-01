const router = require('express').Router();
const { signup } = require('../controller/authController');

// Change this line
router.post('/signup', signup);

module.exports = router;
