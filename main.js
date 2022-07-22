
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
getComputerChoice();
console.log(computerChoice);
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
} else if (computerChoice==="rock" && playerChoice==="paper"){
    result="You win";
} else if (computerChoice==="rock" && playerChoice==="scissors"){
    result="You lose";
} else if (computerChoice==="paper" && playerChoice==="paper"){
    result= "It is a tie";
} else if (computerChoice==="paper" && playerChoice==="scissors"){
    result="You win";
} else if (computerChoice==="paper" && playerChoice==="rock"){
    result="You lose";
} else if (computerChoice==="scissors" && playerChoice==="scissors"){
    result= "It is a tie";
} else if (computerChoice==="scissors" && playerChoice==="rock"){
    result="You win";
} else if (computerChoice==="scissors" && playerChoice==="paper"){
    result="You lose";
} else {
    result="Please choose between Rock, Paper, and Scissors"
}
}

playRound();
console.log(result);
alert(result);



