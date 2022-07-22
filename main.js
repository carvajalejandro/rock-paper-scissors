//Create variables for winning losing and ties
let win=0
let loss=0
let tie=0
//Create a loop that increases that increase the value of i every time that result displays via alert
for (let i = 0; i < 5; i++) {
//Create a variable called computerChoice and set it equal to random of the three variables below
let computerChoice = Math.floor(Math.random()*3+1);
console.log (computerChoice);
//Create a function that takes the random number and changes the value to a string
function getComputerChoice(){
    if (computerChoice===1){
        computerChoice= "rock"
    } else if (computerChoice===2){
        computerChoice= "paper"
    } else if (computerChoice===3){
        computerChoice= "scissors"
}
}
//Create a variable called playerChoice and ask the user for a value
let playerInput= window.prompt("Choose Rock, Paper, or Scissors.")
//Create a variable that takes the data from the user and turn into all lower case string
let playerChoice= playerInput.toLowerCase()
console.log (playerChoice);
let result;
//Create a function that grabs computerChoice and compares it to playerChoice
function playRound(){
if (computerChoice==="rock" && playerChoice==="rock"){
    result= "It is a tie"; 
    tie ++;
} else if (computerChoice==="rock" && playerChoice==="paper"){
    result="You win";
    win++;
} else if (computerChoice==="rock" && playerChoice==="scissors"){
    result="You lose";
    loss++;
} else if (computerChoice==="paper" && playerChoice==="paper"){
    result= "It is a tie";
    tie++;
} else if (computerChoice==="paper" && playerChoice==="scissors"){
    result="You win";
    win++;
} else if (computerChoice==="paper" && playerChoice==="rock"){
    result="You lose";
    loss++;
} else if (computerChoice==="scissors" && playerChoice==="scissors"){
    result= "It is a tie";
    tie++;
} else if (computerChoice==="scissors" && playerChoice==="rock"){
    result="You win";
    win++;
} else if (computerChoice==="scissors" && playerChoice==="paper"){
    result="You lose";
    loss++;
} else {
    result="Please choose between Rock, Paper, and Scissors"
}
}

//Create a loop that adds values to win, loss, & tie to keep score
//Create a function called game that makes playRound occur
function game(){
    getComputerChoice();
    playRound(); 
    }

game();
console.log(result);
console.log (win,loss,tie);
}
