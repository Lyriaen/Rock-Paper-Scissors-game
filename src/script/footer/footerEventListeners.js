import { clearMainWindow } from '../utils/functions.js';
// import { createMenu } from './../menu/createMenu.js'

const backToMenuButton = document.getElementById('backToMenuButton');

const backToMenu = () => {
    const footer = document.querySelector('.footer')
    footer.classList.add('hide')
    // clearMainWindow()
    const mainMenuContainer = document.querySelector('.main_menu')
    mainMenuContainer.classList.remove('hide')
    // createMenu()
}

backToMenuButton.addEventListener('click', backToMenu)
