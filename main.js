// function getPlayerChoice()
// {

//     let choice = prompt("Please enter your choice: ");
//     return choice;
// }

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


    
    let buttons = document.querySelectorAll("button");
    let player_scoreboard = document.querySelector(".player-score");
    let computer_scoreboard = document.querySelector(".computer-score");
    let result_section = document.querySelector(".display-results");
    let scoreboard = document.querySelector(".score-board")

    for(let i=0;i<buttons.length;i++)
    {
        buttons[i].addEventListener("click",()=>
        {
            if(human_score<5 && computer_score<5)
            {
                new_element = document.createElement("div");
                new_element.textContent = playRound(buttons[i].id,getComputerChoice());  
                result_section.append(new_element);
                player_scoreboard.textContent = String(human_score);
                computer_scoreboard.textContent = String(computer_score);
            }
            else if(human_score == 5)
            {
                new_element = document.createElement("div");
                new_element.style.margin = "30px";
                new_element.textContent = "Player has won!";
                scoreboard.append(new_element);
                player_scoreboard.textContent = String(0);
                computer_scoreboard.textContent = String(0);
                result_section.replaceChildren();
                human_score = computer_score = 0;
            }
            else
            {
                new_element = document.createElement("div");
                new_element.style.margin = "30px";
                new_element.textContent = "Computer has won!";
                scoreboard.append(new_element);
                player_scoreboard.textContent = String(0);
                computer_scoreboard.textContent = String(0);
                result_section.replaceChildren();
                human_score = computer_score = 0;
            }
        })
    }

}

playGame();

