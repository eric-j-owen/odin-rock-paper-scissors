const computerSelection = () => {
    let computerMove;
    let choice = randNumberGenerate();

    switch(choice) {
        case 1:
            computerMove = "rock";
            break;
        case 2:
            computerMove = "paper";
            break;
        case 3:
            computerMove = "scissors";
            break;
        default:
            console.log("Error: Try again.");
    }

    return computerMove;
}

const randNumberGenerate = () => {
    const min = Math.ceil(1);
    const max = Math.ceil(4);
    const randInt = Math.floor(Math.random()*(max - min) + min);
    return randInt;
}

const playerSelection = () => {
    let userChoice;
    while(true){
        userChoice = String(prompt("Your move: ").toLocaleLowerCase().trim());
        if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors")
            break;
        else{
            console.log("Invalid input. Try again.")
            continue;
        }
    }
    return userChoice;
}

const playRound = (playerSelection, computerSelection) => {
    console.log(playerSelection + " " + computerSelection);
    if (playerSelection == computerSelection)
        console.log("Tie");
    else if (playerSelection == "rock" && computerSelection == "paper")
        console.log("Computer wins");
    else if(playerSelection == "scissors" && computerSelection == "rock")
        console.log("Computer wins");
    else if(playerSelection == "paper" && computerSelection == "scissors")
        console.log("Computer wins");
    else
        console.log("You win");
}

const game = () => {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    
    console.log("Welcome to the classic game of Rock, Paper, Scissors.");    getComputerChoice();
    return 0;
}

playRound(playerSelection(), computerSelection());
//game();