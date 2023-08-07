import { Player } from "./player.js";
export class RockPaperScissors {
  constructor(nameOne, nameTwo) {
    this.playerOne = new Player(nameOne);
    this.playerTwo = new Player(nameTwo);
  }

  game(playerOneChoice, playerTwoChoice) {
    if (playerOneChoice === playerTwoChoice) {
      return (`${this.playerOne.name} and ${this.playerTwo.name} both played ${playerOneChoice}. It's a draw!`);
    }
    const winner = this.whoWins(playerOneChoice, playerTwoChoice);
    return `${this.playerOne.name} played ${playerOneChoice}. ${this.playerTwo.name} played ${playerTwoChoice}. ${winner.name} wins.`;

  }

  #privateWhoWins(playerOneChoice, playerTwoChoice) {
   switch (playerOneChoice) {
      case 'Rock':
        return (playerTwoChoice === 'Scissors') ? this.playerOne : this.playerTwo;
      case 'Paper':
        return (playerTwoChoice === 'Rock') ? this.playerOne : this.playerTwo;
      case 'Scissors':
        return (playerTwoChoice === 'Paper') ? this.playerOne : this.playerTwo;
      default:
        throw new Error(`Could not determine a winner.`)
    }
  }
}
