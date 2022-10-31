import { clearMainWindow } from "../utils/functions.js"
import { createChoiceBoard, createOptionElement } from "./utils.js"
import { basicVersion, bonusVersion } from "../utils/versions.js"

export const createStepTwoView = (userChoice, computerChoice, versionName) => {
    clearMainWindow()
    const mainElement = document.querySelector('.main')
    const boardsContainerElement = document.createElement('div')
    boardsContainerElement.classList.add('boards-container')
    mainElement.append(boardsContainerElement)
    const userChoiceBoard = createChoiceBoard(userChoice, 'user')
    boardsContainerElement.append(userChoiceBoard)

    const computerChoiceBoard = createChoiceBoard(computerChoice)
    boardsContainerElement.append(computerChoiceBoard)

    setTimeout(() => {
        const element = document.querySelector('.computerChoice')
        element.classList.add('computerChoice-show')
        addResultBoard(userChoice, computerChoice, versionName)
    }, 1000)

}

const addResultBoard = (userChoice, computerChoice, versionName) => {
    const getResult = getResultFunctionBasedOnVersion(versionName)
    const result = getResult(userChoice, computerChoice)
    console.log(result)

}

const getResultFunctionBasedOnVersion = (versionName) => {
    if (versionName === 'basic') {
        return basicVersion.getResult
    }
    if (versionName === 'bonus') {
        return bonusVersion.getResult
    }

}