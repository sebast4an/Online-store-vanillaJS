window.addEventListener('DOMContentLoaded', () => {
  //search input
  const search = document.querySelector('.search');
  const modal = document.querySelector('.search__dialog');

  search.addEventListener('click', () => {
    modal.showModal();
  });

  console.log(search);

  //newsletter input
  const newsletterInput = document.querySelector('#newsletter__input');
  const button = document.querySelector('.newsletter .form .input__button');

  newsletterInput.addEventListener('keypress', () => {
    button.classList.add('input__button--active');
  });

  newsletterInput.addEventListener('keyup', () => {
    if (newsletterInput.value.length == 0) button.classList.remove('input__button--active');
  });
});
