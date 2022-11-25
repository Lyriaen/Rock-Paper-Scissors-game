import { removeResultBoard } from '../utils/functions.js';

const backToMenuButton = document.getElementById('backToMenuButton');

const backToMenu = () => {
    hideFooter();
    hideChoiceBoard();
    removeResultBoard()
    showMainMenu();
}

const hideFooter = () => {
    document.querySelector('.footer').classList.add('hide')
}

const hideChoiceBoard = () => {
    const openVersionContainer = document.querySelector('.open')
    openVersionContainer?.setAttribute("closing", "");
    openVersionContainer?.addEventListener(
        "animationend",
        () => {
            openVersionContainer.removeAttribute("closing");
            openVersionContainer.classList.remove('open')
            openVersionContainer.classList.add('hide')
        },
        { once: true }
    );
}

const showMainMenu = () => {
    document.querySelector('.main_menu').classList.remove('hide')
}

backToMenuButton.addEventListener('click', backToMenu)
