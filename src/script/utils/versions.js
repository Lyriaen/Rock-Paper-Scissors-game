export const basicVersion = {
    name: 'basic',
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
    backgroundImage: 'bg-triangle.svg'
}


export const bonusVersion = {
    name: 'bonus',
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
    backgroundImage: 'bg-pentagon.svg'
}