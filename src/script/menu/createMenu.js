import { addMenuEventListeners } from "./menuEventListeners.js"

export const createMenu = () => {
    const mainElement = document.querySelector('.main')
    const buttonContainer = document.createElement('section')
    buttonContainer.classList.add('main_button-container')

    const firstVersionButtonContainer = createVersionButtonContainer('Basic')
    buttonContainer.append(firstVersionButtonContainer)
    const secondVersionButtonContainer = createVersionButtonContainer('Bonus')
    buttonContainer.append(secondVersionButtonContainer)

    mainElement.append(buttonContainer)
    addMenuEventListeners();
}

const createVersionButtonContainer = (version) => {
    const versionContainer = document.createElement('div')
    versionContainer.classList.add('main_button-container_version')

    const gameVersionButton = document.createElement('button')
    gameVersionButton.classList.add('button', 'primary-button', 'menu-button')
    gameVersionButton.textContent = 'Play ' + version + ' version'
    gameVersionButton.id = 'start' + version + 'VersionButton'
    versionContainer.append(gameVersionButton)

    const rulesButton = document.createElement('button')
    rulesButton.classList.add('button', 'secondary-button')
    rulesButton.textContent = 'rules'
    rulesButton.id = version.toLowerCase() + 'VersionRulesButton'
    versionContainer.append(rulesButton)

    return versionContainer
}