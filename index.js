function getComputerChoice(){
let num = (Math.random())
    if (num <= .3)
        {return "rock"}
    else if (num > .4 && num <=.6)
        {return "paper"}
    else 
        {return "scissors"}
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if ( humanChoice === computerChoice){
        return "It's a draw";
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        scoreHandler(0, 1);
        return "you lose";
    } else {
        scoreHandler(1, 0);
        return "you win";
    }
}

function scoreHandler(playerPoints, computerPoints, resetValue = 5){
    humanScore += playerPoints;
    computerScore += computerPoints;

    if (humanScore >= resetValue){
        humanScore = 0;
        computerScore = 0;
        alert("You won dude yaay")
    } else if (computerScore >= resetValue){
        humanScore = 0;
        computerScore = 0;
        alert("damn lost to a algorithm man")
    }
}

////////// DOM

const roundResult = document.querySelector("#roundResult");

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", (event) => {
    const humanSelection = event.target.value;
    const result = playRound(humanSelection, getComputerChoice());
    roundResult.textContent = result + ` And the score is: Machine: ${computerScore} You: ${humanScore}`;
})

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", (event) => {
    const humanSelection = event.target.value;
    const result = playRound(humanSelection, getComputerChoice());
    roundResult.textContent = result + ` And the score is: Machine: ${computerScore} You: ${humanScore}`;

})

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", (event) => {
    const humanSelection = event.target.value;
    const result = playRound(humanSelection, getComputerChoice());
    roundResult.textContent = result + ` And the score is: Machine: ${computerScore} You: ${humanScore}`;
})

