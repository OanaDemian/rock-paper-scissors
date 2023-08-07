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

  it(`checks that playerOne wins when playerOneChoice is paper and playerTwoChoice is rock.`, () => {
      //arrange
      const playerOne = 'Barbie';
      const playerTwo = 'Ken';
      const playerOneChoice = 'Paper';
      const playerTwoChoice = 'Rock';

      //act
      const rockPaperScissors = new RockPaperScissors(playerOne, playerTwo);
      const result = rockPaperScissors.game(playerOneChoice, playerTwoChoice);

      //assert
      expect(result).to.equal(`${playerOne} played ${playerOneChoice}. ${playerTwo} played ${playerTwoChoice}. ${playerOne} wins.`);
    })
  
  it(`checks that playerOne wins when playerOneChoice is scissors and playerTwoChoice is paper.`, () => {
      //arrange
      const playerOne = 'Barbie';
      const playerTwo = 'Ken';
      const playerOneChoice = 'Scissors';
      const playerTwoChoice = 'Paper';

      //act
      const rockPaperScissors = new RockPaperScissors(playerOne, playerTwo);
      const result = rockPaperScissors.game(playerOneChoice, playerTwoChoice);

      //assert
      expect(result).to.equal(`${playerOne} played ${playerOneChoice}. ${playerTwo} played ${playerTwoChoice}. ${playerOne} wins.`);
  })

  it(`checks that playerOne looses when playerOneChoice is rock and playerTwoChoice is paper.`, () => {
      //arrange
      const playerOne = 'Barbie';
      const playerTwo = 'Ken';
      const playerOneChoice = 'Rock';
      const playerTwoChoice = 'Paper';

      //act
      const rockPaperScissors = new RockPaperScissors(playerOne, playerTwo);
      const result = rockPaperScissors.game(playerOneChoice, playerTwoChoice);

      //assert
      expect(result).to.equal(`${playerOne} played ${playerOneChoice}. ${playerTwo} played ${playerTwoChoice}. ${playerTwo} wins.`);
  })

  it(`checks that playerOne looses when playerOneChoice is paper and playerTwoChoice is scissors.`, () => {
      //arrange
      const playerOne = 'Barbie';
      const playerTwo = 'Ken';
      const playerOneChoice = 'Paper';
      const playerTwoChoice = 'Scissors';

      //act
      const rockPaperScissors = new RockPaperScissors(playerOne, playerTwo);
      const result = rockPaperScissors.game(playerOneChoice, playerTwoChoice);

      //assert
      expect(result).to.equal(`${playerOne} played ${playerOneChoice}. ${playerTwo} played ${playerTwoChoice}. ${playerTwo} wins.`);
  })

  it(`checks that playerOne looses when playerOneChoice is scissors and playerTwoChoice is rock.`, () => {
      //arrange
      const playerOne = 'Barbie';
      const playerTwo = 'Ken';
      const playerOneChoice = 'Scissors';
      const playerTwoChoice = 'Rock';

      //act
      const rockPaperScissors = new RockPaperScissors(playerOne, playerTwo);
      const result = rockPaperScissors.game(playerOneChoice, playerTwoChoice);

      //assert
      expect(result).to.equal(`${playerOne} played ${playerOneChoice}. ${playerTwo} played ${playerTwoChoice}. ${playerTwo} wins.`);
  })

  it(`returns an error if playerOneChoice is not rock, paper or scissors.`, () => {
      //arrange
      const playerOne = 'Barbie';
      const playerTwo = 'Ken';
      const playerOneChoice = 'Dog';
      const playerTwoChoice = 'Rock';

      //act
      const rockPaperScissors = new RockPaperScissors(playerOne, playerTwo);
      try {
        rockPaperScissors.game(playerOneChoice, playerTwoChoice);
      } catch(error){};

      //assert 
      expect(() =>  rockPaperScissors.game(playerOneChoice, playerTwoChoice)).to.throw(`${playerOne} must enter a valid choice.`);
  })

    it(`returns an error if playerTwoChoice is not rock, paper or scissors.`, () => {
      //arrange
      const playerOne = 'Barbie';
      const playerTwo = 'Ken';
      const playerOneChoice = 'Rock';
      const playerTwoChoice = 'Cat';

      //act
      const rockPaperScissors = new RockPaperScissors(playerOne, playerTwo);
      try {
        rockPaperScissors.game(playerOneChoice, playerTwoChoice);
      } catch(error){};

      //assert 
      expect(() =>  rockPaperScissors.game(playerOneChoice, playerTwoChoice)).to.throw(`${playerTwo} must enter a valid choice.`);
  })

})