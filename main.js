function getPlayerChoice()
{
    let choice = prompt("Please enter your choice: ");
    return choice;
}

function getComputerChoice()
{
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
        return "scissors";
    }
}



function playGame(){

    let human_score = 0;
    let computer_score = 0;

    function playRound(humanChoice, computerChoice)
    {
        let human_choice = humanChoice.toLowerCase();
        if(human_choice == computerChoice){
            return "It's a tie! Try again.";
        }
        else if(human_choice == "rock" && computerChoice == "paper"){
            computer_score+=1;
            return "You lose! Paper beats Rock.";
        }
        else if(human_choice == "rock" && computerChoice == "scissors"){
            human_score+=1;
            return "You win! Rock beays Scissors.";
        }
        else if(human_choice == "paper" && computerChoice == "scissors"){
            computer_score+=1;
            return "You lose! Paper beats Scissors.";
        }
        else if(human_choice == "paper" && computerChoice == "rock"){
            human_score+=1;
            return "You win! Paper beats Rock.";
        }
        else if(human_choice == "scissors" && computerChoice == "rock"){
            computer_score+=1;
            return "You lose! Rock beats Scissors.";
        }
        else if(human_choice == "scissors" && computerChoice == "paper"){
            human_score+=1;
            return "You win! Scissors beats Paper.";
        }
        else{
            return "Wrong Input";
        }

    }

    for(let i=0;i<5;i++){
        const humanSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }

    if(human_score == computer_score){
        return "The game is a tie!";
    }
    else if(human_score>computer_score){
        return "You win!";
    }
    else{
        return "You lose!";
    }
}

playGame();

