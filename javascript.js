// display an intro message
console.log("Welcome to Rock Paper Scissors");

//get computer choice
let computerTextChoice = function getComputerChoice() {
    
    let computerNumberChoice = Math.floor(Math.random() * 3) + 1;
    if(computerNumberChoice === 1){
        return "Rock";
    }
    else if(computerNumberChoice === 2){
        return "Scissors";
    }
    else if(computerNumberChoice === 3){
        return "Paper";
    }
    
};
computerTextChoice();
console.log("Computer Chooses: ")
console.log(computerTextChoice()); //To look at computers choice

//get human choice
function getHumanChoice(){

    let humanChoice = prompt("Choose (Rock-papers-scissors)", "");
    console.log(humanChoice);
}
getHumanChoice();