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
        rock: 'icon-rock.svg',
        paper: 'icon-paper.svg',
        scissors: 'icon-scissors.svg',
        lizard: 'icon-lizard.svg',
        spock: 'icon-spock.svg'
    },
    backgroundImage: 'bg-pentagon.svg'
}