import { basicVersion, bonusVersion } from '../utils/versions.js';
import { createChoiceBoard } from './choiceBoards.js';
import { getStartingPoints } from '../utils/showHideFunctions.js';


getStartingPoints();

const startBasicVersionButton = document.getElementById('startBasicVersionButton') as HTMLButtonElement;
const basicVersionRulesButton = document.getElementById('basicVersionRulesButton') as HTMLButtonElement;

const startBonusVersionButton = document.getElementById('startBonusVersionButton') as HTMLButtonElement;
const bonusVersionRulesButton = document.getElementById('bonusVersionRulesButton') as HTMLButtonElement;

startBasicVersionButton.addEventListener('click', () => createChoiceBoard( basicVersion ));
startBonusVersionButton.addEventListener('click', () => createChoiceBoard( bonusVersion ));

basicVersionRulesButton.addEventListener('click', () => viewRules('basic'))
bonusVersionRulesButton.addEventListener('click', () => viewRules('bonus'))

export const viewRules = (version: string) => {
    const rulesContainer = document.querySelector(`.${version}-rules`) as HTMLElement;
    rulesContainer.setAttribute('open', '');
    rulesContainer.classList.remove('hide');
    rulesContainer.addEventListener(
        'animationend',
        () => {
            rulesContainer.removeAttribute('open');
            rulesContainer.classList.add('open');
        },
        { once: true }
    );
}

const closeRules = () => {
    const openRules = document.querySelector('.rules.open') as HTMLElement;
    openRules.setAttribute("closing", '');

    openRules.addEventListener(
        'animationend',
        () => {
            openRules.removeAttribute('closing');
            openRules.classList.remove('open');
            openRules.classList.add('hide');
        },
        { once: true }
    );
}
const closeRulesButtons = document.querySelectorAll('.rules-window-close-button');
closeRulesButtons.forEach(button => button.addEventListener('click', closeRules));
