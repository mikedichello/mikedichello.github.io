const express = require('express');
const router = express.Router();

const Games = require('../models/Games.js');

//Index Route
router.get('/', (req, res) => {
    Games.find({}).then(games => {
      res.render('games/Index', { games });
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
      res.redirect('/');
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