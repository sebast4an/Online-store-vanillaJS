import {getDataFromAPI, randomNumber} from "./app";


const makeRecommendProducts = () => {
    const productsContainer = document.querySelector(".recommend__products");
    const template = document.querySelector(".recommend__template");
    const clone = template.content.cloneNode(true);
    
    const image = clone.querySelector(".image__img");
    const name = clone.querySelector(".product__name");
    const price = clone.querySelector(".product__price");
    
    getDataFromAPI("products").then(data => {
        const sumOfProducts = data.length;
        let number = randomNumber(0, sumOfProducts);
        
        console.log(data[number]);
        image.setAttribute("src", data[number].image);
        name.innerText = data[number].title;
        price.innerText = data[number].price;
    });

    productsContainer.append(clone);

}; makeRecommendProducts();
