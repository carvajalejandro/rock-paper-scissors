let playerScore = 0;
let compScore = 0;


const computerPlay=() => {
const arrOfChoices = ['rock','paper', 'scissors']
const randomNum= Math.floor(Math.random()*3)
const compChoice= arrOfChoices[randomNum];
return compChoice;
}

const playRound = (playerSelection, computerSelection) =>{
    if (playerSelection==='rock' && computerSelection==='rock'){
        return 'You tied! You both chose rock'
    } else  if (playerSelection==='paper' && computerSelection==='paper'){
        return 'You tied! You both chose paper'
    } else if (playerSelection==='scissors' && computerSelection==='scissors'){
        return 'You tied! You both chose scissors'
    } else if (playerSelection==='rock' && computerSelection==='scissors'){
        playerScore++
        return 'You win! Rock crushes Scissors'
    } else if (playerSelection==='paper' && computerSelection==='rock'){
        playerScore++
        return 'You win! Paper wraps Rock'
    } else if (playerSelection==='scissors' && computerSelection==='paper'){
        playerScore++
        return 'You win! Scissors cut Paper'
    } else if (playerSelection==='scissors' && computerSelection==='rock'){
        compScore++
        return 'You lose! Rock crushes Scissors';
    } else if (playerSelection==='paper' && computerSelection==='scissors'){
        compScore++
        return 'You lose! Scissors cut Paper'
    } else if (playerSelection==='rock' && computerSelection==='paper'){
        compScore++
        return 'You lose! Paper wraps Rock'
        
    }   
};


const game= ()=>{
    for(let i=0; i < 5; i++ ){
        const computerSelection = computerPlay();
        const playerSelection = prompt ('Choose your weapon!', 'Rock, Paper, or Scissors.').toLocaleLowerCase();
        playRound(playerSelection,computerSelection);
    }
    if (playerScore>compScore){
        return 'You beat the computer'
    } else if (playerScore<compScore){
        return 'You lost to the computer'
    } else{
        return 'You tied!'
    }  
  }
console.log(game());