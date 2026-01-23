function getComputerChoice(){
let num = (Math.random())
    if (num <= .3)
        {return "rock"}
    else if (num >=.4 && num <=.6)
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

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

function playGame(){

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
playRound();

function score(){
let playRoundResult = playRound(humanSelection, computerSelection);
    if (playRoundResult === "you win")
        {humanScore++}
    else if (playRoundResult === "you loose")
        {computerScore++}
    console.log("computer score: " +computerScore + " Your score: " + humanScore)
}


for(let i = 0; i < 5; i++){
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    score();
}
if (computerScore === humanScore)
    {console.log("draw")}
    else if (computerScore > humanScore)
        {console.log("the machine won")}
    else {console.log("you win")};
}


playGame();
