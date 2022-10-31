import { clearMainWindow } from "../utils/functions.js"
import { createStepTwoView } from "./stepTwo.js"
import { createOptionElement } from './utils.js'

export const createStepOneView = (version) => {
    showFooter()
    clearMainWindow()
    createOptionsElement(version)
}

const createOptionsElement = (version) => {
    const { versionName, options, backgroundImageName } = version
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
        addEventListenerToElement(newOptionElement, option, Object.keys(options), versionName)
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

const addEventListenerToElement = (newOptionElement, selectedOption, options, versionName) => {
    newOptionElement.addEventListener('click', () => goToStepTwo(selectedOption, options, versionName))
}

const goToStepTwo = (userChoice, options, versionName) => {
    const computerChoice = randomComputerChoice(options)
    createStepTwoView(userChoice, computerChoice, versionName)
}

const randomComputerChoice = (options) => {
    const computerChoiceIndex = Math.floor(Math.random() * options.length)
    const computerChoice = options[computerChoiceIndex]
    return computerChoice;
}