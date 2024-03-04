
let playerChoice;
let computerChoice;
let winner;
let loser;
let playerScoreCount = 0;
let computerScoreCount = 0;
let isRoundPlaying = false;
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('cpu-score');
playerScore.innerText = ` ${playerScoreCount}`;
computerScore.innerText = ` ${computerScoreCount}`;


const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const cpuRock = document.getElementById('cpu-rock');
const cpuPaper = document.getElementById('cpu-paper');
const cpuScissors = document.getElementById('cpu-scissors');

const gameInfo = document.getElementById('game-info');

let playerSelected;

let computerSelected;

;


let playerPicks = [rock, paper, scissors];
let cpuPicks = [cpuRock, cpuPaper, cpuScissors];

playerPicks.forEach((pick) => {
  pick.addEventListener('click', (event) => {
    if (!isRoundPlaying) {
      pick.classList.add('player-selected');
      playerSelected = document.querySelector('.player-selected');
      console.log(playerSelected);

      switch (pick.id) {
        case 'rock':
          playerChoice = 'rock';
          break;

        case 'paper':
          playerChoice = 'paper';
          break;

        case 'scissors':
          playerChoice = 'scissors';
          break;
      }

      playRound();
    } else {
      event.preventDefault();
    }
  });
});

function playRound() {

  isRoundPlaying = true;

  playerPicks.forEach((pick) => {
    pick.classList.add('disabled-hover');
  });

  computerSelection();

  console.log('you: ' + playerChoice);
  console.log('cpu: ' + computerChoice);

  if (playerChoice === computerChoice) {

    gameInfo.innerText = "It's a tie!"
    console.log('tie');
    computerSelected.style.borderRight = '20px solid yellow';
    computerSelected.style.borderRadius = '100px';
    playerSelected.style.borderLeft = '20px solid yellow';
    playerSelected.style.borderRadius = '100px';

  } else if ((computerChoice === 'rock' && playerChoice === 'scissors') || (computerChoice === 'scissors' && playerChoice === 'paper') || (computerChoice === 'paper' && playerChoice === 'rock')) {


    gameInfo.innerText = 'Computer wins the round!';
    computerScoreCount++;
    winner = computerChoice;
    loser = playerChoice;

    playerSelected.style.borderLeft = '20px solid red';
    computerSelected.style.borderRight = '20px solid green'
    computerSelected.style.borderRadius = '100px';

  } else {

    gameInfo.innerText = 'You win the round!';
    playerScoreCount++;



    winner = playerChoice;
    loser = computerChoice;

    playerSelected.style.borderLeft = '20px solid green';
    computerSelected.style.borderRight = '20px solid red'
    computerSelected.style.borderRadius = '100px';
  }



  updateScores();

  checkForWin();

  setTimeout(resetBoard, 1500);


}




function computerSelection() {


  let randomNumber = Math.floor(Math.random() * 3);


  switch (randomNumber) {

    case 0:
      computerChoice = 'rock';
      cpuRock.classList.add('cpu-selected')


      break;

    case 1:
      computerChoice = 'paper';
      cpuPaper.classList.add('cpu-selected')


      break;

    case 2:
      computerChoice = 'scissors'
      cpuScissors.classList.add('cpu-selected')


  }

  computerSelected = document.querySelector('.cpu-selected');


}

function updateScores() {
  playerScore.innerText = ` ${playerScoreCount}`;
  computerScore.innerText = ` ${computerScoreCount}`;
}

function checkForWin() {

  if (playerScore === 3) {
    gameInfo.innerText = "You win!"
  } else if (computerScore === 3) {
    gameInfo.innerText = "Computer wins!"
  } else {
    return;
  }
}

function resetBoard() {

  playerPicks.forEach((pick) => {
    pick.classList.remove('player-selected')

    pick.classList.remove('disabled-hover');

  })

  cpuPicks.forEach((pick) => {
    pick.classList.remove('cpu-selected')
  })

  gameInfo.innerText = '';

  playerSelected.style.borderLeft = '';
  computerSelected.style.borderRight = '';

  isRoundPlaying = false;

}





