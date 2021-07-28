import { randomContent, loaderAnimate } from './globalFunctions';

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
                    <h2 class="product__name">
                      ${data[key]['title']}
                    </h2>
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
    product.addEventListener('click', e => {
      e.preventDefault();
      console.log(`click me? I'am a ${data[key]['id']}`);
      window.history.pushState({ page: 'another' }, `one`, `${data[key]['id']}`);
      renderTest();
    });
    fragment.appendChild(product);
  };
  numbersOfProducts.forEach(key => appendProducts(data, key));
  where.innerHTML = ``;
  where.appendChild(fragment);
};

const getDataFromStoreAPI = async (question, where, howMany) => {
  const URL = `https://fakestoreapi.com/${question}`;
  loaderAnimate(where);

  try {
    const response = await fetch(URL);
    const data = await response.json();
    renderRandomProducts(data, where, howMany);
  } catch (error) {
    where.innerText = 'Error loading data. Please reload page.';
  }
};

const renderTest = () => {
  const content = document.querySelector('.content');
  content.innerHTML = '<h1>Works?</h1>';
};

export { getDataFromStoreAPI };
