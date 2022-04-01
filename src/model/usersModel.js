const connection = require('./connection');

const createUser = async ({ name, email, password, role }) => {
  const create = await connection()
    .then((db) => db.collection('users').insertOne({ name, email, password, role }));
    return create;
};

const getUserByEmail = async (email) => {
  const findByEmail = await connection()
    .then((db) => db.collection('users').findOne({ email }));
    return findByEmail;
};

module.exports = {
  createUser,
  getUserByEmail,
};
