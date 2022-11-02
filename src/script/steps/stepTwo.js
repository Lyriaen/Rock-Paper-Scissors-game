import { clearMainWindow } from "../utils/functions.js"
import { createChoiceBoard, createOptionElement } from "./utils.js"
import { basicVersion, bonusVersion } from "../utils/versions.js"
import { createStepOneView } from "./stepOne.js"

export const createStepTwoView = (userChoice, computerChoice, versionName) => {
    clearMainWindow()
    const mainElement = document.querySelector('.main')
    const boardsContainerElement = document.createElement('div')
    boardsContainerElement.classList.add('boards-container')
    mainElement.append(boardsContainerElement)
    const userChoiceBoard = createChoiceBoard(userChoice, 'user')
    boardsContainerElement.append(userChoiceBoard)
    const resultContainer = document.createElement('div')
    resultContainer.classList.add('resultContainer', 'resultContainer-hide')
    const computerChoiceBoard = createChoiceBoard(computerChoice)
    boardsContainerElement.append(computerChoiceBoard)
    computerChoiceBoard.before(resultContainer)
    setTimeout(() => {
        const element = document.querySelector('.computerChoice')
        element.classList.add('computerChoice-show')
        addResultBoard(userChoice, computerChoice, versionName)
    }, 1000)

}

const addResultBoard = (userChoice, computerChoice, versionName) => {
    const getResult = getResultFunctionBasedOnVersion(versionName)
    const result = getResult(userChoice, computerChoice)
    // const resultContainer = document.createElement('div')
    // resultContainer.classList.add('resultContainer')
    const resultContainer = document.querySelector('.resultContainer')
    const resultTextElement = document.createElement('p')
    resultTextElement.classList.add('resultText')
    resultTextElement.textContent = `You ${result}`
    resultContainer.append(resultTextElement)
    const playAgainButton = document.createElement('button')
    playAgainButton.classList.add('button', 'primary-button')
    playAgainButton.textContent = 'play again'
    resultContainer.classList.add('resultContainer-show')
    resultContainer.append(playAgainButton)
    playAgainButton.addEventListener('click', () => startNewGame(versionName))
    // const computerChoiceElement = document.querySelector('.computerChoiceBoard')
    // computerChoiceElement.before(resultContainer)
}

const getResultFunctionBasedOnVersion = (versionName) => {
    if (versionName === 'basic') {
        return basicVersion.getResult
    }
    if (versionName === 'bonus') {
        return bonusVersion.getResult
    }
}

const startNewGame = (versionName) => {
    if (versionName === 'basic') {
        createStepOneView(basicVersion)
    }
    if (versionName === 'bonus') {
        createStepOneView(bonusVersion)
    }
}