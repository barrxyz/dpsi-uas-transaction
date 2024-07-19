
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var userRouter = require('./routes/userRouter');
var transactionRouter = require('./routes/transactionRouter');
var budgetRouter = require('./routes/budgetRouter');
var financialGoalRouter = require('./routes/financial_goalsRouter');
var indexRouter = require('./routes/index');


app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/transactions', transactionRouter);
app.use('/budgets', budgetRouter);
app.use('/financial-goals', financialGoalRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
