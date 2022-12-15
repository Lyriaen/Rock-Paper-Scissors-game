import { createElement } from '../utils/createRemoveElements.js';
import { createOptionElement } from '../utils/createRemoveElements.js';
import { hideBasicLogo, hideBonusLogo, hideMainMenu, showFooter, showLogo } from '../utils/showHideFunctions.js';
import { createResultBoard } from './resultBoard.js';
export const createChoiceBoard = (version) => {
    var _a;
    showFooter();
    hideMainMenu();
    const logo = document.querySelector(`.header_logo-${version.versionName}`);
    if (logo.classList.contains('hide')) {
        showLogo(logo);
        if (version.versionName === 'basic') {
            hideBonusLogo();
        }
        if (version.versionName === 'bonus') {
            hideBasicLogo();
        }
    }
    (_a = document.querySelector('.rules-side-button')) === null || _a === void 0 ? void 0 : _a.setAttribute('data-version', version.versionName);
    createOptionsElement(version);
};
const createOptionsElement = ({ versionName, options, backgroundImageName }) => {
    if (!document.querySelector(`.main_${versionName}VersionContainer`)) {
        const mainElement = document.querySelector('.main');
        const versionContainerElement = createElement('section', [`main_${versionName}VersionContainer`]);
        const optionsContainerElement = createElement('div', ['main_optionsContainer']);
        const backgroundImage = createElement('img', ['main_optionsContainer_backgroundImage', classDependsOnVersion(versionName)]);
        backgroundImage.src = `./src/images/${backgroundImageName}`;
        optionsContainerElement.append(backgroundImage);
        for (const [option, position] of Object.entries(options)) {
            const newOptionElement = createOptionElement(option, classDependsOnVersion(versionName), position);
            addEventListenerToElement(newOptionElement, option, Object.keys(options), versionName);
            optionsContainerElement.append(newOptionElement);
        }
        versionContainerElement.append(optionsContainerElement);
        versionContainerElement.setAttribute('open', '');
        versionContainerElement.addEventListener("animationend", () => {
            versionContainerElement.removeAttribute('open');
            versionContainerElement.classList.add('open');
        });
        mainElement.append(versionContainerElement);
    }
    const versionContainerElement = document.querySelector(`.main_${versionName}VersionContainer`);
    versionContainerElement.setAttribute('open', '');
    versionContainerElement.classList.remove('hide');
    versionContainerElement.addEventListener('animationend', () => {
        versionContainerElement.removeAttribute('open');
        versionContainerElement.classList.add('open');
    }, { once: true });
};
const classDependsOnVersion = (version) => {
    if (version === 'basic') {
        return 'basic-version';
    }
    return 'bonus-version';
};
const addEventListenerToElement = (newOptionElement, selectedOption, options, versionName) => {
    newOptionElement.addEventListener('click', () => goToStepTwo(selectedOption, options, versionName));
};
const goToStepTwo = (userChoice, options, versionName) => {
    const computerChoice = randomComputerChoice(options);
    const openVersionContainer = document.querySelector('.open');
    openVersionContainer === null || openVersionContainer === void 0 ? void 0 : openVersionContainer.setAttribute("closing", '');
    openVersionContainer === null || openVersionContainer === void 0 ? void 0 : openVersionContainer.addEventListener('animationend', () => {
        openVersionContainer.removeAttribute('closing');
        openVersionContainer.classList.remove('open');
        openVersionContainer.classList.add('hide');
        createResultBoard(userChoice, computerChoice, versionName);
    }, { once: true });
};
const randomComputerChoice = (options) => {
    return options[Math.floor(Math.random() * options.length)];
};
