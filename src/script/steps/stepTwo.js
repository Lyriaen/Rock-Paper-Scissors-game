import { clearMainWindow } from "../utils/functions.js"
import { createChoiseBoard, createOptionElement } from "./utils.js"

export const createStepTwoView = (option) => {
    console.log('step two')
    clearMainWindow()
    const mainElement = document.querySelector('.main')
    const userChoiseBoard = createChoiseBoard(option, 'user')
    mainElement.append(userChoiseBoard)

}