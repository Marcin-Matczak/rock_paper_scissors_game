function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

/*const unknownMoveAlert = (arg) => {
    let checkValue = isNaN(arg);
    console.log('check:', checkValue);
    if (checkValue) {
        return alert('The entered value is not a number. Please, try again.');
    } else {
        return alert('The entered value is not from the range 1 - 3. Please, try again.')
    }
}*/

function getMoveName(moveId) {
    if (moveId == 1) {
        return 'rock';
    } else if (moveId == 2) {
        return 'paper';
    } else if (moveId == 3) {
        return 'scissors';
    }
}

function displayResult(computerMove, playerMove) {
    if (computerMove == playerMove) {
        printMessage(`Your move is: ${playerMove}`);
        printMessage(`Your opponent's move is: ${computerMove}`);
        printMessage('We have a draw.');
    } else if ((computerMove == 'rock' && playerMove == 'paper') || (computerMove == 'paper' && playerMove == 'scissors')) {
        printMessage(`Your move is: ${playerMove}`);
        printMessage(`Your opponent's move is: ${computerMove}`);
        printMessage('You win!');
    } else if ((computerMove == 'rock' && playerMove == 'scissors') || (computerMove == 'paper' && playerMove == 'rock')) {
        printMessage(`Your move is: ${playerMove}`);
        printMessage(`Your opponent's move is: ${computerMove}`);
        printMessage('You lose!');
    }

}

function playGame(arg) {

    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(arg);

    displayResult(computerMove, playerMove);
}

