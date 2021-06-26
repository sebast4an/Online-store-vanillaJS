const recommendProducts = document.querySelector(".recommend__products");

const products = getDataFromAPI("products");
console.log(products);

const value = `
    <a class="recommend__product product">
        <figure class="product__border">
            <img class="product__image">
        </figure>
        <p class="product__name"></p>
        <p class="product__price"></p>
    </a>
`;


export {};