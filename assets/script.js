let hands = ['rock', 'paper', 'scissors'];

function computerPlay() {
  return Math.floor(Math.random() * 3);
}

function userPlay() {
  let userChoice;
  let result;

  console.log('Choose a hand: Rock, paper or scissors.');
  while (typeof userChoice != 'string') {
    if (result) { console.log('You have to choose between rock, paper or scissors'); }

    result = window.prompt().toLowerCase().trim();
    if (hands.includes(result)) { userChoice = result; }
  }

  return hands.indexOf(userChoice);
}

function playRound(computerHand, userHand) {
  //computer rock, player scissors

}

function game() {
  let userWins = 0;
  let computerWins = 0;
}

// To determine a winner, use the indices of the hands
// If the index is the same, tie
// If one hand is 1 index less than the other hand, then that hand loses(different for scissors)
// Visa versa for a win(different for rock)