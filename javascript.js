// display an intro message
console.log("Welcome to Rock Paper Scissors");

let x = 5; //amount of rounds you want to play
// scoreboard
let humanScore = 0;
let computerScore = 0;

while (x > 0) {
    console.log("******************************************************");
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

    // get human choice
    function getHumanChoice() {
        let humanChoice = prompt("Choose (Rock-paper-scissors)", "");
        console.log(`User Choose: ${humanChoice}`);
        return humanChoice;
    }

    let humanFinalChoice = getHumanChoice();
    let computerFinalChoice = computerTextChoice();

    

    // rounds
    console.log(`Computer Choose: ${computerFinalChoice}`);

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

    playRound(computerFinalChoice, humanFinalChoice);
    x--;
}

console.log("******************************************************");
if(humanScore>computerScore){
    console.log(`Winner of the game is: HUMAN with ${humanScore} points.`);
}
else if(computerScore>humanScore){
    console.log(`Winner of the game is: COMPUTER with ${computerScore} points.`);
}
else{
    console.log(`It is a draw, with both HUMAN and COMPUTER securing ${humanScore} points`);
}
