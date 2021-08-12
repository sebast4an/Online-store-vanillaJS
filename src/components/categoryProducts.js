import { baseURL, loaderAnimate } from '../js/globalFunctions';

export const categoryProductsComponent = `
  <section class="content__all-products all-products">
    <header class="all-products__header header__bottomline">
      <h2 class="all-products__header--name header__bottomline--title">Category name</h2>
    </header>

    <article class="all-products__products product"></article>
  </section>
`;

export const categoryProductsLoader = question => {
  const renderProducts = (data, where) => {
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
                    <h3 class="product__name">
                      ${title}
                    </h3>
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
    if (!data) return;
    else data.forEach(value => appendProducts(value));
    where.innerHTML = '';
    where.appendChild(fragment);
  };

  const getProductsFromAPI = async question => {
    const URL = `${baseURL}products/category/${question}`;
    const categoryName = document.querySelector('.all-products__header--name');
    categoryName.innerText = decodeURI(question);

    const allProducts = document.querySelector('.all-products__products');
    if (!allProducts) return;
    loaderAnimate(allProducts);

    try {
      const response = await fetch(URL);
      const data = await response.json();
      renderProducts(data, allProducts);
    } catch (error) {
      console.log(error);
    }
  };
  getProductsFromAPI(question);
};
