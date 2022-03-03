{
    function printMessage(msg) {
        let div = document.createElement('div');
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
    }

    function clearMessages(element) {
        let clean = String(element);
        document.getElementById(clean).innerHTML = '';
    }

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
            addPoint("player", 1);
        } else if ((computerMove == 'rock' && playerMove == 'scissors') || (computerMove == 'paper' && playerMove == 'rock')) {
            printMessage(`Your move is: ${playerMove}`);
            printMessage(`Your opponent's move is: ${computerMove}`);
            printMessage('You lose!');
            addPoint("computer", 1);
        }

    }

    function playGame(arg) {

        clearMessages('messages');

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const computerMove = getMoveName(randomNumber);
        const playerMove = getMoveName(arg);

        displayResult(computerMove, playerMove);
    }

}

{ 

    function showPoint(score, competitor) {

        if (competitor === "player") {
            let div = document.createElement('div');
            div.innerHTML = score;
            document.getElementById('player-score').appendChild(div);
        } else if (competitor === "computer") {
            let div = document.createElement('div');
            div.innerHTML = score;
            document.getElementById('computer-score').appendChild(div);
        }
    }

    function addPoint(competitor, point) {

        if (competitor === "player" && playerScore < 3) {
            playerScore += point;
            clearMessages('player-score');            
            showPoint(playerScore, "player");
            console.log("player:", playerScore);
        } else if (competitor === "computer" && computerScore < 3) {
            computerScore += point;
            clearMessages('computer-score');            
            showPoint(computerScore, "computer");
            console.log("comp:", computerScore);
        }
    }
}





