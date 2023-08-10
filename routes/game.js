import express from 'express';
import { RockPaperScissors } from '../src/rockPaperScissors.js';

export const router = express.Router();

router.get('/', (req, res) => {
  if (typeof req.app.locals.rockPaperScissors === "undefined") {
    res.redirect('/');
  }
  console.log((typeof req.app.locals.rockPaperScissors))
  const playerOne = req.app.locals.rockPaperScissors.playerOne;
  const playerTwo = req.app.locals.rockPaperScissors.playerTwo;

  res.render('game', {
    playerOne: playerOne.name,
    playerTwo: playerTwo.name,
    lastGame: req.app.locals.rockPaperScissors.lastGame
  });  
})

router.post('/new', (req, res) => {
  const name1 = req.body.playerOne;
  const name2 = req.body.playerTwo;
  const rockPaperScissors = new RockPaperScissors(name1, name2);
  req.app.locals.rockPaperScissors = rockPaperScissors;
  res.redirect('/game');
})

router.post('/', (req, res) => {
  const playerOneChoice = req.body.playerOneChoice;
  const playerTwoChoice = req.body.playerTwoChoice;
  const playerOne = req.app.locals.rockPaperScissors.playerOne;
  const playerTwo = req.app.locals.rockPaperScissors.playerTwo;
  req.app.locals.rockPaperScissors.game(playerOneChoice, playerTwoChoice);
  res.render('game', {
    playerOne: playerOne.name,
    playerTwo: playerTwo.name,
    lastGame: req.app.locals.rockPaperScissors.lastGame
  });  
})
