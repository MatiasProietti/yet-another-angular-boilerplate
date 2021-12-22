module.exports = (req, res, next) => {
  const delay = Math.floor(Math.random() * (2000 - 250 + 1)) + 250;
  setTimeout(() => {
    next();
  }, delay);
};
