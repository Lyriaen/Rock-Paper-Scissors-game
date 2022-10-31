import { clearMainWindow } from "../utils/functions.js"
import { createChoiceBoard, createOptionElement } from "./utils.js"

export const createStepTwoView = (userChoice, computerChoice) => {
    console.log(computerChoice)
    clearMainWindow()
    const mainElement = document.querySelector('.main')
    const boardsContainerElement = document.createElement('div')
    boardsContainerElement.classList.add('boards-container')
    mainElement.append(boardsContainerElement)
    const userChoiceBoard = createChoiceBoard(userChoice, 'user')
    boardsContainerElement.append(userChoiceBoard)

    const computerChoiceBoard = createChoiceBoard(computerChoice)
    boardsContainerElement.append(computerChoiceBoard)
    // const computerChoiceTemplateElement = createOptionTemplateElement()
    // computerChoiceBoard.append(computerChoiceTemplateElement)
    // const computerChoiceElement = createOptionElement(computerChoice)
    // computerTemplateChoiceBoard.append(computerChoiceElement)

    setTimeout(() => {
        const element = document.querySelector('.computerChoice')
        console.log(element)
        element.classList.add('computerChoice-show')
    }, 1000)

}