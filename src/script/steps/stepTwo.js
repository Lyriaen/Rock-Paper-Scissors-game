import { clearMainWindow } from "../utils/functions.js"
import { createChoiseBoard, createOptionElement } from "./utils.js"

export const createStepTwoView = (userChoice, computerChoice) => {
    console.log(computerChoice)
    clearMainWindow()
    const mainElement = document.querySelector('.main')
    const boardsContainerElement = document.createElement('div')
    boardsContainerElement.classList.add('boards-container')
    mainElement.append(boardsContainerElement)
    const userChoiceBoard = createChoiseBoard(userChoice, 'user')
    boardsContainerElement.append(userChoiceBoard)

    const computerTemplateChoiceBoard = createChoiseBoard()
    boardsContainerElement.append(computerTemplateChoiceBoard)

}