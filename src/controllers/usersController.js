const rescue = require('express-rescue');
const services = require('../services/usersServices');

const createUser = rescue(async (req, res) => {
  const { name, email, password } = req.body;
  const result = await services.createUser({ name, email, password });

  return res.status(201).json({ user: result });
});

const createAdminUser = rescue(async (req, res) => {
  const { name, email, password } = req.body;
  const result = await services.createAdminUser({ name, email, password });

  return res.status(201).json({ user: result });
});

module.exports = {
  createUser,
  createAdminUser,
};