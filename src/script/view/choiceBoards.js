import { createResultBoard } from './resultBoard.js'
import { createOptionElement } from '../steps/utils.js'
import { createElement } from '../utils/functions.js'


export const createChoiceBoard = (version) => {
    showFooter();
    hideMainMenu();
    document.querySelector('.rules-side-button').setAttribute('data-version', version.versionName)
    createOptionsElement(version);
}

const createOptionsElement = ({ versionName, options, backgroundImageName }) => {
    if (!document.querySelector(`.main_${versionName}VersionContainer`)){
        const mainElement = document.querySelector('.main');
        const versionContainerElement = createElement('section', [`main_${versionName}VersionContainer`]);
        const optionsContainerElement = createElement('div', ['main_optionsContainer']);
        const backgroundImage = createElement('img',
                                              ['main_optionsContainer_backgroundImage', classDependsOnVersion(versionName)]
        );
        backgroundImage.src = `./src/images/${backgroundImageName}`
        optionsContainerElement.append(backgroundImage);
        for (const [option, position] of Object.entries(options)) {
            const newOptionElement = createOptionElement(option, classDependsOnVersion(versionName), position);
            addEventListenerToElement(newOptionElement, option, Object.keys(options), versionName);
            optionsContainerElement.append(newOptionElement);
        }
        versionContainerElement.append(optionsContainerElement);
        versionContainerElement.setAttribute('open', '');
        versionContainerElement.addEventListener(
            "animationend",
            () => {
                versionContainerElement.removeAttribute('open');
                versionContainerElement.classList.add('open');
            }
        );
        mainElement.append(versionContainerElement);

    }
    const versionContainerElement = document.querySelector(`.main_${versionName}VersionContainer`);
    versionContainerElement.setAttribute('open', '');
    versionContainerElement.classList.remove('hide');
    versionContainerElement.addEventListener(
        'animationend',
        () => {
            versionContainerElement.removeAttribute('open');
            versionContainerElement.classList.add('open');
        },
        { once: true }
    );
}


const showFooter = () => {
    document.querySelector('.footer').classList.remove('hide');
}

const hideMainMenu = () => {
    document.querySelector('.main_menu').classList.add('hide');
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
    newOptionElement.addEventListener('click', () => goToStepTwo(selectedOption, options, versionName));
}

const goToStepTwo = (userChoice, options, versionName) => {
    const computerChoice = randomComputerChoice(options);
    const openVersionContainer = document.querySelector('.open');
    openVersionContainer.setAttribute("closing", '');

    openVersionContainer.addEventListener(
        'animationend',
        () => {
            openVersionContainer.removeAttribute('closing');
            openVersionContainer.classList.remove('open');
            openVersionContainer.classList.add('hide');
            createResultBoard( userChoice, computerChoice, versionName);
        },
        { once: true }
    );

}

const randomComputerChoice = (options) => {
    const computerChoiceIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[computerChoiceIndex];
    return computerChoice;
}