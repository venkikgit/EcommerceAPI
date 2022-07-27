const { Router } = require('express');
const express = require('express');

const router = express.Router();

// User controller
const userController = require('../controllers/user_controller');


// User create session route

router.post('/create-session',userController.createSession);



module.exports = router;