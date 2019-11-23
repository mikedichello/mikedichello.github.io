const Games = require('../models/Games');
const data = require('./seeds.json');
const mongoose = require('./connection.js');

mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

Games.deleteMany({})
  .then(() => {
    return Games.collection.insertMany(data);
  })
  .then(() => {
    process.exit();
  });
