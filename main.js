const gameDiv= document.querySelector("#gameDiv");
const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText")
const choiceBtns = document.querySelectorAll(".choiceBtn");
const playerWins = document.createElement('div');



//Variables
let player;
let playerScore =0;
let computerScore=0;
let computer;
let tieScore=0;;
let result;

//This causes a round to occur
choiceBtns.forEach(button => button.addEventListener("click", () => {
    player= button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = playRound();

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
    if (player==computer){
        tieScore++;
        return 'Draw!'
    } else if(computer== 'Rock'){
        return (player=='Paper') ?'You Win!' :'You Lose!'
    }
    else if(computer== 'Paper'){
        return (player=='Scissors') ?'You Win!' :'You Lose!'
    }
    else if(computer== 'Scissors'){
        return (player=='Rock') ?'You Win!' :'You Lose!'
    } 
}

// const game= ()=>{
//     for(let i=0; i < 5; i++ ){
//         const computerSelection = computerTurn();
//         const playerSelection = button.textContent;
      

//     if (playerScore>compScore){
//         return 'You beat the computer'
//     } else if (playerScore<compScore){
//         return 'You lost to the computer'
//     } else{
//         return 'It is a tie!'
//     }
//     }
// }   

