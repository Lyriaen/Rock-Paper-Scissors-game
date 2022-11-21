import { clearMainWindow } from '../utils/functions.js';
// import { createMenu } from './../menu/createMenu.js'

const backToMenuButton = document.getElementById('backToMenuButton');

const backToMenu = () => {
    const footer = document.querySelector('.footer')
    footer.classList.add('hide')
    // clearMainWindow()
    const mainMenuContainer = document.querySelector('.main_menu')
    mainMenuContainer.classList.remove('hide')
    const openVersionContainer = document.querySelector('.open')
    console.log(openVersionContainer)
    openVersionContainer.setAttribute("closing", "");

    openVersionContainer.addEventListener(
        "animationend",
        () => {
            openVersionContainer.removeAttribute("closing");
            openVersionContainer.classList.remove('open')
            openVersionContainer.classList.add('hide')
        },
        { once: true }
    );
    // createMenu()
}

backToMenuButton.addEventListener('click', backToMenu)
