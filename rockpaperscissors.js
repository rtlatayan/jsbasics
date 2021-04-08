const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('error')
    }
};
  
const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break;
        case 2:
            return 'scissors'
            break;
    }
}
  
const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
        console.log('Tie');
    }

    if (userChoice === 'bomb')  {
        console.log('You won!')
    } else {
        if(userChoice === 'rock') {
            if(computerChoice === 'paper') {
                console.log('Comp won!')
            } else {
                console.log('You won!')
            }
        }
    
        if(userChoice === 'paper') {
            if(computerChoice === 'scissors') {
                console.log('Comp won!')
            } else {
                console.log('You won!')
            }
        }
    
        if(userChoice === 'scissors') {
            if(computerChoice === 'rock') {
                console.log('Comp won!')
            } else {
                console.log('You won!')
            }
        }
    }
}

const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    
    console.log(`You threw: ${userChoice}.`);
    console.log(`Computer threw: ${computerChoice}.` );
    return determineWinner('bomb', getComputerChoice());
}

playGame();