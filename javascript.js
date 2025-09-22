// display an intro message
console.log("Welcome to Rock Paper Scissors");

//get computer choice
let computerTextChoice = function getComputerChoice() {
    
    let computerNumberChoice = Math.floor(Math.random() * 3) + 1;
    if(computerNumberChoice === 1){
        return "ROCK";
    }
    else if(computerNumberChoice === 2){
        return "SCISSORS";
    }
    else if(computerNumberChoice === 3){
        return "PAPER";
    }
    
};

/* console.log("Computer Chooses: ")
console.log(computerTextChoice()); //To look at computers choice */

//get human choice
function getHumanChoice(){

    let humanChoice = prompt("Choose (Rock-papers-scissors)", "");
    console.log("User Choose: ")
    console.log(humanChoice);
    return humanChoice;
}
const humanFinalChoice = getHumanChoice();
const computerFinalChoice = computerTextChoice();

//scoreboard
let humanScore=0;
let computerScore=0;

//rounds
console.log("Computer Choose: ")
console.log(computerFinalChoice);

function playRound(computerFinalChoice, humanFinalChoice){
    const comp = computerFinalChoice.toUpperCase();
    const human = humanFinalChoice.toUpperCase();

    if(comp === human){
        console.log("Draw");
    }
    else if(comp === 'ROCK' && human==='PAPER'){
        humanScore++;
        console.log("HUMAN wins");
    }
    else if(comp === 'PAPER' && human==='SCISSORS'){
        humanScore++;
        console.log("HUMAN wins");
    }
    else if(comp === 'SCISSORS' && human==='ROCK'){
        humanScore++;
        console.log("HUMAN wins");
    }
    else{
        computerScore++;
        console.log("Computer wins");
    }
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}
playRound(computerFinalChoice, humanFinalChoice);