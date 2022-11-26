export const getStartingPoints = () => {
    const pointsElement = document.querySelector('.header_score-container_score')
    const startingPoints = localStorage.getItem('points') ? localStorage.getItem('points') : 0
    pointsElement.textContent = startingPoints
}

export const createElement = (tag, classesArray, textContent, id) => {
    const newElement = document.createElement(tag)
    classesArray?.forEach(className => {
        newElement.classList.add(className)
    })
    if (textContent) {
        newElement.textContent = textContent
    }
    if (id) {
        newElement.id = id
    }
    return newElement
}

export const removeResultBoard = () => {
    const boardsContainer = document.querySelector( '.boards-container' )
    boardsContainer && document.querySelector( 'main' ).removeChild( boardsContainer )
}

export const showChoiceBoard = (versionName) => {
    const versionContainerElement = document.querySelector( `.main_${ versionName }VersionContainer ` )
    versionContainerElement.setAttribute( "open" , "" );
    versionContainerElement.classList.remove( 'hide' );
}