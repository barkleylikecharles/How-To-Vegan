const mongoose = require('mongoose');
const dotenv = require("dotenv")

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/how-to-vegan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});



module.exports = mongoose.connection;
