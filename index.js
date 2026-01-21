//Gets a number from math.random and based on the value of that number
//  stores either rock paper or scissor in the function.
function getComputerChoice(){
let num = (Math.random())
if (num <= .3){
    return "rock"
} else if (num >=.4 && num <=.6){
    return "paper"
} else {
    return "scissor"
}
}
//Ask's the user for prompt and stores it on the variable.
function getHumanChoice(){
//makes so that the prompt is case insensitive.
let choice = prompt("Choose between rock, paper or scissor.", "rock").toLowerCase(); 
if (choice === "rock"){
    return "rock"
 }else if (choice === "paper"){
    return "paper"
} else if (choice === "scissor"){
    return "scissor"
}
}
//Two constants for the user's choice and the pc choice and two variables for their respective scores.
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
var humanScore = 0;
var computerScore = 0;

//This function compares getHumanChoice and the getComputerChoice against each other
// and returns a string to decide a winner.
function playRound(humanChoice, computerChoice){

    if (humanChoice === "rock" && computerChoice === "scissor"){
        return "you win"
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        return "you loose"
    } else if (humanChoice === "rock" && computerChoice === "rock"){
        return "draw"
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        return "you win"
    } else if (humanChoice === "paper" && computerChoice === "scissor"){
        return "you loose"
    } else if (humanChoice === "paper" && computerChoice === "paper"){
        return "draw"
    } else if (humanChoice === "scissor" && computerChoice === "rock"){
        return "you loose"
    } else if (humanChoice === "scissor" && computerChoice === "paper"){
        return "you win"
    } else if (humanChoice === "scissor" && computerChoice === "scissor"){
        return "draw"
    } 

}
//This variable checks for playRound result and increments the scores based on the result.
var value = playRound(humanSelection, computerSelection);
if (value === "you win"){
    humanScore++
} else if(value === "you loose"){
    computerScore++
}

// fOR testing only.
console.log(playRound(humanSelection, computerSelection));
console.log("Your score: " + humanScore, "Computer score: " + computerScore);


