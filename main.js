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
    console.log(playerScore,computerScore,tieScore)

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

