import { createElement } from "../utils/functions.js"
import { addMenuEventListeners } from "./menuEventListeners.js"

export const createMenu = () => {
    const mainElement = document.querySelector('.main')

    const buttonContainer = createElement('section', ['main_button-container'])

    const firstVersionButtonContainer = createVersionButtonContainer('Basic')
    const secondVersionButtonContainer = createVersionButtonContainer('Bonus')

    buttonContainer.append(firstVersionButtonContainer)
    buttonContainer.append(secondVersionButtonContainer)
    mainElement.append(buttonContainer)

    addMenuEventListeners();
}

const createVersionButtonContainer = (version) => {
    const gameVersionButton = createElement('button',
        ['button', 'primary-button', 'menu-button'],
        `Play ${version} version`,
        `start${version}VersionButton`
    )
    const rulesButton = createElement('button',
        ['button', 'secondary-button'],
        'rules',
        `${version.toLowerCase()}VersionRulesButton`
    )

    const versionContainer = createElement('div', ['main_button-container_version'])

    versionContainer.append(gameVersionButton)
    versionContainer.append(rulesButton)

    return versionContainer
}