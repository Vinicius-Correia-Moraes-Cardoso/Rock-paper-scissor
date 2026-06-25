function getComputerChoice(){
let num = (Math.random())
    if (num <= .3)
        {return "rock"}
    else if (num > .4 && num <=.6)
        {return "paper"}
    else 
        {return "scissor"}
}

function getHumanChoice(){
let choice = prompt("Choose between rock, paper or scissor.").toLowerCase(); 
    if (choice === "rock")
        {return "rock"}
    else if (choice === "paper")
        {return "paper"}
    else if (choice === "scissor")
        {return "scissor"}
}

let humanScore = 0;
let computerScore = 0;

function playGame(){

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "scissor"){
    return "you win"
    } else if (humanChoice === "rock" && computerChoice === "paper"){
    return "you lose"
    } else if (humanChoice === "rock" && computerChoice === "rock"){
    return "draw"
    } else if (humanChoice === "paper" && computerChoice === "rock"){
    return "you win"
    } else if (humanChoice === "paper" && computerChoice === "scissor"){
    return "you lose"
    } else if (humanChoice === "paper" && computerChoice === "paper"){
    return "draw"
    } else if (humanChoice === "scissor" && computerChoice === "rock"){
    return "you lose"
    } else if (humanChoice === "scissor" && computerChoice === "paper"){
    return "you win"
    } else if (humanChoice === "scissor" && computerChoice === "scissor"){
    return "draw"
    } 
}

function score(result){
    if (result === "you win")
        {humanScore++}
    else if (result === "you lose")
        {computerScore++}
    console.log("computer score: " + computerScore + " Your score: " + humanScore)
}

//for(let i = 0; i < 5; i++){
//    const humanSelection = getHumanChoice();
//    const computerSelection = getComputerChoice();
//    const roundResult = playRound(humanSelection, computerSelection);
//    score(roundResult);
//}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const roundResult = playRound(humanSelection, computerSelection);
score(roundResult);


if (computerScore === humanScore)
    {console.log("that's a draw")}
    else if (computerScore > humanScore)
    {console.log("the machine won")}
    else {console.log("you win")};

}

playGame();