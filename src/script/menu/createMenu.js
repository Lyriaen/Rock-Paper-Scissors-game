// import { createElement } from "../utils/functions.js"
// import { addMenuEventListeners } from "./menuEventListeners.js"
//
// export const createMenu = () => {
//     const mainElement = document.querySelector('.main')
//
//     const mainMenuContainer = createElement('section', ['main_menu', 'shown'])
//
//     const firstVersionButtonContainer = createVersionButtonContainer('Basic')
//     const secondVersionButtonContainer = createVersionButtonContainer('Bonus')
//
//     mainMenuContainer.append(firstVersionButtonContainer)
//     mainMenuContainer.append(secondVersionButtonContainer)
//     mainElement.append(mainMenuContainer)
//
//     addMenuEventListeners();
// }
//
// const createVersionButtonContainer = (version) => {
//     const gameVersionButton = createElement('button',
//         ['button', 'primary-button', 'menu-button'],
//         `Play ${version} version`,
//         `start${version}VersionButton`
//     )
//     const rulesButton = createElement('button',
//         ['button', 'secondary-button'],
//         'rules',
//         `${version.toLowerCase()}VersionRulesButton`
//     )
//
//     const versionContainer = createElement('div', ['main_button-container_version'])
//
//     versionContainer.append(gameVersionButton)
//     versionContainer.append(rulesButton)
//
//     return versionContainer
// }