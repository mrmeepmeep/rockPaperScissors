
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
    return "You win!"
} else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
    return "You win!"
}  else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
    return "You win!"
} else if (playerSelection === computerSelection) {
        return "Tie!"
} else {
    return "You lose!"
}
}

player = prompt("pick", '')
const playerSelection = player.toUpperCase()
const computerSelection = getComputerChoice();
console.log (playRound(playerSelection, computerSelection))