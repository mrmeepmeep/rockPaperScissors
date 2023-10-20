// DOM Manipulation
const rockBtn = document.querySelector('#rockBtn')
const paperBtn = document.querySelector('#paperBtn')
const scissorsBtn = document.querySelector('#scissorsBtn')


//Playerchoice
rockBtn.addEventListener('click', function(){
    return 'rock'
})

paperBtn.addEventListener('click', function(){
    return 'paper'
})

scissorsBtn.addEventListener('click', function(){
    return 'scissors'
})







function getRandomChoice(){
    let random = Math.floor(Math.random() *3 ) +1
        console.log(random)
    if (random === 1){
        return 'rock'
    }
    if (random === 2){
        return "paper"
    }
    if (random === 3){
        return "scissors"
    }
}

getRandomChoice()
playerSelection = this.textContent()
computerSelection = getRandomChoice()

