import { removeResultBoard } from '../utils/createRemoveElements.js';
import { hideChoiceBoard , hideFooter , showMainMenu } from '../utils/showHideFunctions';
import { viewRules } from './mainMenu.js';

const backToMenuButton = document.getElementById('backToMenuButton');

const backToMenu = () => {
    hideFooter();
    hideChoiceBoard();
    removeResultBoard();
    showMainMenu();
}

backToMenuButton.addEventListener('click', backToMenu);

const sideRulesButton = document.querySelector('.rules-side-button')

sideRulesButton.addEventListener('click', () => viewRules(sideRulesButton?.getAttribute('data-version')));
