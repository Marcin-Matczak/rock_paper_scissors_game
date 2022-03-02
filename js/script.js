const randomNumber = Math.floor(Math.random() * 3 + 1);

let playerInput = prompt('Choose your move: 1- rock, 2- paper, 3-scissors');

/* Computer move */

let computerMove = getMoveName(randomNumber);

/* Player move */

let playerMove = getMoveName(playerInput);

/* Game result */

displayResult(computerMove, playerMove);

console.log(`comp: ${computerMove}`);
console.log(`me: ${playerInput}`);
console.log('type:', typeof(playerInput));
