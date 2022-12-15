import { removeResultBoard } from '../utils/createRemoveElements.js';
import { hideChoiceBoard , hideFooter , showMainMenu } from '../utils/showHideFunctions.js';
import { viewRules } from './mainMenu.js';

const backToMenuButton = document.getElementById('backToMenuButton') as HTMLButtonElement;

const backToMenu = () => {
    hideFooter();
    hideChoiceBoard();
    removeResultBoard();
    showMainMenu();
}

backToMenuButton.addEventListener('click', backToMenu);

const sideRulesButton = document.querySelector('.rules-side-button') as HTMLButtonElement;

sideRulesButton.addEventListener('click', () => viewRules(sideRulesButton?.getAttribute('data-version') as string));