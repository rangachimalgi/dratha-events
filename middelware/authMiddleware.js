import jwt from 'jsonwebtoken';

export const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token, not authorized' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
