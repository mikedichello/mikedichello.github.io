const mongoose = require('../db/connection');

const GameSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: String,
    minPlayers: {type: Number, min: 1},
    maxPlayers: {type: Number, min: 1},
    complexity: String,
    lengthOfGame: Number
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;