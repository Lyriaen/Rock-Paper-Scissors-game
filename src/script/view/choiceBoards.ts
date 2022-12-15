import { createElement } from '../utils/createRemoveElements.js';
import { createOptionElement } from '../utils/createRemoveElements.js';
import { hideBasicLogo , hideBonusLogo , hideMainMenu , showFooter , showLogo } from '../utils/showHideFunctions.js';
import { createResultBoard } from './resultBoard.js';
import { VersionObject } from "../utils/versions";

export const createChoiceBoard = (version: VersionObject) => {
    showFooter();
    hideMainMenu();
    const logo = document.querySelector(`.header_logo-${version.versionName}`) as HTMLElement;
    if (logo.classList.contains('hide')) {
        showLogo(logo);
        if(version.versionName === 'basic'){
            hideBonusLogo();
        }
        if(version.versionName === 'bonus'){
            hideBasicLogo();
        }
    }
    document.querySelector('.rules-side-button')?.setAttribute('data-version', version.versionName);
    createOptionsElement(version);
}


const createOptionsElement = ({ versionName, options, backgroundImageName }: VersionObject) => {
    if (!document.querySelector(`.main_${versionName}VersionContainer`)){
        const mainElement = document.querySelector('.main') as HTMLElement;
        const versionContainerElement = createElement('section', [`main_${versionName}VersionContainer`]);
        const optionsContainerElement = createElement('div', ['main_optionsContainer']);
        const backgroundImage = createElement('img',
                                              ['main_optionsContainer_backgroundImage', classDependsOnVersion(versionName)]
        ) as HTMLImageElement;
        backgroundImage.src = `./src/images/${backgroundImageName}`;
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
    const versionContainerElement = document.querySelector(`.main_${versionName}VersionContainer`) as HTMLElement;
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

const classDependsOnVersion = (version: string): string => {
    if (version === 'basic') {
        return 'basic-version'
    }
    return 'bonus-version';
}

const addEventListenerToElement = (newOptionElement: HTMLElement, selectedOption: string, options: string[], versionName: string) => {
    newOptionElement.addEventListener('click', () => goToStepTwo(selectedOption, options, versionName));
}

const goToStepTwo = (userChoice: string, options: string[], versionName: string) => {
    const computerChoice = randomComputerChoice(options);
    const openVersionContainer = document.querySelector('.open');
    openVersionContainer?.setAttribute("closing", '');

    openVersionContainer?.addEventListener(
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

const randomComputerChoice = (options: string[]) => {
    return options[ Math.floor( Math.random() * options.length ) ];
}