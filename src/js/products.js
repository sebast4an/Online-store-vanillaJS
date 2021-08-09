import { baseURL, randomContent, loaderAnimate, addGrabAndScroll } from './globalFunctions';

const renderRandomProducts = (data, where, howManyToAdd) => {
  const fragment = document.createDocumentFragment();
  const numbersOfProducts = randomContent(howManyToAdd, data.length - 1);

  const appendProducts = (data, key) => {
    const product = document.createElement('section');
    product.classList.add(`product__element`);
    product.classList.add(`product__element--id${data[key]['id']}`);
    product.innerHTML = `
                  <figure class="product__border">
                    <img class="product__img" src="${data[key]['image']}">
                  </figure>
                  <header class="product__header">
                    <h3 class="product__name">
                      ${data[key]['title']}
                    </h3>
                    <section class="product__price price">
                        <p class="price__price">
                          ${data[key]['price']} $
                        </p>
                        <button type="button" class="price__button">
                            <span>Add</span> 
                            <img class="price__button--img" src="assets/add-basket.svg">
                        </button>
                    </section>
                  </header>
        `;
    fragment.appendChild(product);
  };
  numbersOfProducts.forEach(key => appendProducts(data, key));
  where.innerHTML = ``;
  where.appendChild(fragment);
};

const getDataFromStoreAPI = async (question, place, howMany) => {
  const URL = baseURL + question;
  const where = document.querySelector(place);
  if (!where) return;
  loaderAnimate(where);

  try {
    const response = await fetch(URL);
    const data = await response.json();

    renderRandomProducts(data, where, howMany);
    addGrabAndScroll('.product');
  } catch (error) {
    where.innerText = 'Error loading data. Please reload page.';
  }
};

export { getDataFromStoreAPI };
