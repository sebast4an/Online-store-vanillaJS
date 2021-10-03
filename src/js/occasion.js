import { baseURL, loaderAnimate } from './globalFunctions';

const renderOccasion = (data, where, discountInPercent) => {
  const occasionProduct = document.createElement('section');
  occasionProduct.classList.add('occasion__product');
  occasionProduct.innerHTML = `
            <header class="occasion__header">
                <h2 class="occasion__title">Occasion of the day</h2>
            </header>
            <img class="occasion__img" src="${data.image}">
            <section class="occasion__details">
                <h3 class="occasion__name">
                ${data.title}
                </h3>
                <p class="occasion__previous-price">
                ${data.price} $  
                </p>
                <p class="occasion__promo-price">
                ${data.price - discountInPercent} $
                </p>
            </section>
            <section class="occasion__count">
              <span class="occasion__count-title">Next occasion in:</span>
              <div class="occasion__timer"> 
                <span class="occasion__timer-element">12</span> :
                <span class="occasion__timer-element">12</span> :
                <span class="occasion__timer-element">12</span>
              </div>
            </section>
            `;
  where.innerHTML = '';
  where.append(occasionProduct);
};

const getOccasionFromAPI = async (productId, discountInPercent) => {
  const URL = `${baseURL}products/${productId}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    const containerOccasion = document.querySelector('.occasion');
    if (!containerOccasion) return;
    loaderAnimate(containerOccasion);
    renderOccasion(data, containerOccasion, discountInPercent);
  } catch (error) {
    console.log(error);
  }
};

export { getOccasionFromAPI };
