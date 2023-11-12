const computerSelection = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const playerSelection = () => {
    return new Promise((resolve) => {
        const btns = document.querySelectorAll(".btn");
        btns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                resolve(e.target.name);
            })
        })
    });
}

const playRound = async () => {
    const userChoice = await playerSelection();
    const computerChoice = computerSelection();
    const resultsDisplay = document.querySelector(".results");

    resultsDisplay.textContent = `You selected: ${userChoice}. Computer selected: ${computerChoice}`;

    if (userChoice === computerChoice) {
        console.log("Tie! Go again.");
        return null;
    } else if (
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "scissors" && computerChoice === "rock") ||
        (userChoice === "paper" && computerChoice === "scissors")
    ) {
        console.log("Computer wins this round.");
        return 0;
    } else {
        console.log("You win this round!");
        return 1;
    }
}

const game = async () => {
    const scoreDisplay = document.querySelector(".score");
    const resultsDisplay = document.querySelector(".results")
    const btns = document.querySelectorAll(".btn");
   
    let seriesWinner;
    let [playerWins, computerWins] = [0, 0];

    while (true) {
        const winner = await playRound();
        if (winner === 0) {
            computerWins++;
        } else if (winner === 1) {
            playerWins++;
        }
        
        scoreDisplay.textContent = `The score is player: ${playerWins}, computer: ${computerWins}`;

        if(playerWins == 5 || computerWins == 5){
            btns.forEach((btn) => btn.disabled = true);
            seriesWinner = playerWins == 5 ? "You win the series!" : "Computer wins the series";
            resultsDisplay.textContent = seriesWinner;
            let playAgain = document.createElement("button");
            playAgain.textContent = "Play again?";
            resultsDisplay.append(playAgain);
            playAgain.addEventListener("click", () => {
                [playerWins, computerWins] = [0, 0];
                resultsDisplay.textContent = '';
                scoreDisplay.textContent = '';
                btns.forEach((btn) => btn.disabled = false);
            })
        }

    }

}

game();
