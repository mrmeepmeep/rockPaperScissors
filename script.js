// DOM Manipulation

const choiceBtns = document.querySelectorAll('#choiceBtn')
const computerText = document.querySelector('#computerText')
const playerText = document.querySelector('#playerText')
const resultText = document.querySelector('#resultText')
let playerSelection;
let computerSelection;


choiceBtns.forEach(button => button.addEventListener("click" ,() => {

    playerSelection = button.textContent;
    computerSelection;
    getRandomChoice();
    playerText.textContent = `Player: ${playerSelection}`
    computerText.textContent = `Computer: ${computerSelection}`
    resultText.textContent = checkwinner();
})) 


function getRandomChoice(){
    const random = Math.floor(Math.random() *3 ) +1
    switch(random){
        case 1:
            computerSelection = 'ROCK';
            break;
        case 2:
            computerSelection = "PAPER";
            break;
        case 3:
            computerSelection = 'SCISSORS'
            break;
    }
}

function checkwinner(){
    if (playerSelection === computerSelection){
        return 'Its a tie!'
    } else if (computerSelection == 'ROCK'){
        return (playerSelection == 'PAPER') ? "You win!" : "You lose!"

    } else if (computerSelection == "PAPER"){
        return (playerSelection == "SCISSORS") ? "You win!" : "You lose!"
    } else if (computerSelection == "SCISSORS"){
        return (playerSelection == "ROCK") ? "You win!" : "You lose!"
    }
}




console.log(`${computerSelection} and ${playerSelection}`)


