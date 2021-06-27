const randomNumber = (min, max) => Math.floor(Math.random() * (max-min+1) + min);

const renderRandomProducts = (data, where, howManyToAdd) => {
    const fragment = document.createDocumentFragment();
    const numbersOfProducts = new Set();

    const randomProduts = howManyToAdd => {
        for (let i=0; numbersOfProducts.size<howManyToAdd; i++) {
            numbersOfProducts.add(randomNumber(0, data.length));
        };
    }; randomProduts(howManyToAdd);

    const appendProducts = (data, key) => {
        const product = document.createElement("a");
        product.classList.add(`product`)
        product.classList.add(`product--id${data[key]["id"]}`);
        product.innerHTML = `
                <figure class="product__border">
                    <img class="product__img" src="${data[key]["image"]}">
                </figure>
                <p class="product__name">${data[key]["title"]}</p>
                <p class="product__price">${data[key]["price"]}</p>
        `;
        fragment.appendChild(product);
    }; 

    numbersOfProducts.forEach(key => appendProducts(data, key));
    where.appendChild(fragment);
};


export {renderRandomProducts};