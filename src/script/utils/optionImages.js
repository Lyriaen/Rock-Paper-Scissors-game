const scissorsImage = new Image();
scissorsImage.src = './src/images/icon-scissors.svg';

const paperImage = new Image();
paperImage.src = './src/images/icon-paper.svg';

const rockImage = new Image();
rockImage.src = './src/images/icon-rock.svg';

const lizardImage = new Image();
lizardImage.src = './src/images/icon-lizard.svg';

const spockImage = new Image();
spockImage.src = './src/images/icon-spock.svg';

export const getOptionImage = (option) => {
    if (option === 'scissors') return scissorsImage;
    if (option === 'paper') return paperImage;
    if (option === 'rock') return rockImage;
    if (option === 'lizard') return lizardImage;
    if (option === 'spock') return spockImage;
}