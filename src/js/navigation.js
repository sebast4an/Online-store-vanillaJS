window.addEventListener('DOMContentLoaded', () => {
  const animateHamburgerButton = () => {
    const hamburgerIcon = document.querySelector('.hamburger__icon');
    hamburgerIcon.classList.toggle('hamburger__icon--animate');

    const hamburgerList = document.querySelector('.navigation__list');
    hamburgerList.style.animation = 'hamburgerListAnimation2 .3s ease-in-out reverse both';

    setTimeout(() => {
      hamburgerList.style.animation = '';
      hamburgerList.classList.toggle('list--active');
    }, 300);

    const hamburgerName = document.querySelector('.hamburger__title');
    hamburgerName.style.animation = 'hamburerTitleAnimate3 .2s ease-in-out reverse both';

    setTimeout(() => {
      hamburgerName.style.animation = '';
      hamburgerName.classList.toggle('hamburger__title--animation');
      if (hamburgerName.innerText == 'Menu') hamburgerName.innerText = 'Hide menu';
      else hamburgerName.innerText = 'Menu';
    }, 500);
  };
  const button = document.querySelector('.navigation__hamburger');
  button.addEventListener(`click`, animateHamburgerButton);
});
