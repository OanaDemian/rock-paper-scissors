import { Player } from "./player.js";
import { choices } from "./choices.js";
export class RockPaperScissors {
  constructor(nameOne, nameTwo) {
    this.playerOne = new Player(nameOne);
    this.playerTwo = new Player(nameTwo);
    this.lastGame = undefined;
  }

  game(playerOneChoice, playerTwoChoice) {
    this.#handlesErrors(playerOneChoice, playerTwoChoice);
    if ((this.playerOne.name === undefined) || (this.playerTwo.name === undefined)) throw new Error(`Players must register their names.`);
    if (playerOneChoice === playerTwoChoice) {
      this.lastGame = `${this.playerOne.name} and ${this.playerTwo.name} both played ${playerOneChoice}. It's a draw!`;
      return
    }
    const winner = this.#whoWins(playerOneChoice, playerTwoChoice);
    this.lastGame = `${this.playerOne.name} played ${playerOneChoice}. ${this.playerTwo.name} played ${playerTwoChoice}. ${winner.name} wins.`;
  }

  #handlesErrors(playerOneChoice, playerTwoChoice) {
    if (!choices.includes(playerOneChoice)) throw new Error(`${playerOneChoice} must be a valid choice.`);
    if (!choices.includes(playerTwoChoice)) throw new Error(`${playerTwoChoice} must be a valid choice.`);
  }

  #whoWins(playerOneChoice, playerTwoChoice) {
   switch (playerOneChoice) {
      case 'Rock':
        return (playerTwoChoice === 'Scissors') ? this.playerOne : this.playerTwo;
      case 'Paper':
        return (playerTwoChoice === 'Rock') ? this.playerOne : this.playerTwo;
      case 'Scissors':
        return (playerTwoChoice === 'Paper') ? this.playerOne : this.playerTwo;
     default:
       throw new Error(`Players must enter valid choices.`);
    }
  }
}
