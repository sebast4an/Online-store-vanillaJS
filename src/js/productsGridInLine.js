(() => {
  const product = document.querySelector('.product');
  let activeScroll = false;
  let positionStart;
  let lastPosition;

  product.addEventListener('mousedown', (event) => {
    event.preventDefault();
    activeScroll = true;
    positionStart = event.pageX - product.offsetLeft;
    lastPosition = product.scrollLeft;
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
