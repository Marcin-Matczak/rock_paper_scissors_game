function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

const randomNumber = Math.floor(Math.random() * 3 + 1);

let playerInput = Number(prompt('Choose your move: 1- rock, 2- paper, 3-scissors'));

const unknownMoveAlert = playerInput => {
    if ( playerInput = !NaN || playerInput < 1 || playerInput > 3 ) {
        alert('You entered an invalid value. Please, try again.');
    }
}