
//Create a variable called computerChoice and set it equal to random of the three variables below


let computerChoice = Math.floor(Math.random()*3+1);
let rock= 1;
let paper= 2;
let scissors=3;

console.log (computerChoice);

function getComputerChoice(){
    if (computerChoice===1){
        computerChoice= "Rock"
    } else if (computerChoice===2){
        computerChoice= "Paper"
    } else if (computerChoice===3){
        computerChoice= "Scissors"
}
}
getComputerChoice();
console.log(computerChoice);
//Create a variable called Rock and set it equal to "rock"
//Create a variable called Paper and set it equal to "paper"
//Create a variable called Scissors and set it equal to "scissors"
//Create a function getComputerChoice that randomly selects between these three options

//Create a variable called playerChoice and and set it equal to random of the three variables below
//Create a variable called Rock and set it equal to "rock"
//Create a variable called Paper and set it equal to "paper"
//Create a variable called Scissors and set it equal to "scissors"
//Create a function that randomly selects between these three options and call it getPlayerChoice

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