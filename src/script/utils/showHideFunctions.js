export const getStartingPoints = () => {
    const pointsElement = document.querySelector('.header_score-container_score');
    pointsElement.textContent = localStorage.getItem( 'points' ) ? localStorage.getItem( 'points' ) : 0;
}

export const showChoiceBoard = (versionName) => {
    const versionContainerElement = document.querySelector( `.main_${ versionName }VersionContainer` );
    versionContainerElement.setAttribute( 'open' , '' );
    versionContainerElement.classList.remove( 'hide' );
}

export const showFooter = () => {
    document.querySelector('.footer').classList.remove('hide');
}

export const hideMainMenu = () => {
    document.querySelector('.main_menu').classList.add('hide');
}

export const hideBasicLogo = () => {
    document.querySelector('.header_logo-basic').classList.add('hide');
}
export const hideBonusLogo = () => {
    document.querySelector('.header_logo-bonus').classList.add('hide');
}

export const showLogo = (logo) => {
    logo.classList.remove('hide')
}