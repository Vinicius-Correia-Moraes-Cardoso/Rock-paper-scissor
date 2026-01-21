function getComputerChoice(){
let num = (Math.random())
if (num <= .3){
    return "rock"
}else if (num >=.4 && num <=.6){
    return "paper"
} else {
    return "scissor"
}
}


console.log(getComputerChoice())