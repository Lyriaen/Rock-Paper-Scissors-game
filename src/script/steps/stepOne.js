import { clearMainWindow } from "../utils/functions.js"
import { createStepTwoView } from "./stepTwo.js"
import { createOptionElement } from './utils.js'

export const createStepOneView = (version) => {
    showFooter()
    clearMainWindow()
    createOptionsElement(version)
}

const createOptionsElement = (version) => {
    const { versionName, options, backgroundImageName, getPoints } = version
    const mainElement = document.querySelector('.main')
    const optionsContainerElement = document.createElement('section')
    optionsContainerElement.classList.add('main_optionsContainer')

    const backgroundImage = document.createElement('img')
    backgroundImage.src = `./src/images/${backgroundImageName}`
    backgroundImage.classList.add('main_optionsContainer_backgroundImage', classDependsOnVersion(versionName))
    optionsContainerElement.append(backgroundImage)
    for (const [option, position] of Object.entries(options)) {
        const newOptionElement = createOptionElement(option, position)
        newOptionElement.classList.add(classDependsOnVersion(versionName))
        addEventListenerToElement(newOptionElement, option, position, getPoints)
        optionsContainerElement.append(newOptionElement)
    }
    mainElement.append(optionsContainerElement)
}


const showFooter = () => {
    const footer = document.querySelector('.footer')
    footer.style.display = 'block'
}

const classDependsOnVersion = (version) => {
    if (version === 'basic') {
        return 'basic-version'
    }
    if (version === 'bonus') {
        return 'bonus-version'
    }
}

const addEventListenerToElement = (newOptionElement, option, getPoints) => {
    newOptionElement.addEventListener('click', () => { createStepTwoView(option, getPoints) })
}