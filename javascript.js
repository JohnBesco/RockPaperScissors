let randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

function getComputerChoice() {
    if (randomNumber === 1){
        return 'Rock';
    } else if (randomNumber === 2) {
        return 'Paper';
    } else if (randomNumber === 3) {
        return 'Scissors';
    }
}

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase === computerSelection) {
        return 'Its a draw!';
    } else if (playerSelection.toLowerCase() == 'rock' && randomNumber === 2) {
        return 'You lose! Paper beats Rock!';
    } else if (playerSelection.toLowerCase() == 'paper' && randomNumber === 1)  {
        return 'You win! Paper beats Rock!';
    } else if (playerSelection.toLowerCase() == 'paper' && randomNumber === 3) {
        return 'You lose! Scissors beats Paper!';
    } else if (playerSelection.toLowerCase() == 'scissors' && randomNumber === 2) {
        return 'You win! Scissors beats Paper!';
    } else if (playerSelection.toLowerCase() == 'scissors' && randomNumber === 1) {
        return 'You lose! Rock beats Scissors!';
    } else if (playerSelection.toLowerCase() == 'rock' && randomNumber === 3) {
        return 'You win! Rock beats Scissors!';
    }
}
/*
if player election is the same as the computer selection = draw

if player selection = rock & computer = paper, computer wins
if player selection = paper & computer = rock, player wins

if player selection = paper & computer = scissors, computer wins
if player selection = scissors & computer = paper, player wins

if player selection = scissors & computer = rock, computer wins
if player selection = rock & computer = scissors, player wins
*/
console.log(randomNumber)
const playerSelection = prompt("Choose your weapon!");
const computerSelection = getComputerChoice();


function game() {
    for (let i = 0; i < 5; i++){
        return playRound(playerSelection, computerSelection);
    }
}
console.log(game())

