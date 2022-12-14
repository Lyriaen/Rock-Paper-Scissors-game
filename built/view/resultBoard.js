import { showChoiceBoard } from '../utils/showHideFunctions.js';
import { createChoiceBoard, createElement, removeResultBoard } from '../utils/createRemoveElements.js';
import { basicVersion, bonusVersion } from '../utils/versions.js';
export const createResultBoard = (userChoice, computerChoice, versionName) => {
    //prevent double render if user click option many times
    if (document.querySelector('.boards-container')) {
        return;
    }
    const mainElement = document.querySelector('.main');
    const boardsContainerElement = createElement('div', ['boards-container']);
    boardsContainerElement === null || boardsContainerElement === void 0 ? void 0 : boardsContainerElement.setAttribute('open', '');
    mainElement.append(boardsContainerElement);
    const userChoiceBoard = createChoiceBoard(userChoice, 'user');
    boardsContainerElement.append(userChoiceBoard);
    const resultContainer = createElement('div', ['resultContainer']);
    const computerChoiceBoard = createChoiceBoard(computerChoice);
    boardsContainerElement.append(computerChoiceBoard);
    computerChoiceBoard.before(resultContainer);
    setTimeout(() => {
        const element = document.querySelector('.computerChoice');
        element.classList.add('computerChoice-show');
        addResultBoard(userChoice, computerChoice, versionName);
    }, 1000);
};
const addResultBoard = (userChoice, computerChoice, versionName) => {
    const result = getResult(userChoice, computerChoice, versionName);
    const resultContainer = document.querySelector('.resultContainer');
    resultContainer.classList.add('resultContainer-show');
    const resultTextElement = createElement('p', ['resultText'], `You ${result}`);
    resultContainer.append(resultTextElement);
    const playAgainButton = createElement('button', ['button', 'primary-button'], 'play again');
    playAgainButton.addEventListener('click', () => startNewGame(versionName));
    resultContainer.append(playAgainButton);
    setWinner(result);
};
const getResult = (userChoice, computerChoice, versionName) => {
    if (versionName === 'basic') {
        return basicVersion.getResult(userChoice, computerChoice);
    }
    return bonusVersion.getResult(userChoice, computerChoice);
};
const startNewGame = (versionName) => {
    const resultContainer = document.querySelector('.resultContainer');
    const boardsContainerElement = document.querySelector('.boards-container');
    boardsContainerElement === null || boardsContainerElement === void 0 ? void 0 : boardsContainerElement.removeAttribute('open');
    resultContainer.classList.remove('resultContainer-show');
    resultContainer.classList.add('resultContainer-hide');
    boardsContainerElement === null || boardsContainerElement === void 0 ? void 0 : boardsContainerElement.setAttribute('closing', '');
    resultContainer.addEventListener('animationend', () => {
        removeResultBoard();
        showChoiceBoard(versionName);
    }, { once: true });
};
const setWinner = (result) => {
    const pointsElement = document.querySelector('.header_score-container_score');
    let points = Number(pointsElement.textContent);
    setTimeout(() => {
        if (result === 'win') {
            const userChoice = document.querySelector('.user-option-template');
            userChoice.classList.add('winner');
            ++points;
        }
        if (result === 'lose') {
            const computerChoice = document.querySelector('.computer-option-template');
            computerChoice.classList.add('winner');
            --points;
        }
        localStorage.setItem('points', points.toString());
        pointsElement.textContent = points.toString();
    }, 1000);
};
