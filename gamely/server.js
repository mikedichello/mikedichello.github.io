const express = require('express');
const method = require('method-override');
const mongoose = require('./db/connection.js');
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(method('_method'));
app.use(express.static('public'));

const Games = require('./models/Games.js');

const gamesController = require('./controllers/games.js');

app.get('/', (req, res) => {
  res.render('Home.jsx')
});

app.use('/games', gamesController);

mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

app.listen(port, () => console.log('server is running'));
