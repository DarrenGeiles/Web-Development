// backend/config/auth.js
const jwt = require('jsonwebtoken');

function auth(requiredRole) {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).send('No auth header');

    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).send('Invalid token');

      if (requiredRole && user.role !== requiredRole) {
        return res.status(403).send('Access denied');
      }

      req.user = user;
      next();
    });
  };
}

module.exports = auth;
