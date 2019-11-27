const express = require('express');
const router = express.Router();

const Games = require('../models/Games.js');

//Index Route
router.get('/', (req, res) => {
    Games.find({}).sort({name: 1}).then(games => {
      res.render('games/Index', { games });
    });
  });


//if Games.length > 12 next page

// //Selector Route
// router.get('/selector/:numOfPlayers/:lengthOfGame/:desiredComplexity', (req, res) => {
//     Games.find({
//         minPlayers: {$lte: `${req.params.numOfPlayers}`},
//         maxPlayers: {$gte: `${req.params.numOfPlayers}`},
//         lengthOfGame: {$lte: `${req.params.lengthOfGame}`},
//         complexity:  `${req.params.desiredComplexity}`}).sort({name: 1}).then(games => {
//             // res.render('games/Selector', { games });
//             console.log(games);
//         });
// });
//Selector Route
router.get('/selector/:numOfPlayers', (req, res) => {
    console.log(req.params.numOfPlayers)
    console.log(Games)
    Games.find({minPlayers: { $gt: 2}}).limit(10).exec((err, games) => {
        console.log(err, games);
    });
});

//Create Route
router.get('/new', (req, res) => {
    res.render('games/New');
  });

//Show Route
router.get('/:id', (req, res) => {
    Games.findOne({ _id: req.params.id }).then(games => {
      res.render('games/Show', games);
    });
  });

//Post Route
router.post('/', (req, res) => {
    console.log(req.body);
    Games.create(req.body).then(() => {
      res.redirect('/games');
    });
  });

//Edit Route
router.get('/edit/:id', (req, res) => {
    Games.findOne({ _id: req.params.id }).then(games => {
      res.render('games/Edit', games);
    });
  });

//Update Route
router.put('/:id', (req, res) => {
    Games.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    ).then(games => {
      res.redirect(`/games/${games.id}`);
    });
  });

//Delete Route
router.delete('/:id', (req, res) => {
    Games.findOneAndRemove({ _id: req.params.id }).then(() => {
      res.redirect('/games');
    });
  });
  
module.exports = router;