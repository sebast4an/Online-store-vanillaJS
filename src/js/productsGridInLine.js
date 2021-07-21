(() => {
  const product = document.querySelector('.product');
  let isScrollActive = false;
  let positionStart;
  let scrollLeft;

  product.addEventListener('mousedown', (event) => {
    event.preventDefault();
    isScrollActive = true;

    product.classList.add('active');
    positionStart = event.pageX - product.offsetLeft;
    scrollLeft = product.scrollLeft;
  });

  product.addEventListener('mouseup', (event) => {
    event.preventDefault();
    isScrollActive = false;
  });

  product.addEventListener('mousemove', (event) => {
    event.preventDefault();
    if (isScrollActive !== true) return;

    const current = event.pageX - product.offsetLeft;
    const walk = current - positionStart;
    product.scrollLeft = scrollLeft - walk;
  });
})();
