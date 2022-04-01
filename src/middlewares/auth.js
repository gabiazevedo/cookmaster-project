const jwt = require('jsonwebtoken');
const model = require('../model/usersModel');

const secret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  
  try {
    if (!token) {
      return res.status(401).json({ message: 'missing auth token' });
    }
    const decoded = jwt.verify(token, secret);

    const user = await model.getUserByEmail(decoded.email);

    if (!user) {
      return res.status(401).json({ message: 'jwt malformed' });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = { auth };