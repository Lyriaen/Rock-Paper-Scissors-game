export const basicVersion = {
    versionName: 'basic',
    rules: 'image-rules.svg',
    options: {
        rock: {
            top: 100,
            left: 50
        },
        paper: {
            top: 0,
            left: 0
        },
        scissors: {
            top: 0,
            left: 100,
        }
    },
    backgroundImageName: 'bg-triangle.svg',
    getResult: (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            return 'draw'
        }
        if (userChoice === 'scissors') {
            return computerChoice === 'paper' ? 'win' : 'lose'
        }
        if (userChoice === 'paper') {
            return computerChoice === 'rock' ? 'win' : 'lose'
        }
        if (userChoice === 'rock') {
            return computerChoice === 'scissors' ? 'win' : 'lose'
        }
    }
}


export const bonusVersion = {
    versionName: 'bonus',
    rules: 'image-rules-bonus.svg',
    options: {
        rock: {
            top: 95,
            left: 80
        },
        paper: {
            top: 35,
            left: 97
        },
        scissors: {
            top: 0,
            left: 50,
        },
        lizard: {
            top: 95,
            left: 20,
        },
        spock: {
            top: 35,
            left: 3,
        }
    },
    backgroundImageName: 'bg-pentagon.svg',
    getResult: (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            return 'draw'
        }
        if (userChoice === 'scissors') {
            return computerChoice === 'paper' || computerChoice === 'lizard' ?
                'win' : 'lose'
        }
        if (userChoice === 'paper') {
            return computerChoice === 'rock' || computerChoice === 'spock' ?
                'win' : 'lose'
        }
        if (userChoice === 'rock') {
            return computerChoice === 'lizard' || computerChoice === 'scissors' ?
                'win' : 'lose'
        }
        if (userChoice === 'lizard') {
            return computerChoice === 'spock' || computerChoice === 'paper' ?
                'win' : 'lose'
        }
        if (userChoice === 'spock') {
            return computerChoice === 'rock' || computerChoice === 'scissors' ?
                'win' : 'lose'
        }
    }
}