import { loaderAnimate } from './globalFunctions';

const containerOccasion = document.querySelector('.occasion');

const renderOccastion = (data, discountInPercent) => {
  const occasionProduct = document.createElement('section');
  occasionProduct.classList.add('occasion__product');
  occasionProduct.innerHTML = `
            <header class="occasion__header">
                <h2 class="occasion__header--title">Occasion of the day</h2>
                <a href="/product">TEST</a>
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
  containerOccasion.innerHTML = '';
  containerOccasion.append(occasionProduct);
};

const getSelectedProductFromStoreAPI = async (productId, discountInPercent) => {
  const URL = `https://fakestoreapi.com/products/${productId}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    loaderAnimate(containerOccasion);
    renderOccastion(data, discountInPercent);
  } catch (error) {
    console.log(error);
  }
};

console.log(getSelectedProductFromStoreAPI(12, 5));
