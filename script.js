let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) return "rock";
    if (random === 1) return "paper";
    return "scissors";
};

function getHumanChoice () {
    const choice = window.prompt('Enter your choice here: (Rock, Paper, or Scissors)');
    if (choice === null) {
        console.log('Game cancelled.');
        return null;
    };

    const choiceTrim = choice.trim().toLowerCase();
    if (choiceTrim === "rock" || choiceTrim === "paper" || choiceTrim === "scissors") {
        return choiceTrim;
    } else {
        console.log('Wrong spell try again');
        return null;
    }
};

function playRound (humanChoice, computerChoice) {
    if (humanChoice === null || computerChoice === null) {
    console.log("Invalid input. Round skipped.");
    return;
}


    if (humanChoice === computerChoice) {
    console.log("The same choice");
    return;

    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        computerScore += 1;
        console.log(`Computer win this round. He choosed ${computerChoice} and you chosed ${humanChoice}`);
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        computerScore += 1;
        console.log(`Computer win this round. He choosed ${computerChoice} and you chosed ${humanChoice}`);
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        computerScore += 1;
        console.log(`Computer win this round. He choosed ${computerChoice} and you chosed ${humanChoice}`);

    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        console.log(`Player win this round. You choosed ${humanChoice} and computer chosed ${computerChoice}`);
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
         console.log(`Player win this round. You choosed ${humanChoice} and computer chosed ${computerChoice}`);
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
         console.log(`Player win this round. You choosed ${humanChoice} and computer chosed ${computerChoice}`);
    };

};

function playGame () {
    humanScore = 0;
    computerScore = 0;


    for (let round = 1; round <= 5; round++) {
        console.log(`Round #${round}`)

        const humanChoise = getHumanChoice();
        if (humanChoise === null) {
            return;
        }

    const computerChoise = getComputerChoice();

    playRound(humanChoise, computerChoise);
};

if (humanScore > computerScore) {
        console.log(`Human win with score ${humanScore}, PC score is ${computerScore}`)
} else if (humanScore < computerScore) {
        console.log(`PC wins with score ${computerScore}, your score is ${humanScore}`);
} else {
         console.log(`The same points!`)
}
};

playGame();