export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const randomContent = (howMany, maxNumber) => {
  const uniquesNumbersNoDuplicates = new Set();

  for (let i = 0; uniquesNumbersNoDuplicates.size < howMany; i++) {
    uniquesNumbersNoDuplicates.add(randomNumber(0, maxNumber));
  }
  return uniquesNumbersNoDuplicates;
};

export const loaderAnimate = where => {
  if (!where) return;

  where.innerHTML = `
        <section class="loading">
            <div class="loading__animate">
            </div>
            <p class="loading__info">
                Loading data. Please wait.
            </p>
        </section>
    `;
};

export const addGrabAndScroll = where => {
  const place = document.querySelector(where);
  let isScrollActive = false;
  let positionStart;
  let scrollLeft;

  place.addEventListener('mousedown', event => {
    event.preventDefault();
    isScrollActive = true;

    positionStart = event.pageX - place.offsetLeft;
    scrollLeft = place.scrollLeft;
  });

  place.addEventListener('mouseup', event => {
    event.preventDefault();
    isScrollActive = false;
  });

  place.addEventListener('mousemove', event => {
    event.preventDefault();
    if (isScrollActive !== true) return;

    const current = event.pageX - place.offsetLeft;
    const walk = current - positionStart;
    place.scrollLeft = scrollLeft - walk;
  });
};
