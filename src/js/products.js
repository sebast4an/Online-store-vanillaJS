import {getDataFromAPI, randomNumber} from "./app";

const recommendProducts = document.querySelector(".recommend__products");

const addProductsToHTML = (when, howMuchToAdd) => {
    //TODO: The same template for recommend and bestseller product?!
    const template = document.querySelector(".recommend__template");
    const clone = template.content.cloneNode(true);
    
    const image = clone.querySelector(".product__image");
    const name = clone.querySelector(".product__name");
    const price = clone.querySelector(".product__price");


    getDataFromAPI("products").then(data => {
        let productKeysToAdd = [];
        const sumOfProducts = data.length;

        const generatingNumbers = (start, howMuchToAdd) => {

            for (let i=start; i<howMuchToAdd; i++) {
                let number = randomNumber(0, sumOfProducts);            
                productKeysToAdd.push(number);
             }; 

             const checkDuplicate = new Set(productKeysToAdd);
             productKeysToAdd = [...checkDuplicate];
             console.log(productKeysToAdd);
        }; generatingNumbers(0, howMuchToAdd);
        
        if (productKeysToAdd.length < howMuchToAdd) {
            generatingNumbers(productKeysToAdd.length, howMuchToAdd);
            console.log(productKeysToAdd);
        };





        let number = randomNumber(0, sumOfProducts);
        
        console.log(data[number]);
        image.setAttribute("src", data[number].image);
        name.innerText = data[number].title;
        price.innerText = data[number].price;
    });

    when.append(clone);

}; 

addProductsToHTML(recommendProducts, 6);