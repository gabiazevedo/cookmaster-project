const express = require('express');

const router = express.Router();

const { createToken } = require('../controllers/loginController');
const { isValidLoginFields, isValidLoginUser } = require('../middlewares/validations');

router.post('/', isValidLoginFields, isValidLoginUser, createToken);

module.exports = router;