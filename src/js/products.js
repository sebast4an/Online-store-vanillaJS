const randomNumber = (min, max) => Math.floor(Math.random() * (max-min+1) + min);

const randomContent = (howMany, maxNumber) => {
    const uniquesNumbersNoDuplicates = new Set();

    for (let i=0; uniquesNumbersNoDuplicates.size<howMany; i++) { 
        uniquesNumbersNoDuplicates.add(randomNumber(0, maxNumber));
    };
    return uniquesNumbersNoDuplicates;
}; 

const renderRandomProducts = (data, where, howManyToAdd) => {
    const fragment = document.createDocumentFragment();
    const numbersOfProducts = randomContent(howManyToAdd, data.length-1);

    const appendProducts = (data, key) => {
        const product = document.createElement("section");
        product.classList.add(`product__element`)
        product.classList.add(`product__element--id${data[key]["id"]}`);
        product.innerHTML = `
                <figure class="product__border">
                    <img class="product__img" src="${data[key]["image"]}">
                </figure>
                <header class="product__header">
                    <h3 class="product__name">
                        ${data[key]["title"]}
                    </h3>
                    <section class="product__price price">
                        <p class="price__price">
                            ${data[key]["price"]}
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

const loaderAnimate = where => {
    where.innerHTML = `
        <section class="progress">
            <div class="progress__animate">
            </div>
            <p class="progress__info">
                Loading data. Please wait.
            </p>
        </section>
    `;
};

const getDataFromAPI = async question => {
    const URL = `https://fakestoreapi.com/${question}/`;
    
    const recommendProducts = document.querySelector(".recommend__products");
    loaderAnimate(recommendProducts);

    try {
        const response = await fetch(URL);
        const data = await response.json();
        renderRandomProducts(data, recommendProducts, 6);    
    } catch (error) {

        //TODO: Type special notification for error (view error for user)!
        console.log(error);
    };
};  

export {randomContent, loaderAnimate, getDataFromAPI};