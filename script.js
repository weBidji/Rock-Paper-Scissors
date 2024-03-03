// the player must make a selection

let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

function playerSelection(){

  playerChoice = prompt('Rock, paper or scissors?');
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors'){
    
    console.log(`You picked ${playerChoice}.`)

  return playerChoice;
  

  } else {
    alert('Please enter a valid selection.');
    
  }
}


//computer selection function

function computerSelection(){

    let randomNumber = Math.floor(Math.random()*3);
    

 switch(randomNumber){
    case 0:
      computerChoice = 'rock';
      
      break;

    case 1:
      computerChoice = 'paper';
      
      break;

    case 2:
      computerChoice = 'scissors'
      
  }
  console.log(`Your opponent picked ${computerChoice}.`)
  
  }


// the round must be played, comparing selections, then increase scores accordingly

function playRound(){

  playerSelection();
  computerSelection();


    
    if (playerChoice === computerChoice) {
 
        console.log ("It's a tie!")
    } else if ((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'rock')){
        console.log('Computer wins the round!');
        // computerScore++;
        // console.log(computerScore);
    } else {
        console.log('You win the round!');
        // playerScore++;
        // console.log(playerScore);
    }

    // console.log(`Player score: ${playerScore} | Computer Score: ${computerScore}`);
}


// then increase scores accordingly