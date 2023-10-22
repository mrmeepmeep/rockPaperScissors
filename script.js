


const choicebtns = document.querySelectorAll('.choicebtns')
const playerText = document.querySelector('#playerText')
const computerText = document.querySelector('#computerText')
const resultText = document.querySelector('#resultText')

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

// Function for playerSelection

choicebtns.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.textContent
    computerSelection;
    getRandomChoice()
    score()
    playerText.textContent = `You: ${playerScore}`
    computerText.textContent = `Computer: ${computerScore}`
    resultText.textContent = `${playRound()}`
})); 






function getRandomChoice(){
    let random = Math.floor(Math.random() * 3) + 1
       switch(random){
        case 1:
            computerSelection = "ROCK"
            break;
        case 2:
            computerSelection = "PAPER"
            break;
        case 3:
            computerSelection = "SCISSORS"
            break;
       }  
}

function playRound(){
    if (playerSelection === computerSelection){
        return 'Its a tie!'
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK" ||
        playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
        playerSelection == "SCISSORS" && computerSelection == "PAPER"){
            return `You win! ${playerSelection} beats ${computerSelection}!`
   } else {
    return `You lose! ${computerSelection} beats ${playerSelection}!` 
   }
}

function score(){
    if (playRound() == `You win! ${playerSelection} beats ${computerSelection}!`){
        playerScore++
        } else if (playRound() == `You lose! ${computerSelection} beats ${playerSelection}!`){
            computerScore++
        }
    }
