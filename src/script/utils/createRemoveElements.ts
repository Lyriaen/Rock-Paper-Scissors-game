import { OptionObject } from "./versions";

export const createOptionElement = (option: string, className: string, position?: OptionObject) => {
    const iconElement = createElement('img', ['option-icon']) as HTMLImageElement;
    iconElement.src = `./src/images/icon-${option}.svg`;
    const iconContainerElement = createElement('div', ['iconContainer']);
    iconContainerElement.append(iconElement);
    const optionElement = createElement('div', [`option-${option}`, 'option', className]);
    if (position) {
        optionElement.style.top = `${position.top}%`;
        optionElement.style.left = `${position.left}%`;
    }
    optionElement.append(iconContainerElement);
    return optionElement;
}

export const createChoiceBoard = (option: string, user?: 'user') => {
    const choiceBoardElement = createElement('section', ['choiceBoard']);
    const boardHeader = createElement('h2',
        ['boardHeader'],
        user ? 'you picked' : 'the house picked'
    );
    const optionElementContainer = createElement('div', ['optionElementContainer']);
    const optionElement = createOptionElement(option, 'selectedOption');
    choiceBoardElement.append(boardHeader);
    choiceBoardElement.append(optionElementContainer);
    const userOrComputerClass = user ? 'user-option-template' : 'computer-option-template';
    const optionTemplateElement = createElement('div',
        ['option-template', userOrComputerClass]
    );
    if (!user) {
        optionElement.classList.add('computerChoice');
        choiceBoardElement.classList.add('computerChoiceBoard');
    }
    optionElementContainer.append(optionTemplateElement);
    optionElementContainer.append(optionElement);
    return choiceBoardElement;
}

export const createElement = (tag: string, classesArray: string[], textContent?: string, id?: string) => {
    const newElement = document.createElement(tag);
    classesArray?.forEach(className => {
        newElement.classList.add(className);
    });
    if (textContent) {
        newElement.textContent = textContent;
    }
    if (id) {
        newElement.id = id;
    }
    return newElement;
}

export const removeResultBoard = () => {
    const boardsContainer = document.querySelector( '.boards-container' );
    boardsContainer && document.querySelector( 'main' )?.removeChild( boardsContainer );
}