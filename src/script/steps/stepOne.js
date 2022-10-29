import { clearMainWindow } from "../utils/functions.js"

export const createStepOneView = (version) => {
    showFooter()
    clearMainWindow()
    const gameVersion = version.name
    createOptionsElement(version.options)
}

const createOptionsElement = (options) => {
    const mainElement = document.querySelector('.main')
    const optionsContainerElement = document.createElement('section')
    optionsContainerElement.classList.add('main_optionsContainer')
    const backgroundImage = document.createElement('img')
    backgroundImage.src = './src/images/bg-triangle.svg'
    backgroundImage.classList.add('main_optionsContainer_backgroundImage')
    optionsContainerElement.append(backgroundImage)
    for (const [option, position] of Object.entries(options)) {
        const newOptionElement = createOptionElement(option, position)
        optionsContainerElement.append(newOptionElement)
    }
    mainElement.append(optionsContainerElement)
}

const createOptionElement = (option, position) => {
    const optionElement = document.createElement('div')
    optionElement.classList.add(`option-${option}`, 'option')
    const iconElement = document.createElement('div')
    iconElement.classList.add('option-icon')
    // optionElement.innerText = option
    console.log(position.top)
    optionElement.style.top = position.top + '%'
    optionElement.style.left = position.left + '%'
    optionElement.append(iconElement)
    return optionElement
}

const showFooter = () => {
    const footer = document.querySelector('.footer')
    footer.style.display = 'block'
}