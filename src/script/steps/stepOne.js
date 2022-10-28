import { clearMainWindow } from "../utils/functions.js"

export const createStepOneView = (version) => {
    const footer = document.querySelector('.footer')
    footer.style.display = 'block'
    clearMainWindow()
}