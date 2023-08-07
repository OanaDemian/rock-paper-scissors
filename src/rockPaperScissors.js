import { Player } from "./player.js";
export class RockPaperScissors {
  constructor(nameOne, nameTwo) {
    this.playerOne = new Player(nameOne);
    this.playerTwo = new Player(nameTwo);
  }

  game(playerChoiceOne, playerChoiceTwo) {
    if (playerChoiceOne === playerChoiceTwo) {
      return (`${this.playerOne.name} and ${this.playerTwo.name} both played ${playerChoiceOne}. It's a draw!`);
    }
  }
}
