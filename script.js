// Step 2: Write the logic to get the computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Step 3: Write the logic to get the human choice
function getHumanChoice() {
  const userInput = prompt("Enter your choice (rock, paper, or scissors):");
  if (userInput === null) {
    return null; // User cancelled
  }
  return userInput.trim();
}

// Step 5 & 6: Write the logic to play a single round and the entire game
function playGame() {
  // Step 4 & 6: Declare the players score variables inside playGame
  let humanScore = 0;
  let computerScore = 0;

  // Step 5: Write the logic to play a single round
  function playRound(humanChoice, computerChoice) {
    // Make humanChoice case-insensitive
    const normalizedHumanChoice = humanChoice.toLowerCase();

    // Validate the human choice
    if (!["rock", "paper", "scissors"].includes(normalizedHumanChoice)) {
      console.log("Invalid choice! Please choose rock, paper, or scissors.");
      return;
    }

    // Determine the winner
    if (normalizedHumanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${computerChoice}.`);
      return;
    }

    // Check all winning conditions for human
    if (
      (normalizedHumanChoice === "rock" && computerChoice === "scissors") ||
      (normalizedHumanChoice === "paper" && computerChoice === "rock") ||
      (normalizedHumanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${normalizedHumanChoice.charAt(0).toUpperCase() + normalizedHumanChoice.slice(1)} beats ${computerChoice}.`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${normalizedHumanChoice}.`);
      computerScore++;
    }
  }

  // Step 6: Play 5 rounds
  for (let round = 1; round <= 5; round++) {
    console.log(`\n--- Round ${round} ---`);
    const humanChoice = getHumanChoice();
    
    if (humanChoice === null) {
      console.log("Game cancelled by user.");
      return;
    }
    
    const computerChoice = getComputerChoice();
    console.log(`Computer chose: ${computerChoice}`);
    playRound(humanChoice, computerChoice);
    console.log(`Current score - You: ${humanScore}, Computer: ${computerScore}`);
  }

  // Declare the final winner
  console.log("\n=== Final Results ===");
  console.log(`Final score - You: ${humanScore}, Computer: ${computerScore}`);
  
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry, you lost the game. Better luck next time!");
  } else {
    console.log("It's a tie game!");
  }
}

// Start the game
playGame();

