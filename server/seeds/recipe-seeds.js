const { ApolloServerPluginLandingPageProductionDefault } = require('apollo-server-core');
const mongoose = require('mongoose');
const { Recipe } = require('../models');

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongo Connection Open!");
  })
  .catch((err) => {
    console.log(err);
  });

const seedRecipes = [

  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password123'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123'
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password123'
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123'
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password123'
  }
];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(seedUsers);
};
seedDB().then(() => {
  mongoose.connection.close();
});