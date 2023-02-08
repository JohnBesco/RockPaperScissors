/*
if player election is the same as the computer selection = draw

if player selection = rock & computer = paper, computer wins
if player selection = paper & computer = rock, player wins

if player selection = paper & computer = scissors, computer wins
if player selection = scissors & computer = paper, player wins

if player selection = scissors & computer = rock, computer wins
if player selection = rock & computer = scissors, player wins
*/

let choices = ['🗿', '📄', '✂️'];

function playRound(playerSelection, computerSelection) {
    console.log(computerSelection);
    if (playerSelection == computerSelection) {
        return 'Its a draw!';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        return 'You lose! Paper beats Rock!';
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock')  {
        return 'You win! Paper beats Rock!';
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Scissors beats Paper!';
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beats Paper!';
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        return 'You lose! Rock beats Scissors!';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        return 'You win! Rock beats Scissors!';
    }
}


const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

let computerSelection = choices[Math.floor(Math.random() * choices.length)];


rock.addEventListener('click', function() {
    let computerContent = document.querySelector('#computerContent');
    computerContent.textContent = computerSelection;
    let playerSelection = this.id
    let playerContent = document.querySelector('#playerContent');
    playerContent.textContent = '🗿'
    console.log(playRound(playerSelection, computerSelection));
})

paperButton.addEventListener('click', function() {
    let playerSelection = this.id
    let playerContent = document.querySelector('#playerContent');
    playerContent.textContent = '📄'
    console.log(playRound(playerSelection, computerSelection));
});

scissorsButton.addEventListener('click', function() {
    let playerSelection = this.id
    let playerContent = document.querySelector('#playerContent');
    playerContent.textContent = '✂️'
    console.log(playRound(playerSelection, computerSelection));
});






/* function game() {
    for (let i = 0; i < 20; i++){
        return playRound(playerSelection, computerSelection);
    }
}*/

//console.log(game(playRound(playerSelection, computerSelection)))


