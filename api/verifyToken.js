const jwt = require('jsonwebtoken');

function verify(req, res, next) {
  const authHeader = req.headers.token;
  if (!authHeader) {
    return res.status(401).json('You are not authenticated!');
  } else {
    try {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json('Token is not valid');
        req.user = user;
        next();
      });
    } catch (error) {
      return res.status(401).json('Invalid Token');
    }
  }
}

module.exports = verify;
