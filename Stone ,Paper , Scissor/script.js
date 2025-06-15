let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const scoreUser = document.querySelector("#userscore");
const scoreComp = document.querySelector("#compscore");

const genCompChoice = () => {
  let options = ["Stone", "Paper", "Scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const drawGame = () => {
  msg.innerText = "Game was Draw , Play Again!";
  msg.style.backgroundColor = "#081b31";
};

showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    scoreUser.innerText = userScore;
    msg.innerText = `You Won! , ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    scoreComp.innerText = compScore;
    msg.innerText = `You Lost! ,  ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate Computer Choice
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    userWin = true;
    if (userChoice === "Stone") {
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWin = compChoice === "Scissor" ? false : true;
    } else {
      userWin = compChoice === "Stone" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
