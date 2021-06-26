import "../scss/main.scss";
import "../assets/icons/search.svg";
import "../assets/icons/user.svg";
import "../assets/icons/basket.svg";

import {} from "./products";

const getDataFromAPI = async question => {
    const URL = `https://fakestoreapi.com/${question}/`;

    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
    };
};


const randomNumber = (min, max) => Math.floor(Math.random() * (max-min+1) + min);





