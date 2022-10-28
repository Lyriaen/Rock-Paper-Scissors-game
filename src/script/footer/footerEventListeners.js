import { clearMainWindow } from '../utils/functions.js';
import { createMenu } from './../menu/createMenu.js'

const backToMenuButton = document.getElementById('backToMenuButton');

const backToMenu = () => {
    const footer = document.querySelector('.footer')
    footer.style.display = 'none'
    clearMainWindow()
    createMenu()
}

backToMenuButton.addEventListener('click', backToMenu)
