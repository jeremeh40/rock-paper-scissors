// FUNCTION- getComputerChoice() - function that randomly returns Strings 'Rock', 'Paper', or 'Scissors'

function getComputerChoice() {
const choices = ['rock', 'paper', 'scissors'];
const randomNumber = Math.floor(Math.random() * choices.length);
const compChoice = choices[randomNumber];
return compChoice;
}

// console.log(getComputerChoice())
let playerSelection = "";
const rockButton = document.querySelector("#rock");

rockButton.addEventListener("click", () => {
    playerSelection = 'rock';
    playGame();
})
const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", ()=> {
    playerSelection = 'paper';
    playGame();
})
const scissorButton = document.querySelector("#scissors")
scissorButton.addEventListener("click", ()=> {
    playerSelection = 'scissors'
    playGame();
})
// FUNCTION - playGame (playerSelection, computerSelection) - return String that indicates winner of round
function playGame(){
    let computerSelection = getComputerChoice();
    const player = playerSelection.toLowerCase();
    let compScore = 0;
    let playerScore = 0;

    let outcome = ''
    if (player === 'rock' && computerSelection === 'paper'){
        outcome = 'Lose, Paper beats Rock!'
        compScore += 1
    }
    else if(player === 'rock' && computerSelection ==='scissors'){
        outcome = 'Win, Rock beats Scissors!'
        playerScore += 1;
    }

    else if(player === 'paper' && computerSelection=== 'rock'){
        outcome = 'Win, Paper beats rock!'
        playerScore += 1;
    }

    else if(player === 'paper' && computerSelection === 'scissors'){
        outcome = 'Lose, Scissors beats paper!'
        compScore += 1
    }
    else if(player === 'scissors' && computerSelection === 'rock'){
        outcome = 'Lose, Rock beats Scissors!'
        compScore += 1
    }
    else if(player === 'scissors' && computerSelection === 'paper'){
        outcome = 'Win, Scissors beats paper!'
        playerScore += 1;
    }

    else{
        outcome = 'Draw, you picked the same thing!'
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