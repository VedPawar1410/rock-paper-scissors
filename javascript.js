//let x = 5; //amount of rounds you want to play
// scoreboard
let humanScore = 0;
let computerScore = 0;

// button event listener (rock-paper-scissors)
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissors");

// scoreboard elements
const humanScoreEl = document.querySelector("#human-score");
const computerScoreEl = document.querySelector("#computer-score");
const resultsDiv = document.querySelector("#results");

rock.addEventListener("click", (e)=>{
    playRound("ROCK");
})

paper.addEventListener("click", (e)=>{
    playRound("PAPER");
})

scissors.addEventListener("click", (e)=>{
    playRound("SCISSORS");
})

// random computer choice
function computerTextChoice() {
    const num = Math.floor(Math.random() * 3);
    return ["ROCK", "PAPER", "SCISSORS"][num];
}

// rounds
function playRound(human) {
    const comp = computerTextChoice();

    roundResult="";
    if (comp === human) {
        roundResult="DRAW";
    }
    else if (comp === 'ROCK' && human === 'PAPER') {
        humanScore++;
        roundResult="Human WINS";
    }
    else if (comp === 'PAPER' && human === 'SCISSORS') {
        humanScore++;
        roundResult="Human WINS";
    }
    else if (comp === 'SCISSORS' && human === 'ROCK') {
        humanScore++;
        roundResult="Human WINS";
    }
    else {
        computerScore++;
        roundResult="Computer WINS";
    }
    resultsDiv.textContent = `Human Choose: ${human} -- Computer Choose: ${comp} ---
    ${roundResult}`;

    humanScoreEl.textContent=`Human score: ${humanScore}`;
    computerScoreEl.textContent=`Computer score: ${computerScore}`;

    if(humanScore===5 || computerScore===5){
        scoreCalculator(humanScore,computerScore);
    }

}

function scoreCalculator(humanScore, computerScore){
    let winner = document.querySelector("#winner");
    
    if(humanScore>computerScore){
        winner.textContent=`Winner of the game is: HUMAN with ${humanScore} points.`;
    }
    else if(computerScore>humanScore){
        winner.textContent=`Winner of the game is: COMPUTER with ${computerScore} points.`;
    }
    else{
        winner.textContent=`It is a draw, with both HUMAN and COMPUTER securing ${humanScore} points`;
    }
    
    // Disable buttons so game "ends"
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}

