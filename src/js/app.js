import "../scss/main.scss";
import "../assets/icons/search.svg";
import "../assets/icons/user.svg";
import "../assets/icons/basket.svg";

const connectToAPI = async question => {
    const URL = `https://fakestoreapi.com/${question}/`;
    const API = await fetch(URL);
    const connectionResult = await API.json();
    console.log(connectionResult);
};

const allProducts = connectToAPI("products");
const allCart = connectToAPI("carts");
const allUsers = connectToAPI("Users");

console.log(allProducts, allCart, allUsers);







const makeRecommendProducts = () => {
    const productsContainer = document.querySelector(".recommend__products");
    const template = document.querySelector(".recommend__template");
    const clone = template.content.cloneNode(true);
    
    const name = clone.querySelector(".product__name");
    name.innerText = "work?";

    productsContainer.append(clone);

}; makeRecommendProducts();

