game = game();

function game() {
  var playerwins = 0;
  var even = 0;
  var compwin = 0;
  for (let i = 0; i < 5; i++) {
    computerChoice = getComputerChoice();
    playerSelect = playerSelection();
    round = playRound(computerChoice, playerSelect);
    if (round === 1) {
      console.log("You lose!");
      compwin++;
    } else if (round === 2) {
      console.log("You win!");
      playerwins++;
    } else {
      console.log("Even!");
      even++;
    }
  }
  if (compwin > playerwins) {
    console.log("You lost the game");
  }

  if (compwin < playerwins) {
    console.log("You won the game with a score of " + playerwins + " out of 5");
  }
}

function getComputerChoice() {
  computerChoice = ["Rock", "Paper", "Scissor"];
  x = Math.floor(Math.random() * 3);
  return computerChoice[x];
}

function playerSelection() {
  const prompt = require("prompt-sync")();
  const choice = prompt("1. Rock, 2. Paper 3. Scissor");

  //return choice = prompt()

  switch (choice) {
    case "1":
      return "Rock";
      break;
    case "2":
      return "Paper";
      break;
    case "3":
      return "Scissor";
      break;
  }
}

function playRound(comp, player) {
  if (comp === "Rock" && player == "Rock") {
    return 3;
  } else if (comp === "Rock" && player === "Paper") {
    return 2;
  } else if (comp === "Rock" && player === "Scissor") {
    return 1;
  } else if (comp === "Paper" && player === "Rock") {
    return 1;
  } else if (comp === "Paper" && player === "Paper") {
    return 3;
  } else if (comp === "Paper" && player === "Scissor") {
    return 2;
  } else if (comp === "Scissor" && player === "Rock") {
    return 2;
  } else if (comp === "Scissor" && player === "Paper") {
    return 1;
  } else if (comp === "Scissor" && player === "Scissor") {
    return 3;
  }
}


array.forEach(element => {
    
});