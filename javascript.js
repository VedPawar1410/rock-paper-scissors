//let x = 5; //amount of rounds you want to play
// scoreboard
let humanScore = 0;
let computerScore = 0;

// button event listener (rock-paper-scissors)
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissors");

rock.addEventListener("click", (e)=>{
    let humanFinalChoice = "Rock";
    let computerFinalChoice = computerTextChoice();
    console.log(`Human Choose: ${humanFinalChoice}`);
    console.log(`Computer Choose: ${computerFinalChoice}`);
    playRound(computerFinalChoice, humanFinalChoice);
})

paper.addEventListener("click", (e)=>{
    let humanFinalChoice = "Paper";
    let computerFinalChoice = computerTextChoice();
    console.log(`Computer Choose: ${computerFinalChoice}`);
    playRound(computerFinalChoice, humanFinalChoice);
})

scissors.addEventListener("click", (e)=>{
    let humanFinalChoice = "Scissors";
    let computerFinalChoice = computerTextChoice();
    console.log(`Computer Choose: ${computerFinalChoice}`);
    playRound(computerFinalChoice, humanFinalChoice);
})

// get computer choice
let computerTextChoice = function getComputerChoice() {
    let computerNumberChoice = Math.floor(Math.random() * 3) + 1;
    if (computerNumberChoice === 1) {
        return "ROCK";
    }
    else if (computerNumberChoice === 2) {
        return "SCISSORS";
    }
    else if (computerNumberChoice === 3) {
        return "PAPER";
    }
};

// rounds
function playRound(computerFinalChoice, humanFinalChoice) {
    const comp = computerFinalChoice.toUpperCase();
    const human = humanFinalChoice.toUpperCase();

    if (comp === human) {
        console.log("Draw");
    }
    else if (comp === 'ROCK' && human === 'PAPER') {
        humanScore++;
        console.log("HUMAN wins");
    }
    else if (comp === 'PAPER' && human === 'SCISSORS') {
        humanScore++;
        console.log("HUMAN wins");
    }
    else if (comp === 'SCISSORS' && human === 'ROCK') {
        humanScore++;
        console.log("HUMAN wins");
    }
    else {
        computerScore++;
        console.log("Computer wins");
    }

    console.log(`Human Score: ${humanScore} |||| Computer Score: ${computerScore}`);
}

function scoreCalculator(humanScore, computerScore){
    if(humanScore>computerScore){
        console.log(`Winner of the game is: HUMAN with ${humanScore} points.`);
    }
    else if(computerScore>humanScore){
        console.log(`Winner of the game is: COMPUTER with ${computerScore} points.`);
    }
    else{
        console.log(`It is a draw, with both HUMAN and COMPUTER securing ${humanScore} points`);
    }
}

