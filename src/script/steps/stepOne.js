import { clearMainWindow } from "../utils/functions.js"

export const createStepOneView = (version) => {
    showFooter()
    clearMainWindow()
    const gameVersion = version.name
    createOptionsElement(version.name, version.options, version.backgroundImage)
}

const createOptionsElement = (version, options, backgroundImageName) => {
    const mainElement = document.querySelector('.main')
    const optionsContainerElement = document.createElement('section')
    optionsContainerElement.classList.add('main_optionsContainer')

    const backgroundImage = document.createElement('img')
    backgroundImage.src = `./src/images/${backgroundImageName}`
    backgroundImage.classList.add('main_optionsContainer_backgroundImage', classDependsOnVersion(version))

    optionsContainerElement.append(backgroundImage)
    for (const [option, position] of Object.entries(options)) {
        const newOptionElement = createOptionElement(option, position)
        newOptionElement.classList.add(classDependsOnVersion(version))
        optionsContainerElement.append(newOptionElement)
    }
    mainElement.append(optionsContainerElement)
}

const createOptionElement = (option, position) => {
    const optionElement = document.createElement('div')
    optionElement.classList.add(`option-${option}`, 'option')
    optionElement.style.top = position.top + '%'
    optionElement.style.left = position.left + '%'

    const iconContainerElement = document.createElement('div')
    iconContainerElement.classList.add('iconContainer')
    optionElement.append(iconContainerElement)

    const iconElement = document.createElement('img')
    iconElement.src = `./src/images/icon-${option}.svg`
    iconElement.classList.add('option-icon')
    iconContainerElement.append(iconElement)

    return optionElement
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