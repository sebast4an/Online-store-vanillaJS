export const allProductsComponent = `
  <section class="content__all-products all-products">
    <header class="all-products__header header__bottomline">
      <h1 class="header__bottomline--title">Electronics</h1>
    </header>

    <article class="all-products__products product"></article>
  </section>
`;

export const allProductsLoader = () => {
  console.log('work!');
  // const product = document.createElement('section');
  // product.classList.add(`product__element`);
  // product.classList.add(`product__element--id${data[key]['id']}`);
  // product.innerHTML = `
  //                   <figure class="product__border">
  //                     <img class="product__img" src="${data[key]['image']}">
  //                   </figure>
  //                   <header class="product__header">
  //                     <h2 class="product__name">
  //                       ${data[key]['title']}
  //                     </h2>
  //                     <section class="product__price price">
  //                         <p class="price__price">
  //                           ${data[key]['price']} $
  //                         </p>
  //                         <button type="button" class="price__button">
  //                             <span>Add</span>
  //                             <img class="price__button--img" src="assets/add-basket.svg">
  //                         </button>
  //                     </section>
  //                   </header>
  //         `;
};
