
let computerMove = 'Unknown movement';

if ( randomNumber == 1) {
    computerMove = 'rock';
} else if ( randomNumber == 2 ) {
    computerMove = 'paper';
} else if ( randomNumber == 3 ) {
    computerMove = 'scissors';
} else {
    computerMove = 'Unknow movement';
}

printMessage(`Your opponent's move is: ${computerMove}`);
