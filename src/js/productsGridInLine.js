(() => {
  const product = document.querySelector('.product');
  let activeScroll = false;
  let positionStart;

  product.addEventListener('mousedown', (event) => {
    event.preventDefault();
    activeScroll = true;

    positionStart = event.pageX - product.offsetLeft;
    event.pageX - product.offsetLeft;
  });

  product.addEventListener('mouseup', (event) => {
    event.preventDefault();
    activeScroll = false;
  });

  product.addEventListener('mousemove', (event) => {
    event.preventDefault();
    if (activeScroll !== true) return;

    let position = event.pageX - product.offsetLeft;
    let curr = positionStart - position;
    product.scrollLeft = curr;
  });
})();
