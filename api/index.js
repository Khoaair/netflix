const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./Routes/auth');
const userRoute = require('./Routes/users');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB connection success');
  })
  .catch(err => console.log(err));

app.use(express.json());

// Route and other middleware
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);

app.listen(8800, () => {
  console.log('backend is running');
});
