const express = require('express');

const router = express.Router();

const {
  isValidName,
  isValidEmail,
  isValidPassword,
  userExists,
  isUserAdmin,
} = require('../middlewares/validations');

const { createUser, createAdminUser } = require('../controllers/usersController');

const { auth } = require('../middlewares/auth');

/* USERS ROUTES */

router.post('/',
  isValidName,
  isValidEmail,
  isValidPassword,
  userExists,
  createUser);

router.post('/admin', auth, isUserAdmin, createAdminUser);

module.exports = router;