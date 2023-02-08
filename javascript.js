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
let computerSelection = choices[Math.floor(Math.random() * choices.length)];


function playRound(playerSelection, computerSelection) {
    let playerChoice;
    if (playerSelection === 'rock') {
        playerChoice = '🗿';
    } else if (playerSelection === 'paper') {
        playerChoice = '📄';
    } else if (playerSelection === 'scissors') {
        playerChoice = '✂️';
    }

    if (playerChoice === computerSelection) {
        return 'Its a draw!';
    } else if (playerChoice === '🗿' && computerSelection === '📄') {
        return 'You lose! Paper beats Rock!';
    } else if (playerChoice === '📄' && computerSelection === '🗿')  {
        return 'You win! Paper beats Rock!';
    } else if (playerChoice === '📄' && computerSelection === '✂️') {
        return 'You lose! Scissors beats Paper!';
    } else if (playerChoice === '✂️' && computerSelection === '📄') {
        return 'You win! Scissors beats Paper!';
    } else if (playerChoice === '✂️' && computerSelection === '🗿') {
        return 'You lose! Rock beats Scissors!';
    } else if (playerChoice === '🗿' && computerSelection === '✂️') {
        return 'You win! Rock beats Scissors!';
    }
}



const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");


rockButton.addEventListener('click', function() {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    let computerContent = document.querySelector('#computerContent');
    computerContent.textContent = computerSelection;
    console.log(computerSelection);
    let playerSelection = this.id
    let playerContent = document.querySelector('#playerContent');
    playerContent.textContent = '🗿'
    console.log(playRound(playerSelection,computerSelection));
})

paperButton.addEventListener('click', function() {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    let computerContent = document.querySelector('#computerContent');
    computerContent.textContent = computerSelection;
    let playerSelection = this.id
    let playerContent = document.querySelector('#playerContent');
    playerContent.textContent = '📄'
    console.log(playRound(playerSelection,computerSelection));
});

scissorsButton.addEventListener('click', function() {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    let computerContent = document.querySelector('#computerContent');
    computerContent.textContent = computerSelection;
    let playerSelection = this.id
    let playerContent = document.querySelector('#playerContent');
    playerContent.textContent = '✂️'
    console.log(playRound(playerSelection,computerSelection));
});






/* function game() {
    for (let i = 0; i < 20; i++){
        return playRound(playerSelection, computerSelection);
    }
}*/

//console.log(game(playRound(playerSelection, computerSelection)))


