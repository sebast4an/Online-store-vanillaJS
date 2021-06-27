import "../scss/main.scss";
import "../assets/icons/search.svg";
import "../assets/icons/user.svg";
import "../assets/icons/basket.svg";

import {renderRandomProducts} from "./products";

const getDataFromAPI = async question => {
    const URL = `https://fakestoreapi.com/${question}/`;

    try {
        const response = await fetch(URL);
        const data = await response.json();

        const reccomendProducts = document.querySelector(".recommend__products");
        
        renderRandomProducts(data, reccomendProducts, 6);
        
    } catch (error) {
        console.log(error);
    };

};  getDataFromAPI("products");






