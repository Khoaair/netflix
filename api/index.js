const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
const authRoute = require('./Routes/auth');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB connection success');
  })
  .catch(err => console.log(err));

// Parse incoming request bodies
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json());

// Route and other middleware
app.use('/api/auth', authRoute);

app.listen(8800, () => {
  console.log('backend is running');
});
