export const createOptionElement = (option, position) => {
    const optionElement = document.createElement('div')
    optionElement.classList.add(`option-${option}`, 'option')
    if (position) {
        optionElement.style.top = position?.top + '%'
        optionElement.style.left = position?.left + '%'
    }

    const iconContainerElement = document.createElement('div')
    iconContainerElement.classList.add('iconContainer')
    optionElement.append(iconContainerElement)

    const iconElement = document.createElement('img')
    iconElement.src = `./src/images/icon-${option}.svg`
    iconElement.classList.add('option-icon')
    iconContainerElement.append(iconElement)

    return optionElement
}

export const createChoiceBoard = (option, user) => {
    const choiceBoardElement = document.createElement('section')
    choiceBoardElement.classList.add('choiceBoard')
    if (!user) {
        choiceBoardElement.classList.add('computerChoiceBoard')
    }

    const boardHeader = document.createElement('h2')
    boardHeader.classList.add('boardHeader')
    boardHeader.textContent = user === 'user' ? 'you picked' : 'the house picked'

    const optionElementContainer = document.createElement('div')
    optionElementContainer.classList.add('optionElementContainer')
    const optionElement = createOptionElementWithClass(option)

    choiceBoardElement.append(boardHeader)
    choiceBoardElement.append(optionElementContainer)
    if (user) {
        const userChoiceTemplateElement = createOptionTemplateElement('user-option-template')
        optionElementContainer.append(userChoiceTemplateElement)
    }
    if (!user) {
        const computerChoiceTemplateElement = createOptionTemplateElement('computer-option-template')
        optionElementContainer.append(computerChoiceTemplateElement)
        optionElement.classList.add('computerChoice')
    }
    optionElementContainer.append(optionElement)

    return choiceBoardElement
}
const createOptionElementWithClass = (option) => {
    const optionElement = createOptionElement(option)
    optionElement.classList.add('selectedOption')
    return optionElement

}

const createOptionTemplateElement = (userOrComputerClass) => {
    const optionTemplateElement = document.createElement('div')
    optionTemplateElement.classList.add('option-template', userOrComputerClass)
    return optionTemplateElement
}