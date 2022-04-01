const model = require('../model/usersModel');

const createUser = async ({ name, email, password, role }) => {
  const result = await model.createUser({ name, email, password, role });
  return {
    name,
    email,
    role: 'user',
    _id: result.insertedId,
  };
};

const createAdminUser = async ({ name, email, password, role }) => {
  const result = await model.createUser({ name, email, password, role });
  return {
    name,
    email,
    role: 'admin',
    _id: result.insertedId,
  };
};

module.exports = {
  createUser,
  createAdminUser,
};
