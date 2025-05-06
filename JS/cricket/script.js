function calculate(n) {
  let randomNumber = Math.random() * 3;
  let computerChoice;
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = "Bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = "Ball";
  } else {
    computerChoice = "Stump";
  }
  let resultMsg;
  if (computerChoice == "Ball") {
    resultMsg = "User Won";
  } else if (computerChoice == n) {
    resultMsg = `it's a tie`;
  } else if (computerChoice == "Stump") {
    resultMsg = "Computer has Won";
  }
  alert(
    `you have chosen ${n}. Computer choice is ${computerChoice} and ${resultMsg}`
  );
}
