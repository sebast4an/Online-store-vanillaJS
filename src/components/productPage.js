import { baseURL, loaderAnimate } from '../js/globalFunctions';
import { checkBasketAndAdd } from '../js/basketStorage';

export const productPageComponent = `
  <section class="content__selected-product selected-product">
    <header class="selected-product__header header__bottomline">
      <h2 class="selected-product--name header__bottomline--title">Loading..</h2>
    </header>

    <div class="selected-product__card">
    </div>

  </section>
`;

export const productPageLoader = id => {
  const renderProducts = ({ category, description, id, image, price, title }, where) => {
    const productTitle = document.querySelector('.selected-product--name');
    productTitle.innerText = title;

    const renderDescription = where => {
      const descriptionArray = description.split(';');
      const descriptionFragment = document.createDocumentFragment();

      descriptionArray.forEach(value => {
        const descriptionList = document.createElement('li');
        descriptionList.classList.add('product-card__description-list--item');
        descriptionList.innerHTML = value;
        descriptionFragment.appendChild(descriptionList);
      });

      product.querySelector(where).append(descriptionFragment);
    };

    const product = document.createElement('div');
    product.classList.add('product-card');
    product.innerHTML = `
                <ul class="product-card__info">
                  <li class="product-card__list">
                    <span class="product-card__list--title">Product ID:</span>
                    <span class="product-card__list--value">${id}</span>
                   </li>
                  <li class="product-card__list">
                    <span class="product-card__list--title">Category:</span>
                    <span class="product-card__list--value">${category}</span>
                  </li>
                </ul>
                <img class="product-card__image" src="${image}">
                <h3 class="product-card__price">Price: ${price} $</h3>
                <section class="product-card__description">
                  <header class="product-card__description--header">Product description</header>
                  <ul class="product-card__description-list">                 
                  </ul>
                </section>
                <button class="product-card__add-to-basket">
                  <span>Add to basket</span>
                  <img class="product-card__add-to-basket--img" src="./assets/add-basket.svg">
                </button>
              `;
    renderDescription('.product-card__description-list');
    where.innerHTML = '';
    where.append(product);

    const basketButton = product.querySelector('.product-card__add-to-basket');
    basketButton.addEventListener('click', () => {
      checkBasketAndAdd(id);
      basketButton.innerHTML = `
      <span>Added!</span>
      <img class="product-card__add-to-basket--img" src="./assets/add-basket.svg">
      `;

      setTimeout(() => {
        basketButton.innerHTML = `
        <span>Add to basket</span>
        <img class="product-card__add-to-basket--img" src="./assets/add-basket.svg">
      `;
      }, 500);
    });
  };

  const getProductsFromAPI = async id => {
    const URL = `${baseURL}products/${id}`;

    const allProducts = document.querySelector('.selected-product__card');
    if (!allProducts) return;
    loaderAnimate(allProducts);

    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (!allProducts) return;
      renderProducts(data, allProducts);
    } catch (error) {
      console.log(error);
    }
  };
  getProductsFromAPI(id);
};
