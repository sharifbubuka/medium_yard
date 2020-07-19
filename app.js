const express = require('express');
const chalk = require('chalk');
const path = require('path');
// const ejs = require('ejs');
const appRouter = require('./routes/user_route');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(`${__dirname}/public/`)));
app.use(express.static(path.join(`${__dirname}/js/`)));
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', appRouter);
// app.use('/index.html', appRouter);

app.listen(port, () => {
  console.log(chalk.green(`Listening at port ${port}`));
});
