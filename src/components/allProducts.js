import { baseURL } from '../js/globalFunctions';

export const allProductsComponent = `
  <section class="content__all-products all-products">
    <header class="all-products__header header__bottomline">
      <h1 class="header__bottomline--title">Electronics</h1>
    </header>

    <article class="all-products__products product"></article>
  </section>
`;

export const allProductsLoader = () => {
  const renderProducts = data => {
    const fragment = document.createDocumentFragment();

    const appendProducts = ({ id, title, image, price }) => {
      const product = document.createElement('section');
      product.classList.add(`product__element`);
      product.classList.add(`product__element-id${id}`);
      product.innerHTML = `
                  <figure class="product__border">
                    <img class="product__img" src="${image}">
                  </figure>
                  <header class="product__header">
                    <h2 class="product__name">
                      ${title}
                    </h2>
                    <section class="product__price price">
                        <p class="price__price">
                          ${price} $
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
    if (!data) console.log(`what's wrong?`);
    else {
      data.forEach(value => appendProducts(value));
    }

    const allProducts = document.querySelector('.all-products__products');
    allProducts.innerHTML = '';
    allProducts.appendChild(fragment);
  };

  const getAllProductsFromAPI = async question => {
    const URL = baseURL + question;

    try {
      const response = await fetch(URL);
      const data = await response.json();
      renderProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  getAllProductsFromAPI('products');
};
