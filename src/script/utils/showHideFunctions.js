export const getStartingPoints = () => {
    const pointsElement = document.querySelector('.header_score-container_score');
    pointsElement.textContent = localStorage.getItem( 'points' ) ? localStorage.getItem( 'points' ) : 0;
}

export const showLogo = (logo) => {
    logo.classList.remove('hide');
}

export const showChoiceBoard = (versionName) => {
    const versionContainerElement = document.querySelector( `.main_${ versionName }VersionContainer` );
    versionContainerElement.setAttribute( 'open' , '' );
    versionContainerElement.classList.remove( 'hide' );
}

export const showFooter = () => {
    console.log('showFooter')
    document.querySelector('.footer').classList.remove('hide');
    console.log(document.querySelector('.footer'))
}

export const showMainMenu = () => {
    console.log('showMainMenu')
    document.querySelector('.main_menu').classList.remove('hide');
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
export const hideFooter = () => {
    document.querySelector('.footer').classList.add('hide');
}

export const hideChoiceBoard = () => {
    console.log('hideChoiceBoard')
    const openVersionContainer = document.querySelector('.open');
    openVersionContainer?.setAttribute('closing', '');
    openVersionContainer?.addEventListener(
        'animationend',
        () => {
            openVersionContainer.removeAttribute('closing');
            openVersionContainer.classList.remove('open');
            openVersionContainer.classList.add('hide');
        },
        { once: true }
    );
}