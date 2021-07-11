import "../scss/main.scss";
import "../assets/icons/search.svg";
import "../assets/icons/user.svg";
import "../assets/icons/basket.svg";
import "../assets/icons/add-basket.svg";
import "../assets/icons/mail.svg";
import "../assets/icons/phone.svg";
import "../assets/icons/mail.svg";
import "../assets/icons/clock.svg";
import "../assets/icons/facebook.svg";
import "../assets/icons/instagram.svg";
import "../assets/icons/twitter.svg";
import "../assets/icons/map-pin.svg";

import {getDataFromAPI} from "./products";
import {getCommentsFromAPI} from "./comments";


const recommendProducts = document.querySelector(".recommend__products");
const bestsellersProducts = document.querySelector(".bestsellers__products");

getDataFromAPI("products", recommendProducts, 6);
getCommentsFromAPI();
getDataFromAPI("products", bestsellersProducts, 4);






