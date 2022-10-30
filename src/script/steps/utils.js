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

export const createChoiseBoard = (option, user) => {
    const choiseBoardElement = document.createElement('section')
    choiseBoardElement.classList.add('choiseBoard')
    const boardHeader = document.createElement('h2')
    boardHeader.textContent = user === 'user' ? 'you picked' : 'the house picked'

    const optionElement = option ? createOptionElementWithClass(option) : createOptionTemplateElement()

    choiseBoardElement.append(boardHeader)
    choiseBoardElement.append(optionElement)

    return choiseBoardElement
}
const createOptionElementWithClass = (option) => {
    const optionElement = createOptionElement(option)
    optionElement.classList.add('selectedOption')
    return optionElement

}

const createOptionTemplateElement = () => {
    const optionTemplateElement = document.createElement('div')
    optionTemplateElement.classList.add('option-template')

    return optionTemplateElement
}