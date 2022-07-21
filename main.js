
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
//Create a function that takes the data from the user and turn into "Rock"
    let playerChoice= playerInput.toLowerCase()
    console.log (playerChoice);


//Create a function that grabs computerChoice and compares it to playerChoice

//If computerChoice equals rock && playerChoice equals rock, then display "It is a tie"
//If computerChoice equals rock && playerChoice equals paper, then display "You win this round"
//If computerChoice equals rock && playerChoice equals scissors, then display "You lose this round"

//If computerChoice equals paper && playerChoice equals paper, then display "It is a tie"
//If computerChoice equals paper && playerChoice equals scissors, then display "You win this round"
//If computerChoice equals paper && playerChoice equals rock, then display "You lose this round"

//If computerChoice equals scissors && playerChoice equals scissors, then display "It is a tie"
//If computerChoice equals scissors && playerChoice equals rock, then display "You win this round"
//If computerChoice equals scissors && playerChoice equals paper, then display "You lose this round"