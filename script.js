const rock = document.getElementById("choice-rock")
const paper = document.getElementById("choice-paper")
const scissors = document.getElementById("choice-scissors")





function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "ROCK"
    }  
    else if (randomNumber == 2){
        return "PAPER"
    }
    else {
        return "SCISSORS"
    }
}

function playRound(playerSelection, computerSelection){
if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
    return "You win! Rock beats Scissors!"
} else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
    return "You win! Paper beats Rock"
}  else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
    return "You win! Scissors beats Paper"
} else if ((playerSelection === "ROCK" && computerSelection === "ROCK") ||
    (playerSelection === "PAPER" && computerSelection === "PAPER") ||
    (playerSelection === "SCISSORS" && computerSelection === "SCISSORS")) {
        return "Its a tie!"
} else {
    return "You lose!"
}

}

const playerSelection = "ROCK"
const computerSelection = getComputerChoice();