var express = require('express');
var router = express.Router();

/* Sample data */
var gameArray = [{name: 'game1', frames: [[1,2], [3,4], [-1,-1], [3,-1], [-1,-1],
    [-1,-1], [-1,-1], [-1,-1], [-1,-1], [-1,-1]]}];
//var gameArray = ["game1", "game2", "game3"];


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET scores page. */
router.get('/scores', function(req, res) {
  res.render('scores', {title: 'Scores', gameArray: gameArray});
});

module.exports = router;
