const jwt = require('jsonwebtoken');

const verifyToken = function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(402).json({ message: 'No header provided!' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided!' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
    req.decoded = decoded;
    next();
  } catch {
    return res.status(401).json({ message: 'Authorization failed' });
  }
};

module.exports = verifyToken;
