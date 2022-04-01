const model = require('../model/usersModel');

const isValidName = (req, res, next) => {
  const { name } = req.body;

  if (!name || name === '') {
    return res.status(400).json({
      message: 'Invalid entries. Try again.',
    });
  }
  next();
};

const userExists = async (req, res, next) => {
  const { email } = req.body;

  const result = await model.getUserByEmail(email);
  if (result) {
    return res.status(409).json({
      message: 'Email already registered',
    });
  }
  next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i;

  if (!regex.test(email) || !email) {
    return res.status(400).json({
      message: 'Invalid entries. Try again.',
    });
  }
  next();
};

const isValidLoginFields = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ message: 'All fields must be filled' });
  }
  next();
};

const isValidLoginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await model.getUserByEmail(email);

  if (!user || password !== user.password) {
    return res.status(401).json({ message: 'Incorrect username or password' });
  }
  next();
};

const isUserAdmin = async (req, res, next) => {
  const { role } = req.user;

  if (role !== 'admin') {
    return res.status(403).json({ message: 'Only admins can register new admins' });
  }
  next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || password === '') {
    return res.status(400).json({
      message: 'Invalid entries. Try again.',
    });
  }
  next();
};

const isValidRecipe = (req, res, next) => {
  const { name, ingredients, preparation } = req.body;

  if (!name || !ingredients || !preparation) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

module.exports = {
  isValidName,
  isValidEmail,
  isValidPassword,
  userExists,
  isValidRecipe,
  isValidLoginFields,
  isValidLoginUser,
  isUserAdmin,
};