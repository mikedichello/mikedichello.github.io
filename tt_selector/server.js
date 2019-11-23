const express = require('express');
const method = require('method-override');
const mongoose = require('./db/connection.js');

const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(method('_method'));
app.use(express.static('public'));

const Games = require('./models/Games.js');

const gamesController = require('./controllers/games.js');

app.get('/', (req, res) => {
  Games.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .then(games => {
      res.render('Index', { games });
    });
});

app.use('/games', gamesController);

mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

app.listen(8000, () => console.log('server is running'));
