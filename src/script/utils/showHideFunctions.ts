export const getStartingPoints = () => {
    const pointsElement = document.querySelector('.header_score-container_score') as HTMLElement;
    pointsElement.textContent = localStorage.getItem( 'points' ) ? localStorage.getItem( 'points' ) : '0';
}

export const showLogo = (logo: HTMLElement) => {
    logo.classList.remove('hide');
}

export const showChoiceBoard = (versionName: string) => {
    const versionContainerElement = document.querySelector( `.main_${ versionName }VersionContainer` );
    versionContainerElement?.setAttribute( 'open' , '' );
    versionContainerElement?.classList.remove( 'hide' );
}

export const showFooter = () => {
    document.querySelector('.footer')?.classList.remove('hide');
}

export const showMainMenu = () => {
    document.querySelector('.main_menu')?.classList.remove('hide');
}

export const hideMainMenu = () => {
    document.querySelector('.main_menu')?.classList.add('hide');
}
export const hideBasicLogo = () => {
    document.querySelector('.header_logo-basic')?.classList.add('hide');
}

export const hideBonusLogo = () => {
    document.querySelector('.header_logo-bonus')?.classList.add('hide');
}
export const hideFooter = () => {
    document.querySelector('.footer')?.classList.add('hide');
}

export const hideChoiceBoard = () => {
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