//Elements
const body= document.querySelector(".body");
body.setAttribute('style', 'display:flex; justify-content:center; text-align: center;')
const gameDiv= document.querySelector("#gameDiv");
const results=document.querySelector("#results");
results.setAttribute('style', 'display:flex; justify-content: space-evenly;')
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const playerWins = document.querySelector("#playerWins");
const computerWins = document.querySelector("#computerWins");
const ties = document.querySelector("#ties");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const gameOverContainer=document.querySelector("#gameOverContainer");
playerWins.style.cssText= 'margin-left:10px; margin-right:10px;'
computerWins.style.cssText= 'margin-left:10px; margin-right:10px;'
ties.style.cssText= 'margin-left:10px; margin-right:10px;'

//Variables
let player;
let playerScore =0;
let computerScore=0;
let computer;
let tieScore=0;;
let result;

//EventListener to start the game
choiceBtns.forEach(button => button.addEventListener("click", () => {
//this checks if either player or computer score is already at 5
if(playerScore===5|| computerScore===5){
    return;
//This displays the results of the round
} else{
    player= button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}  `;
    computerText.textContent = `Computer: ${computer}  `;
    resultText.textContent = playRound();
    playerWins.textContent=`Player Wins:  ${playerScore}  `;
    computerWins.textContent=`Computer Wins:  ${computerScore}  `;
    ties.textContent=`Ties:${tieScore} `;
//This shows game over once either player or computer score is equal to 3
    if(playerScore===5||computerScore===5){
        const gameOver = document.createElement('h1');
        gameOver.classList.add('gameOver');
        gameOver.textContent = 'Game Over!';
        gameOverContainer.appendChild(gameOver);
        return 'Game Over';
    }
}
  }));

//this gets the computer choice
function computerTurn() {
const randomNum= Math.floor(Math.random()*3)+1;
switch(randomNum){
    case 1:
        computer= 'Rock'
        break;
    case 2:
        computer= 'Paper'
        break;
    case 3:
        computer= 'Scissors'
        break;
    }
}
//This compares the choice of player and computer
function playRound(){
    if (computer===player){
        tieScore ++;
       return "It is a tie"; 
    } else if (computer==="Rock" && player==="Paper"){
        playerScore++;
       return "You win";
    } else if (computer==="Rock" && player==="Scissors"){
        computerScore++;
        return "You lose";
    } else if (computer==="Paper" && player==="Scissors"){
        playerScore++;
        return "You win";
    } else if (computer==="Paper" && player==="Rock"){
        computerScore++;
        return "You lose";
    } else if (computer==="Scissors" && player==="Rock"){
        playerScore++;
        return"You win";
    } else if (computer==="Scissors" && player==="Paper"){
        computerScore++;
        return"You lose";
    } else {
        return "Please choose between Rock, Paper, and Scissors"
       
    }
    }
    

