let hands = ['rock', 'paper', 'scissors'];

function computerPlay() {
  return hands[Math.floor(Math.random() * 3 + 1)];
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

  function playRound(computerHand, userHand) {
    
  }
}