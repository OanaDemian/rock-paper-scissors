import { Player } from "./player.js";
import { choices } from "./choices.js";
export class RockPaperScissors {
  constructor(nameOne, nameTwo) {
    this.playerOne = new Player(nameOne);
    this.playerTwo = new Player(nameTwo);
  }

  game(playerOneChoice, playerTwoChoice) {
    this.#handlesErrors(playerOneChoice, playerTwoChoice);
    if (playerOneChoice === playerTwoChoice) {
      return (`${this.playerOne.name} and ${this.playerTwo.name} both played ${playerOneChoice}. It's a draw!`);
    }
    const winner = this.#whoWins(playerOneChoice, playerTwoChoice);
    return `${this.playerOne.name} played ${playerOneChoice}. ${this.playerTwo.name} played ${playerTwoChoice}. ${winner.name} wins.`;

  }

  #handlesErrors(playerOneChoice, playerTwoChoice) {
    if (!choices.includes(playerOneChoice)) throw new Error(`${this.playerOne.name} must enter a valid choice.`);
    if (!choices.includes(playerTwoChoice)) throw new Error(`${this.playerTwo.name} must enter a valid choice.`);
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
       throw new Error(`${this.playerOne.name} must enter a valid choice.`);
    }
  }
}
