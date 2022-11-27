import { basicVersion, bonusVersion } from '../utils/versions.js'
import { createChoiceBoard } from './choiceBoards.js'
import { getStartingPoints } from '../utils/functions.js'


getStartingPoints();

const startBasicVersionButton = document.getElementById('startBasicVersionButton');
const basicVersionRulesButton = document.getElementById('basicVersionRulesButton');

const startBonusVersionButton = document.getElementById('startBonusVersionButton');
const bonusVersionRulesButton = document.getElementById('bonusVersionRulesButton');

startBasicVersionButton.addEventListener('click', () => createChoiceBoard( basicVersion ));
startBonusVersionButton.addEventListener('click', () => createChoiceBoard( bonusVersion ));

basicVersionRulesButton.addEventListener('click', () => viewRules('basic'))
bonusVersionRulesButton.addEventListener('click', () => viewRules('bonus'))

const viewRules = (version) => {
    const rulesContainer = document.querySelector(`.${version}-rules`)
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
    const openRules = document.querySelector('.rules.open')
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
const closeRulesButtons = document.querySelectorAll('.rules-window-close-button')
closeRulesButtons.forEach(button => button.addEventListener('click', closeRules))
