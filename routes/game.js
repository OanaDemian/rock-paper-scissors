import express from 'express';
import { RockPaperScissors } from '../src/rockPaperScissors.js';
import { check, validationResult } from 'express-validator';

export const router = express.Router();

router.get('/', (req, res) => {
  if (typeof req.app.locals.rockPaperScissors === "undefined") {
    res.redirect('/');
  }
  const playerOne = req.app.locals.rockPaperScissors.playerOne;
  const playerTwo = req.app.locals.rockPaperScissors.playerTwo;

  res.render('game', {
    playerOne: playerOne.name,
    playerTwo: playerTwo.name,
    lastGame: req.app.locals.rockPaperScissors.lastGame
  });  
})

router.post('/new', [
  check('playerOne', 'Name is required').notEmpty().isLength({ min: 2 }),
  check('playerTwo', 'Name is required').notEmpty().isLength({ min: 2 }),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) res.redirect('/');
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
