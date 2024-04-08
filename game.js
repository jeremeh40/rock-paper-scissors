// FUNCTION- getComputerChoice() - function that randomly returns Strings 'Rock', 'Paper', or 'Scissors'

function getComputerChoice() {
const choices = ['rock', 'paper', 'scissors'];
const randomNumber = Math.floor(Math.random() * choices.length);
const compChoice = choices[randomNumber];
return compChoice;
}

// console.log(getComputerChoice())
let playerSelection = "";
let compScore = 0;
let playerScore = 0;
let gameNumber = 1;
let showGameNumber = document.querySelector('#game-number')
showGameNumber.textContent = 'Game #'+(gameNumber);

const rockButton = document.querySelector("#rock");

rockButton.addEventListener("click", () => {
    playerSelection = 'rock';
    playGame();
    gameNumber +=1
    displayWinner()
})
const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", ()=> {
    playerSelection = 'paper';
    playGame();
    gameNumber +=1
    displayWinner()
})
const scissorButton = document.querySelector("#scissors")
scissorButton.addEventListener("click", ()=> {
    playerSelection = 'scissors'
    playGame();
    gameNumber +=1
    displayWinner()
})


function displayWinner(){

    if(gameNumber>5){
        let showWinner = document.querySelector('#winner')  
        showGameNumber.textContent = ''
        if(playerScore > compScore){

            showWinner.classList.remove('draw', 'lose')
            showWinner.classList.add('win')
            showWinner.textContent = 'Well Done! you won the best of 5';
        }
        else if(compScore > playerScore){

            showWinner.classList.remove('win', 'draw')
            showWinner.classList.add('lose')
            showWinner.textContent = 'bad Luck! you lost the best of 5!'

        }
        else{
            showWinner.classList.remove('win', 'lose')
            showWinner.classList.add('draw')
            showWinner.textContent = 'Draw! good game!'
        }
    }
}

// FUNCTION - playGame (playerSelection, computerSelection) - return String that indicates winner of round
function playGame(){
    console.log(gameNumber)
    let showGameNumber = document.querySelector('#game-number')
    let showWinner = document.querySelector('#winner')    
    let computerSelection = getComputerChoice();
    const player = playerSelection.toLowerCase();
    let updatePlayerScore = document.querySelector('#play-score')
    let updateCompScore = document.querySelector('#comp-score')
    let outcome = ''


 

    if (gameNumber > 5){       
        return;      
       
    }
    showGameNumber.textContent = 'Game #'+(gameNumber+1);
    
    // if(gameNumber<=5){
    //     showGameNumber.textContent = 'Game #'+(gameNumber+1);
    //     gameNumber += 1;
    
    //     }

    

    
    
    
    if (player === 'rock' && computerSelection === 'paper'){
        outcome = 'Lose, Paper beats Rock!'
        compScore += 1
        updateCompScore.textContent = compScore
        showWinner.classList.remove('win', 'draw')
        showWinner.classList.add('lose')

        showWinner.textContent = 'Computer chose paper, you lose!'
    }
    else if(player === 'rock' && computerSelection ==='scissors'){
        outcome = 'Win, Rock beats Scissors!'
        playerScore += 1;
        updatePlayerScore.textContent = playerScore
        showWinner.classList.remove('draw', 'lose')
        showWinner.classList.add('win')
        showWinner.textContent = 'Computer chose Scissors, you win!'
    }

    else if(player === 'paper' && computerSelection=== 'rock'){
        outcome = 'Win, Paper beats rock!'
        playerScore += 1;
        updatePlayerScore.textContent = playerScore
        showWinner.classList.remove('draw', 'lose')
        showWinner.classList.add('win')
        showWinner.textContent = 'Computer chose rock, you win!'
    }

    else if(player === 'paper' && computerSelection === 'scissors'){
        outcome = 'Lose, Scissors beats paper!'
        compScore += 1
        updateCompScore.textContent = compScore
        showWinner.classList.remove('win', 'draw')
        showWinner.classList.add('lose')
        showWinner.textContent = 'Computer chose Scissors, you Lose!'
    }
    else if(player === 'scissors' && computerSelection === 'rock'){
        outcome = 'Lose, Rock beats Scissors!'
        compScore += 1
        updateCompScore.textContent = compScore
        showWinner.classList.remove('win', 'draw')
        showWinner.classList.add('lose')
        showWinner.textContent = 'Computer chose rock, you Lose!'
    }
    else if(player === 'scissors' && computerSelection === 'paper'){
        outcome = 'Win, Scissors beats paper!'
        playerScore += 1;
        updatePlayerScore.textContent = playerScore
        showWinner.classList.remove('draw', 'lose')
        showWinner.classList.add('win')
        showWinner.textContent = 'Computer chose paper, you Win!'

    }

    else{
        outcome = 'Draw, you picked the same thing!'
        showWinner.classList.remove('win', 'lose')
        showWinner.classList.add('draw')
        showWinner.textContent = 'You both chose the same! Draw!'
    }
    console.log(outcome)
    return outcome;

}

// console.log(game());

//FUNCTION  - game(playGame()) - play 5 rounds, keep score, and reports winner at end

// function game(){
//     let playerScore = 0
//     let compScore = 0
//     for (i = 0; i < 5; i++){
//         let score = playGame()
//         if (score.startsWith('Win')){
//             playerScore +=1
//         }
//         else if (score.startsWith('Lose')){
//             compScore +=1
//         }
//         console.log('Player: ' + playerScore)
//         console.log('Computer: '+ compScore)

//     }

//     if (playerScore > compScore){
//         console.log('Congratulation, you won!')
//     }

//     else if (compScore > playerScore){
//         console.log('Commiserations, you Lost!')
//     }

//     else{
//         console.log('Its a Draw!')
//     }
// }