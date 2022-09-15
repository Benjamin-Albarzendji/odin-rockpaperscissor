// Global variables to keep track of score
let rounds = 0;
let playerwins = 0;
let even = 0;
let compwin = 0;

//The code that gets executed when one of the game buttons is clicked
buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //Gets back the appropiate value to play a round
    //and to change the webpage
    let playerSelect = playerSelection(button.value);
    let computerChoice = getComputerChoice();

    //Adds the player choice to the webpage
    let pChoice = document.querySelector(".playerchoice");
    let imagePlayer = document.createElement("img");
    imagePlayer.src = `images/${playerSelect}.png`;
    imagePlayer.id = "imagePlayer";

    //Adds the computer choice to the webpage
    cChoice = document.querySelector(".computerchoice");
    imageComputer = document.createElement("img");
    imageComputer.src = `images/${computerChoice}.png`;
    imageComputer.id = "imageComputer";

    //Checks if previous images to be deleted
    imagesCheck = document.querySelectorAll("img");
    if (imagesCheck.length > 0) {
      imagesCheck.forEach((image) => {
        image.parentNode.removeChild(image);
      });
    }

    //Appends the images to the DOM
    pChoice.appendChild(imagePlayer);
    cChoice.appendChild(imageComputer);

    //calls the game function
    game(computerChoice, playerSelect);
  });
});

//The Logic of the RPS game. The function that calls other functions.
function game(comp, player) {
  rounds++;
  round = playRound(comp, player);
  if (round === 1) {
    compwin++;
  } else if (round === 2) {
    playerwins++;
  } else {
    even++;
  }

  scoreupdater();
}

//Gets a computer choice when prompted
function getComputerChoice() {
  computerChoice = ["Rock", "Paper", "Scissor"];
  x = Math.floor(Math.random() * 3);
  return computerChoice[x];
}

//Player selection prompted via buttons with the values 1,2,3
function playerSelection(x) {
  switch (x) {
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

// Plays a round of the game
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

//Updates the score and checks if the game is over
function scoreupdater() {
  //Updates the scores in the page
  let round = document.getElementById("round");
  round.textContent = `Round: ${rounds}`;

  let youScore = document.getElementById("you");
  youScore.textContent = `You: ${playerwins}`;

  let compScore = document.getElementById("computer");
  compScore.textContent = `Computer: ${compwin}`;

  let evenScore = document.getElementById("even");
  evenScore.textContent = `Even: ${even}`;

  gameEnd();
}

// The Function that ends the game, announces a winner, formats the page
function gameEnd() {
  //Checks what winner message to print
  if (rounds === 5) {
    //Grabs the game body before changing the body of the game
    gameBody = document.querySelector(".container");

    //Changes the page if rounds === 5
    document.body.removeChild(document.querySelector(".container"));

    //Final Message
    let finalMessage = document.createElement("h3");
    //If Comp wins
    if (compwin > playerwins) {
      finalMessage.innerText = "You lost the game!\n Play again?";
    }
    //If Player Wins
    else if (compwin < playerwins) {
      finalMessage.innerText =
        "You won the game with " +
        playerwins +
        " rounds out of 5! \n Play again?";
    } else {
      finalMessage.innerText = "The game is even! \n Play again?";
    }
    //Appends the final message
    finalMessage.id = "finalMessage";
    document.body.appendChild(finalMessage);

    //Creates a resetButton that restores the game for another round
    resetButton = document.createElement("button");
    resetButton.textContent = "Play Again!";
    buttonContainer = document.getElementById("buttons");
    resetButton.id = "resetButton";
    document.body.appendChild(resetButton);

    //Logic for the resetButton
    resetButton.addEventListener("click", () => {
      //Adds back the game and removes the resetButton
      document.body.appendChild(gameBody);
      document.body.removeChild(resetButton);
      document.body.removeChild(finalMessage);

      //Removes images from the game
      imagesCheck = document.querySelectorAll("img");
      if (imagesCheck.length > 0) {
        imagesCheck.forEach((image) => {
          image.parentNode.removeChild(image);
        });
      }

      //Restores the global variables
      rounds = 0;
      playerwins = 0;
      even = 0;
      compwin = 0;
      scoreupdater();
    });
  }
}
