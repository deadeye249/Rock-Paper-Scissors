function getPlayerChoice(){
    let choice = prompt("Please enter your choice: ");
    return choice;
}
console.log("Hello World")

function getComputerChoice(){
    let choice = Math.random()*3;
    if(choice<=1)
    {
        return "rock";
    }
    else if(choice<=2)
    {
        return "paper";
    }
    else
    {
        return "scissors"
    }
}

