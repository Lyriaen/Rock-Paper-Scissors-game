import { addMenuEventListeners } from "./menuEventListeners.js"

export const createMenu = () => {
    const mainElement = document.querySelector('.main')
    const firstButtonContainer = createButtonContainer('Basic')
    mainElement.append(firstButtonContainer)
    const secondButtonContainer = createButtonContainer('Bonus')
    mainElement.append(secondButtonContainer)
    addMenuEventListeners();
}

const createButtonContainer = (version) => {
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('main_button-container')

    const gameVersionButton = document.createElement('button')
    gameVersionButton.classList.add('button', 'primary-button', 'menu-button')
    gameVersionButton.textContent = 'Play ' + version + ' version'
    gameVersionButton.id = 'start' + version + 'VersionButton'
    buttonContainer.append(gameVersionButton)

    const rulesButton = document.createElement('button')
    rulesButton.classList.add('button', 'secondary-button')
    rulesButton.textContent = 'rules'
    rulesButton.id = version.toLowerCase() + 'VersionRulesButton'
    buttonContainer.append(rulesButton)

    return buttonContainer
}