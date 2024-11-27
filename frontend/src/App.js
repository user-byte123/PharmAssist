const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//inititializing express
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//MongoDB connection
const mongoUri = process.env.MONGO_URI;
mongoose
  .connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> console.log('Connected to MongoDB'))
  .catch((err)=> console.error('Failed to connect to MongoDB:',err));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
