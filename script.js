let playerScore = 0;
let computerScore = 0;
const game = () => {
for (let i = 0; i < 5; i++) {
    randomNumber = Math.floor(Math.random() * 3) + 1;

function getComputerChoice(){
   
    if (randomNumber === 1) {
        return "ROCK";
    }  
    else if (randomNumber == 2){
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}
function playRound(playerSelection, computerSelection){
if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
    playerScore++;
    return "You win!";
} else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
    playerScore++;
    return "You win!";
}  else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
    playerScore++;
    return "You win!";
} else if (playerSelection === computerSelection) {
        return "Tie!";
} else {
    computerScore++;
    return "You lose!";
}
}


player = prompt("pick", '');
const playerSelection = player.toUpperCase();
const computerSelection = getComputerChoice();
const playRoundResult = playRound(playerSelection, computerSelection);
console.log(playRound(playerSelection,computerSelection));

console.log(`Player pick: ${playerSelection}`);
console.log(`Computer pick: ${computerSelection}`);
console.log(`You: ${playerScore}`);
console.log(`Computer ${computerScore}`);

}
}

game();

//function score(){
//  if (playRound) === "You win!"){
//      playerScore++
// } else if (playRound() === "You lose!"){
//      computerScore++
//  } else {
//    return playerScore+= 0
//  }
//  }




