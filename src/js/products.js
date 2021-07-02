const randomNumber = (min, max) => Math.floor(Math.random() * (max-min+1) + min);

const renderRandomProducts = (data, where, howManyToAdd) => {
    const fragment = document.createDocumentFragment();
    const numbersOfProducts = new Set();

    const randomProduts = howManyToAdd => {
        for (let i=0; numbersOfProducts.size<howManyToAdd; i++) {
            const maximumNumber = data.length-1;   
            numbersOfProducts.add(randomNumber(0, maximumNumber));
        };
    }; randomProduts(howManyToAdd);

    const appendProducts = (data, key) => {
        const product = document.createElement("section");
        product.classList.add(`product__element`)
        product.classList.add(`product__element--id${data[key]["id"]}`);
        product.innerHTML = `
                <figure class="product__border">
                    <img class="product__img" src="${data[key]["image"]}">
                </figure>
                <header class="product__header" >
                    <h3 class="product__name">${data[key]["title"]}</h3>
                    <section class="product__price price">
                        <p class="price__price">${data[key]["price"]} $</p>
                        <button type="button" class="price__button">
                            <img class="price__button--img" src="/assets/add-basket.svg">
                        </button>
                    </section>
                </header>
        `;
        fragment.appendChild(product);
    }; 
    console.log(data); console.log(numbersOfProducts);
    numbersOfProducts.forEach(key => appendProducts(data, key));
    where.appendChild(fragment);
};


export {renderRandomProducts};