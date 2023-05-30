const jwt = require('jsonwebtoken');

const verifyToken = function (req, res, next) {
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided!' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
    req.decoded = decoded;
    next();
  } catch {
    return res.status(503).json({ message: 'Authorization failed' });
  }
};

module.exports = verifyToken;
