## Task

The DFA team ( **DFAT** ) have asked you to provide a _Rock, Paper, Scissors_ game for them so they can play on the web. The daily grind is pretty tough and they need time to have a little fun.

#### Multiplayer Rock, Paper, Scissors

Two DFAT members can play against each other ( _yes there are two of them and they'll be playing on the same computer_ )

## Instructions

1. Fork this repository and then:

```sh
$ git clone https://github.com/<YOUR GITHUB USERNAME>/rock-paper-scissors-challenge.git && cd rock-paper-scissors-challenge
$ npm install # installs dependencies listed in package.json
```

2. Run the tests from your project root directory.

```sh
$ npm test
```

3. To see the test coverage report run:

```sh
$ npm run coverage
```

4. To lint you project run:

```sh
$ npm run lint
```

5. To fix linting issues run;

```sh
$ npm run lint:fix
```

6. To format your code run;

```sh
$ npx prettier --write .
```

## Domain Model for Rock Paper Scissors Game

### User Story 1

```
As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors with another DFAT opponent
```

| Objects           | Properties      | Messages                      | Output          |
| ----------------- | --------------- | ----------------------------- | --------------- |
| Player            | name @String    |                               |                 |
| RockPaperScissors | nameOne @String |                               |                 |
|                   | nameTwo@String  | game(playerOneChoice,         |                 |
|                   |                 | playerTwoChoice @String)      | @String         |
|                   |                 | #whoWins(playerOneChoice,     |                 |
|                   |                 | playerTwoChoice @String)      | @Player, @Error |
|                   |                 | #handleErrors(playerOneChoice |                 |
|                   |                 | playerTwoChoice)              | @Error          |
| choices @Array[]  |                 |                               |                 |

#### Tests

1. Tests that RockPaperScissors returns a message when it is a draw.
2. Tests that paper beats Rock.
3. Tests that rock beats Scissors.
4. Tests that scissors beats Paper.
5. Tests that paper looses to Scissors.
6. Tests that scissors looses to Rock.
7. Tests that rock looses to Paper.
8. Tests that it throws an error when player's choice is not Rock, Paper or Scissors.
9. Tests that it throws an error when players' names are undefined.

### User Story 2

As a DFAT member
So that I can see my name
I would like to register my name before playing an online game

### User Story 3

As a DFAT member
So that I know who my opponent is
I would like to see my opponent's name while playing an online game

### User Story 3

As a DFAT member
So that I know who the winner is
I would like to see the winner's name after playing rock paper scissors online game

## Views

| Views     | Description                                         |
| --------- | --------------------------------------------------- |
| index.ejs | landing page where players register their names     |
| game.ejs  | game page where players make their choices and play |

## End Point Responsabilities

/game
redirects to /game/new if a game is not in progress
renders the form for next game inputs
shows results of last game if one has happened

takes input to

| Method | Route     | Response                                                      |
| ------ | --------- | ------------------------------------------------------------- |
| GET    | /         | displays a form to register players for a new game            |
| POST   | /game/new | receives the player names                                     |
|        |           | if player names not valid redirects to /                      |
|        |           | if player names valid creates new game and redirects to /game |
| GET    | /game     | redirects to / if a game is not in progress                   |
|        |           | displays the form for next game inputs                        |
|        |           | shows the result of the last game if one has happened         |
| POST   | /game     | receives new game data and runs the game                      |
|        |           | returns game.ejs with updated game values                     |

#### Tests

1. GET request to /index route renders the index page
2. POST request to the /game route redirects to index page when rockPaperScissors undefined
3. GET request to the /game route redirects to / when players' information not sent
4. GET request to the /game route renders the game page when player information successfully sent
5. Update lastGame value when /game posted it
6. POST requests to /game/new redirects
