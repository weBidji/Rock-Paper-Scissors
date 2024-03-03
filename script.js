// the player must make a selection
let playerSelection;
let playerScore = 0;

// the computer must make a selection
let computerSelection = getComputerChoice();
let computerScore = 0;
//computer selection function

function getComputerChoice(){

    let randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
    case 0:
      return'rock';
    case 1:
      return'paper';
    case 2:
      return'scissors';
  }
  }


// the round must be played, comparing selections

function playRound (playerSelection, computerSelection){
    
    if (playerSelection === computerSelection) {
 
        console.log ("It's a tie")
    } else if ((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'rock')){
        console.log('Computer wins the round');
        computerScore++;
    } else {
        console.log('You win the round');
        playerScore++;
    }

    console.log(`Player score: ${playerScore} | Computer Score: ${computerScore}`);
}


// then increase scores accordingly