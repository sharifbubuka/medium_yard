const express = require('express');

const appRouter = express.Router();

appRouter.get('/', (req, res) => {
  res.render('index');
});

module.exports = appRouter;
