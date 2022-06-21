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
  //computer rock 0, player scissors 2
  let result = computerHand > userHand ? (Math.abs(computerHand - userHand) + 1) : Math.abs(computerHand - userHand);
  
  switch (result) {
    case 0: return 'tie';
    case 1: return false;
    case 2: return true;
    case 3: return false;
  }
}

function game() {
  let userWins = 0;
  let computerWins = 0;

  for (let i = 1; i <= 5; i++) {
    let computerHand = computerPlay();;
    let userHand = userPlay();
    let result = playRound(computerHand, userHand);

    console.log(`Computer: ${hands[computerHand]}, Player: ${hands[userHand]}`)
    if (result == true) {
      console.log('The computer wins!')
      computerWins++;
    } else if (result == false) {
      console.log('You win!')
      userWins++;
    } else {
      console.log('Theres a tie!')
      userWins++;
      computerWins++;
    }
  }

  if (userWins > computerWins) {
    console.log('You\'ve won!');
  } else {
    console.log('You lose...');
  }
}

// To determine a winner, use the indices of the hands
// If the index is the same, tie
// If one hand is 1 index less than the other hand, then that hand loses(different for scissors)
// Visa versa for a win(different for rock)
// rock 0, paper 1: 1
// paper 1, rock 0: 2
// 0, 2: 2
// 2, 0: 3, 1
// 1, 2: 1
// 2, 1: 2