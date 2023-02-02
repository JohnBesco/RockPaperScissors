/*
if player election is the same as the computer selection = draw

if player selection = rock & computer = paper, computer wins
if player selection = paper & computer = rock, player wins

if player selection = paper & computer = scissors, computer wins
if player selection = scissors & computer = paper, player wins

if player selection = scissors & computer = rock, computer wins
if player selection = rock & computer = scissors, player wins
*/

function playRound(playerSelection, computerSelection) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerSelection = choices[Math.floor(Math.random() * choices.length)];
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

const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    const buttonId = event.target.id;
    //console.log(`Button with ID "${buttonId}" was clicked.`);
  });
}); // This function grabs the id of the button clicked by the player





/* function game() {
    for (let i = 0; i < 20; i++){
        return playRound(playerSelection, computerSelection);
    }
}*/

//console.log(game(playRound(playerSelection, computerSelection)))


