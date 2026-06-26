function getComputerChoice(){
let num = (Math.random())
    if (num <= .3)
        {return "rock"}
    else if (num > .4 && num <=.6)
        {return "paper"}
    else 
        {return "scissors"}
}

//let humanScore = 0;
//let computerScore = 0;

const score = document.querySelector("#score");
score.textContent = "hello";

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", (event) => {
    const humanSelection = event.target.value;
    const result = playRound(humanSelection, getComputerChoice());
    console.log(result);
})

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", (event) => {
    const humanSelection = event.target.value;
    const result = playRound(humanSelection, getComputerChoice());
    console.log(result);

})

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", (event) => {
    const humanSelection = event.target.value;
    const result = playRound(humanSelection, getComputerChoice());
    console.log(result);
})

function playRound(humanChoice, computerChoice){
    if ( humanChoice === computerChoice){
        return "draw";
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        return "you lose";
    } else {
        return "you win";
    }
}
    

//function playGame(){

//function score(result){
//    if (result === "you win")
//        {humanScore++}
//    else if (result === "you lose")
//        {computerScore++}
//    console.log("computer score: " + computerScore + " Your score: " + humanScore)
//}

//for(let i = 0; i < 5; i++){
//    const humanSelection = getHumanChoice();
//    const computerSelection = getComputerChoice();
//    const roundResult = playRound(humanSelection, computerSelection);
//    score(roundResult);
//}

//const roundResult = playRound(humanSelection, computerSelection);
//score(roundResult);


//if (computerScore === humanScore)
//    {console.log("that's a draw")}
//    else if (computerScore > humanScore)
//    {console.log("the machine won")}
//    else {console.log("you win")};

//}

//playGame();