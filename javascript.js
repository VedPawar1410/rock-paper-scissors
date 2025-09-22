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
console.log(computerTextChoice()); //To look at computers choice