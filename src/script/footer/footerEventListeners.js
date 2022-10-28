const backToMenuButton = document.getElementById('backToMenuButton');

const backToMenu = () => {
    const footer = document.querySelector('.footer')
    footer.style.display = 'none'
}

backToMenuButton.addEventListener('click', backToMenu)
