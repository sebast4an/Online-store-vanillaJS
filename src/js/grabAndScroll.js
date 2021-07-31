const addGrabAndScroll = where => {
  let isScrollActive = false;
  let positionStart;
  let scrollLeft;

  where.addEventListener('mousedown', event => {
    event.preventDefault();
    isScrollActive = true;

    positionStart = event.pageX - where.offsetLeft;
    scrollLeft = where.scrollLeft;
  });

  where.addEventListener('mouseup', event => {
    event.preventDefault();
    isScrollActive = false;
  });

  where.addEventListener('mousemove', event => {
    event.preventDefault();
    if (isScrollActive !== true) return;

    const current = event.pageX - where.offsetLeft;
    const walk = current - positionStart;
    where.scrollLeft = scrollLeft - walk;
  });
};

(() => {
  const product = document.querySelector('.product');
  if (!product) return;
  else addGrabAndScroll(product);

  const post = document.querySelector('.post');
  if (!post) return;
  else addGrabAndScroll(post);
})();
