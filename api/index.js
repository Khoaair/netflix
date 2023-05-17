const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./Routes/auth');
const userRoute = require('./Routes/users');
const moviesRoute = require('./Routes/movies');
const listRoute = require('./Routes/lists');
const cors = require('cors');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB connection success');
  })
  .catch(err => console.log(err));

app.use(express.json());
app.use(cors());

// Route and other middleware
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/movies', moviesRoute);
app.use('/api/lists', listRoute);

app.listen(8800, () => {
  console.log('backend is running');
});
