const errorMiddleware = (err, req, res, next) => {
  if (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = errorMiddleware;
