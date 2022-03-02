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
    printMessage('Your move is invalid value. Please try again.');
}

/* Game result */

let playerMove = playerInput;

if ( (computerMove == 'rock' && playerMove == 'rock') || (computerMove == 'paper' && playerMove == 'paper') || (computerMove == 'scissors' && playerMove == 'scissors')) {
    printMessage('We have a draw');
} else if ( (computerMove == 'rock' && playerMove == 'paper') || (computerMove == 'paper' && playerMove == 'scissors')) {
    printMessage('You win!'); 
} else if ( (computerMove == 'rock' && playerMove == 'scissors') || (computerMove == 'paper' && playerMove == 'rock')) {
    printMessage('You lose!');
}