const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/games', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true
});
mongoose.Promise = Promise;

module.exports = mongoose;
