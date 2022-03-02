/* Computer move */

let computerMove = 'Unknown movement';

if (randomNumber == 1) {
    computerMove = 'rock';
} else if (randomNumber == 2) {
    computerMove = 'paper';
} else if (randomNumber == 3) {
    computerMove = 'scissors';
} else {
    computerMove = 'Unknow movement';
}

printMessage(`Your opponent's move is: ${computerMove}`);

/* Player move */

if (playerInput == 1) {
    playerInput = 'rock';
    printMessage(`Your move is: ${playerInput}`);
} else if (playerInput == 2) {
    playerInput = 'paper';
    printMessage(`Your move is: ${playerInput}`);
} else if (playerInput == 3) {
    playerInput = 'scissors';
    printMessage(`Your move is: ${playerInput}`);
} else {
    unknownMoveAlert();
}

