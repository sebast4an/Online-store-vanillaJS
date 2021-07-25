const renderOccastion = (data, discountInPercent) => {
  const container = document.querySelector('.occasion');

  const occasionProduct = document.createElement('section');
  occasionProduct.classList.add('occasion__box');
  occasionProduct.innerHTML = `
            <header class="occasion__header">
                <h2 class="occasion__header--title">Occasion of the day</h2>
                <p class="occasion__header-saving">
                    ${discountInPercent} %
                </p>
            </header>
            <img class="occasion__img" src="${data.image}">
            <section class="occasion__product">
                <h3 class="occasion__product--name">
                ${data.title}
                </h3>
                <p class="occasion__product--previous-price">
                ${data.price} $
                </p>
                <p class="occasion__product--promo-price">
                ${data.price - discountInPercent} $
                </p>
            </section>
            <section class="occasion__count">

            </section>
            `;
  container.append(occasionProduct);
};

const getSelectedProductFromStoreAPI = async (productId, discountInPercent) => {
  const URL = `https://fakestoreapi.com/products/${productId}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    renderOccastion(data, discountInPercent);
  } catch (error) {
    console.log(error);
  }
};

console.log(getSelectedProductFromStoreAPI(12, 5));
