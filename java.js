    let computerScore = 0;
    let humanScore = 0;

    // Function: to randomize computer choice //
    function getComputerChoice(){
        let computerChoice = ["rock", "paper", "scissors"];
        return computerChoice[Math.floor(Math.random() * 3)];

    }
    

    function playRound(humanSelection, computerSelection){
        if (humanSelection == computerSelection){
            return `It's a Tie! Your Choice: ${humanSelection} Computer Choice: ${computerSelection}`
            
        } else if (
            (humanSelection == "rock" && computerSelection == "scissors") ||
            (humanSelection == "paper" && computerSelection == "rock" ) ||
            (humanSelection == "scissors" && computerSelection == "paper")

        ){  
            humanScore++;
            return `You Win! ${humanSelection} beats ${computerSelection}`;

        } else {
            computerScore++;
            return `You Lose! ${humanSelection} does not beat ${computerSelection}`;
        }
        
    }

    function playGame(){
        const content = document.querySelector(".content");
        //creates paragraph to display outcome of each round
        const displayOutcome = document.createElement("p");
        //creates h1 to display the current score
        const displayScore = document.createElement("h1");
        content.appendChild(displayOutcome);
        content.appendChild(displayScore);
        const clicks = document.querySelectorAll("button");
        clicks.forEach(button => button.addEventListener("click", () => {
            if (humanScore === 5) {
                displayOutcome.textContent = `You win the Game!`;
                displayScore.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;

            } else if (computerScore === 5) {
                displayOutcome.textContent = `You lose the Game!`;
                displayScore.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;

            } else{
                const humanSelection = button.textContent.toLowerCase();
                const computerSelection = getComputerChoice();
                const currentRound = playRound(humanSelection, computerSelection);
                displayOutcome.textContent = currentRound;
                displayScore.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;

            }
            
        }))

    }
    playGame()