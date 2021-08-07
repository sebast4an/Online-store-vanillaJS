window.addEventListener('DOMContentLoaded', () => {
  //search input
  const openModalButton = document.querySelector('.modal-search--open');
  const modal = document.querySelector('.modal-search');
  const modalBehind = document.createElement('div');
  modalBehind.classList.add('modal-search__behind');

  openModalButton.addEventListener('click', () => {
    modal.after(modalBehind);
    modal.showModal();
  });

  //newsletter email input
  const newsletterInput = document.querySelector('#newsletter__input');
  const button = document.querySelector('.newsletter .form .input__button');

  newsletterInput.addEventListener('keypress', () => {
    button.classList.add('input__button--active');
  });

  newsletterInput.addEventListener('keyup', () => {
    if (newsletterInput.value.length == 0) button.classList.remove('input__button--active');
  });
});
