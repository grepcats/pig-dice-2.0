# Template

#### March 13, 2018


## Description



## _Specifications_

1. User will click a button that rolls a 6 sided dice and provides a random generated number.
* Example input: user clicks roll button
* Example output: 5

2. Display their dice roll
* Example input: rolled a 5
* Example output: Display the 5 above the roll button

3. Determine if turn ends
* Example input: rolled a 1
* Example output: turn switches to next player

4. If roll does not equal 1, store user roll value in their bank.
* Example input: rolled a 4
* Example output: bank = 4

5. A. Give player option to roll again, or push bank value to score value.
* Example input: Player chooses to push bank value to score value.
* Example output: (Bank = 5) => (Score = 5 && Bank = 0 && becomes next players turn)

5. B. Give player option to roll again, or push bank value to score value.
* Example input: Player chooses to roll again
* Example output: repeat of steps 1 - 4

6. It is the next player's turn. They get to roll.
* Example input: press button for dice roll
* Example output: repeat of steps 1 - 5

7. Game ends when a player's score equals 100.
* Example input: Player 2 score = 100
* Example output: Game End. Player 2 Wins.

## _Specifications for Computer Opponent_

1. Player 1 will click a button that rolls a 6 sided dice and provides a random generated number.
* Example input: user clicks roll button
* Example output: 5

2. Display their dice roll
* Example input: rolled a 5
* Example output: Display the 5 above the roll button

3. Determine if turn ends
* Example input: rolled a 1
* Example output: turn switches to computer

4. If roll does not equal 1, store user roll value in their bank.
* Example input: rolled a 4
* Example output: bank = 4

5. A. Give player option to roll again, or push bank value to score value.
* Example input: Player chooses to push bank value to score value.
* Example output: (Bank = 5) => (Score = 5 && Bank = 0 && becomes next players turn)

5. B. Give player option to roll again, or push bank value to score value.
* Example input: Player chooses to roll again
* Example output: repeat of steps 1 - 4

6. It is computer's turn. An automated dice roll will occur.
* Example output: Tell player what computer rolled.

6. Store computer's score after they roll or change to player.
* Example input: Computer rolls 9
* Example output: Computer score = 9
* Example input: Computer rolls 1
* Example output: Becomes player's turn

7. Game ends when a player's score equals 100.
* Example input: Player 1 score = 100
* Example output: Game End. Player 2 Wins.

## Built With

* HTML
* CSS
* Bootstrap
*Javascript
*jQuery

<!--
* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

John Rykken

-->

## Versioning

Version 1.0

## Authors

**John Rykken**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Copyright (c) 2018 **_John Rykken_**
