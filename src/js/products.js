const randomNumber = (min, max) => Math.floor(Math.random() * (max-min+1) + min);

const renderRandomProducts = (data, where, howManyToAdd) => {
    const fragment = document.createDocumentFragment();

    const randomProduts = howManyToAdd => {
        const productsArray = [];

        

        randomNumber(0, data.length);
    }


    data.forEach(({id, title, price, image}) => {
        const product = document.createElement("a");
        product.classList.add(`product`)
        product.classList.add(`product--id${id}`);
        product.innerHTML = `
                <figure class="product__border">
                    <img class="product__img" src="${image}">
                </figure>
                <p class="product__name">${title}</p>
                <p class="product__price">${price}</p>
        `;
        fragment.appendChild(product);
    });

    where.appendChild(fragment);
};




export {renderRandomProducts};