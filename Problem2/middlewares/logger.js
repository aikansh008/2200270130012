const { logInfo } = require('../../LoggingMiddleware/middlewares/log.js');

module.exports = (req, res, next) => {
  logInfo("handler", `${req.method} ${req.originalUrl}`);
  next();
};
