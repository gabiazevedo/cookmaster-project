const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const model = require('../model/usersModel');

const secret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

const createToken = rescue(async (req, res) => {
  const { email } = req.body;
 
  const user = await model.getUserByEmail(email);

  const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
  };

  const { _id, role } = user;
  
  const token = jwt.sign({ _id, email, role }, secret, jwtConfig);
    return res.status(200).json({ token });
});

module.exports = { createToken };
