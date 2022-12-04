function computerPlay() {
    const randNum = (Math.floor(Math.random() * 3) + 1)
    switch (randNum) {
        case 1:
            computer = 'rock'
            break;
        case 2:
            computer = 'paper'
            break;
        case 3:
            computer = 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'It`s a draw!'
    } else if (computerSelection == 'rock') {
        return (playerSelection == 'paper') ? 'You win! Paper beats rock' : 'You lose! Rock beats scissors'
    } else if (computerSelection == 'paper') {
        return (playerSelection == 'scissors') ? 'You win! Scissors beats paper' : 'You lose! Paper beats rock'
    } else if (computerSelection == 'scissors') {
        return (playerSelection == 'rock') ? 'You win! Rock beats scissors' : 'You lose! Scissors beats paper'
    }
}

function getPlayerInput() {
    let playerInput = false
    while (playerInput === false) {
        const choice = prompt('Please enter "Rock", "Paper" or "Scissors" only')
        const choiceinLower = choice.toLocaleLowerCase()
        if (choiceinLower !== 'rock' &&
            choiceinLower !== 'paper' &&
            choiceinLower !== 'scissors') {
            alert('Please fill in the form and try again')
            continue
        } else {
            playerInput = true
            return choiceinLower
        }
    }
}

function game() {
    let draws = 0;
    let wins = 0;
    let losses = 0;
    for (let i = 1; i <= 5; i++) {
        computerPlay();
        const computerSelection = computer;
        const playerSelection = getPlayerInput()
        console.log('Computer says ' + computer)
        console.log('Round ' + i, playRound(playerSelection, computerSelection))
        if (playRound(playerSelection, computerSelection) === 'It`s a draw!') {
            draws++
            console.log(`Draws: ${draws}, Roman: ${wins}, Deep Blue: ${losses}`)
        }
        if (playRound(playerSelection, computerSelection) === 'You win! Paper beats rock') {
            wins++
            console.log(`Draws: ${draws}, Roman: ${wins}, Deep Blue: ${losses}`)
        }
        if (playRound(playerSelection, computerSelection) === 'You win! Scissors beats paper') {
            wins++
            console.log(`Draws: ${draws}, Roman: ${wins}, Deep Blue: ${losses}`)
        }
        if (playRound(playerSelection, computerSelection) === 'You win! Rock beats scissors') {
            wins++
            console.log(`Draws: ${draws}, Roman: ${wins}, Deep Blue: ${losses}`)
        }
        if (playRound(playerSelection, computerSelection) === 'You lose! Rock beats scissors') {
            losses++
            console.log(`Draws: ${draws}, Roman: ${wins}, Deep Blue: ${losses}`)
        }
        if (playRound(playerSelection, computerSelection) === 'You lose! Paper beats rock') {
            losses++
            console.log(`Draws: ${draws}, Roman: ${wins}, Deep Blue: ${losses}`)
        }
        if (playRound(playerSelection, computerSelection) === 'You lose! Scissors beats paper') {
            losses++
            console.log(`Draws: ${draws}, Roman: ${wins}, Deep Blue: ${losses}`)
        }
    }
    console.log('Results are following:')
    if (wins < losses) {
        console.log('You are a loser')
    } if (wins > losses) {
        console.log('You are a winner')
    } if (wins == losses) {
        console.log('Well, it`s a draw!')
    }
}
game()



