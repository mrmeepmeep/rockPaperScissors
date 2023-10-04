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
if (playerSelection === "ROCK" || getComputerChoice === 3){
    return "You win! Rock beats Scissors!"
} else if (playerSelection === "PAPER" || getComputerChoice()=== 1){
    return "You win! Paper beats Rock"
}  else if (playerSelection === "SCISSORS" || getComputerChoice() === 2){
    return "You win! Scissors beats Paper"
}
else {
    return "NICEE"
}
}

const playerSelection = "ROCK"
const computerSelection = getComputerChoice();