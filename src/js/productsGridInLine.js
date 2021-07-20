(() => {
  const product = document.querySelector('.product');
  let isactiveScroll = false;
  let positionStart;
  let scrollLeft;

  product.addEventListener('mousedown', (event) => {
    event.preventDefault();
    isactiveScroll = true;

    product.classList.add('active');
    positionStart = event.pageX - product.offsetLeft;
    scrollLeft = product.scrollLeft;
  });

  product.addEventListener('mouseup', (event) => {
    event.preventDefault();
    isactiveScroll = false;
  });

  product.addEventListener('mousemove', (event) => {
    event.preventDefault();
    if (isactiveScroll !== true) return;

    const x = event.pageX - product.offsetLeft;
    const walk = x - positionStart;
    product.scrollLeft = scrollLeft - walk;
  });
})();
