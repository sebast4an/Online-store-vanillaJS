import "../scss/main.scss";
import "../assets/icons/search.svg";
import "../assets/icons/user.svg";
import "../assets/icons/basket.svg";
import "../assets/icons/add-basket.svg"
import "../assets/icons/mail.svg"

import {getDataFromAPI} from "./products";
import {getCommentsFromAPI} from "./comments";

getDataFromAPI("products");
getCommentsFromAPI();






