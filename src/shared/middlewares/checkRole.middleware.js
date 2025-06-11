
const checkRole = (role) => {
    return (req, res, next) => {
    if (req.user?.role !== role) {
      return res.status(403).json({ message: 'Forbidden: wrong role' });
    }
    next();
  };
};

export default checkRole;