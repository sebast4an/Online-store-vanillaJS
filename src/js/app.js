import "../scss/main.scss";
import "../assets/icons/search.svg";
import "../assets/icons/user.svg";
import "../assets/icons/basket.svg";

const API_URL = await fetch("https://fakestoreapi.com/products/");
const json = await API_URL.json();
console.log(json);


const makeRecommendProducts = () => {
    const productsList = document.querySelector(".recommend__products");
    const template = document.querySelector(".recommend__template");
    const clone = template.content.cloneNode(true);
    
    const name = clone.querySelector(".product__name");
    name.innerText = "work?";

    productsList.append(clone);

}; makeRecommendProducts();

