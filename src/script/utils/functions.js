export const clearMainWindow = () => {
    const mainElement = document.querySelector('.main')
    while (mainElement.lastElementChild) {
        mainElement.removeChild(mainElement.lastElementChild)
    }
}