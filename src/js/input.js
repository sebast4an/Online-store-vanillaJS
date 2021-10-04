window.addEventListener('DOMContentLoaded', () => {
  //search input
  const openModalButton = document.querySelector('.modal-search--open');
  const modal = document.querySelector('.modal-search');
  const modalCloseButton = document.querySelector('.modal-search__button-close');
  const modalBehind = document.createElement('div');
  modalBehind.classList.add('modal-search__behind');

  openModalButton.addEventListener('click', () => {
    modal.after(modalBehind);
    modalCloseButton.style.display = 'block';
    modal.showModal();

    modalCloseButton.addEventListener('click', () => {
      modal.close();
    });
  });

  //I adding event listener for close because
  //user posibli close modal by type esc button on keyboard
  modal.addEventListener('close', () => {
    modalCloseButton.style.display = '';
    modalBehind.remove();
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
