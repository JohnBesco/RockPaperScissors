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

const container = document.querySelector('#container');

const announcement = document.createElement('div');
announcement.classList.add('announcement');
announcement.textContent = '';
container.appendChild(announcement);

announcement.setAttribute('style', 'white-space: pre;');

const announcementTwo = document.createElement('div');
announcementTwo.classList.add('announcementTwo');
container.appendChild(announcementTwo);

let playerScore = 0;
let computerScore = 0;


function gameOver(playerScore, computerScore) {
    if (playerScore > computerScore) {
      announcementTwo.textContent = 'Congratulations! You won the game!';
    } else if (playerScore < computerScore) {
      announcementTwo.textContent = 'You lost the game. Better luck next time!';
    } else {
      announcementTwo.textContent = 'The game ended in a draw.';
    }
}

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
        return announcement.textContent = `Its a draw! \n Playerscore: ${playerScore} Computerscore: ${computerScore}`;
    } else if (playerChoice === '🗿' && computerSelection === '📄') {
        computerScore++;
        console.log(playerScore);
        console.log(computerScore);
        return announcement.textContent = `You lose! Paper beats Rock! \n Playerscore: ${playerScore} Computerscore: ${computerScore}`;
    } else if (playerChoice === '📄' && computerSelection === '🗿')  {
        playerScore++;
        console.log(playerScore);
        console.log(computerScore);
        return announcement.textContent = `You win! Paper beats Rock! \n Playerscore: ${playerScore} Computerscore: ${computerScore}`
    } else if (playerChoice === '📄' && computerSelection === '✂️') {
        computerScore++;
        console.log(playerScore);
        console.log(computerScore);
        return announcement.textContent = `You lose! Scissors beats Paper! \n Playerscore: ${playerScore} Computerscore: ${computerScore}`;
    } else if (playerChoice === '✂️' && computerSelection === '📄') {
        playerScore++;
        console.log(playerScore);
        console.log(computerScore);
        return announcement.textContent = `You win! Scissors beats Paper! \n Playerscore: ${playerScore} Computerscore: ${computerScore}`;
    } else if (playerChoice === '✂️' && computerSelection === '🗿') {
        computerScore++
        console.log(playerScore);
        console.log(computerScore);
        return announcement.textContent = `You lose! Rock beats Scissors! \n Playerscore: ${playerScore} Computerscore: ${computerScore}`;
    } else if (playerChoice === '🗿' && computerSelection === '✂️') {
        playerScore++;
        console.log(computerScore);
        return announcement.textContent = `You win! Rock beats Scissors! \n Playerscore: ${playerScore} Computerscore: ${computerScore}`;
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
    console.log(computerSelection);
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





