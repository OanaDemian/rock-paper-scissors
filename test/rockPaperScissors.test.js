import { expect } from 'chai';
import { RockPaperScissors } from "../src/rockPaperScissors.js";


describe('Rock Paper Scissors Game Tests', () => {

  it(`returns draw when players make the same choice`, () => {
    //arrange
    const playerOne = 'Barbie';
    const playerTwo = 'Ken';
    const choice = 'Rock';
    //act
    const rockPaperScissors = new RockPaperScissors(playerOne, playerTwo);
    const result = rockPaperScissors.game(choice, choice);

    //assert
    expect(result).to.equal( `${playerOne} and ${playerTwo} both played ${choice}. It's a draw!`);
  })

  it(`checks that playerOne wins when playerOneChoice is rock and playerTwoChoice is scissors.`, () => {
    //arrange
    const playerOne = 'Barbie';
    const playerTwo = 'Ken';
    const playerOneChoice = 'Rock';
    const playerTwoChoice = 'Scissors';

    //act
    const rockPaperScissors = new RockPaperScissors(playerOne, playerTwo);
    const result = rockPaperScissors.game(playerOneChoice, playerTwoChoice);

    //assert
    expect(result).to.equal(`${playerOne} played ${playerOneChoice}. ${playerTwo} played ${playerTwoChoice}. ${playerOne} wins.`);
  })
})