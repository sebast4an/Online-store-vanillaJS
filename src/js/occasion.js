import { loaderAnimate } from './globalFunctions';

const renderOccastion = (data, where, discountInPercent) => {
  const occasionProduct = document.createElement('section');
  occasionProduct.classList.add('occasion__product');
  occasionProduct.innerHTML = `
            <header class="occasion__header">
                <h2 class="occasion__header--title">Occasion of the day</h2>
                <a class="occasion__header--title-link" href="/test">TEST</a>
            </header>
            <img class="occasion__img" src="${data.image}">
            <section class="occasion__details">
                <h3 class="occasion__details--name">
                ${data.title}
                </h3>
                <p class="occasion__details--previous-price">
                ${data.price} $  
                </p>
                <p class="occasion__details--promo-price">
                ${data.price - discountInPercent} $
                </p>
            </section>
            <section class="occasion__count">
              <span>Next occasion in:</span> 
              <span class="occasion__count--timer">12</span> :
              <span class="occasion__count--timer">12</span> :
              <span class="occasion__count--timer">12</span>
            </section>
            `;
  where.innerHTML = '';
  where.append(occasionProduct);
};

const getSelectedProductFromStoreAPI = async (productId, discountInPercent) => {
  const URL = `https://fakestoreapi.com/products/${productId}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    const containerOccasion = document.querySelector('.occasion');
    loaderAnimate(containerOccasion);
    renderOccastion(data, containerOccasion, discountInPercent);
  } catch (error) {
    console.log(error);
  }
};
getSelectedProductFromStoreAPI(12, 5);

export { getSelectedProductFromStoreAPI };
