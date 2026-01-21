var computerScore = 0;
var humanScore = 0;


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

function getHumanChoice(){
let choice = prompt("Choose between rock, paper or scissor.", "rock")
if (choice === "rock"){
    return "rock"
 }else if (choice === "paper"){
    return "paper"
} else if (choice === "scissor"){
    return "scissor"
}
}

console.log(getHumanChoice())
