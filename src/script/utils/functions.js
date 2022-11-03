export const clearMainWindow = () => {
    const mainElement = document.querySelector('.main')
    while (mainElement.lastElementChild) {
        mainElement.removeChild(mainElement.lastElementChild)
    }
}

export const getStartingPoints = () => {
    const pointsElement = document.querySelector('.header_score-container_score')
    const startingPoints = localStorage.getItem('points') ? localStorage.getItem('points') : 0
    pointsElement.textContent = startingPoints
}