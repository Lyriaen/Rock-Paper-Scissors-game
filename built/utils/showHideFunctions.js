export const getStartingPoints = () => {
    const pointsElement = document.querySelector('.header_score-container_score');
    pointsElement.textContent = localStorage.getItem('points') ? localStorage.getItem('points') : '0';
};
export const showLogo = (logo) => {
    logo.classList.remove('hide');
};
export const showChoiceBoard = (versionName) => {
    const versionContainerElement = document.querySelector(`.main_${versionName}VersionContainer`);
    versionContainerElement === null || versionContainerElement === void 0 ? void 0 : versionContainerElement.setAttribute('open', '');
    versionContainerElement === null || versionContainerElement === void 0 ? void 0 : versionContainerElement.classList.remove('hide');
};
export const showFooter = () => {
    var _a;
    (_a = document.querySelector('.footer')) === null || _a === void 0 ? void 0 : _a.classList.remove('hide');
};
export const showMainMenu = () => {
    var _a;
    (_a = document.querySelector('.main_menu')) === null || _a === void 0 ? void 0 : _a.classList.remove('hide');
};
export const hideMainMenu = () => {
    var _a;
    (_a = document.querySelector('.main_menu')) === null || _a === void 0 ? void 0 : _a.classList.add('hide');
};
export const hideBasicLogo = () => {
    var _a;
    (_a = document.querySelector('.header_logo-basic')) === null || _a === void 0 ? void 0 : _a.classList.add('hide');
};
export const hideBonusLogo = () => {
    var _a;
    (_a = document.querySelector('.header_logo-bonus')) === null || _a === void 0 ? void 0 : _a.classList.add('hide');
};
export const hideFooter = () => {
    var _a;
    (_a = document.querySelector('.footer')) === null || _a === void 0 ? void 0 : _a.classList.add('hide');
};
export const hideChoiceBoard = () => {
    const openVersionContainer = document.querySelector('.open');
    openVersionContainer === null || openVersionContainer === void 0 ? void 0 : openVersionContainer.setAttribute('closing', '');
    openVersionContainer === null || openVersionContainer === void 0 ? void 0 : openVersionContainer.addEventListener('animationend', () => {
        openVersionContainer.removeAttribute('closing');
        openVersionContainer.classList.remove('open');
        openVersionContainer.classList.add('hide');
    }, { once: true });
};
