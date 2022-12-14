export const createOptionElement = (option, className, position) => {
    const iconElement = createElement('img', ['option-icon']);
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
};
export const createChoiceBoard = (option, user) => {
    const choiceBoardElement = createElement('section', ['choiceBoard']);
    const boardHeader = createElement('h2', ['boardHeader'], user ? 'you picked' : 'the house picked');
    const optionElementContainer = createElement('div', ['optionElementContainer']);
    const optionElement = createOptionElement(option, 'selectedOption');
    choiceBoardElement.append(boardHeader);
    choiceBoardElement.append(optionElementContainer);
    const userOrComputerClass = user ? 'user-option-template' : 'computer-option-template';
    const optionTemplateElement = createElement('div', ['option-template', userOrComputerClass]);
    if (!user) {
        optionElement.classList.add('computerChoice');
        choiceBoardElement.classList.add('computerChoiceBoard');
    }
    optionElementContainer.append(optionTemplateElement);
    optionElementContainer.append(optionElement);
    return choiceBoardElement;
};
export const createElement = (tag, classesArray, textContent, id) => {
    const newElement = document.createElement(tag);
    classesArray === null || classesArray === void 0 ? void 0 : classesArray.forEach(className => {
        newElement.classList.add(className);
    });
    if (textContent) {
        newElement.textContent = textContent;
    }
    if (id) {
        newElement.id = id;
    }
    return newElement;
};
export const removeResultBoard = () => {
    var _a;
    const boardsContainer = document.querySelector('.boards-container');
    boardsContainer && ((_a = document.querySelector('main')) === null || _a === void 0 ? void 0 : _a.removeChild(boardsContainer));
};
