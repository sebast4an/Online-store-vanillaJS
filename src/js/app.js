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

//IIFE?!
(() => {
    const button = document.querySelector(".navigation__hamburger");

    const animateHamburgerButton = () => {
        const hamburgerIcon = document.querySelector(".hamburger__icon");
        hamburgerIcon.classList.toggle("hamburger__icon--animate");

        const hamburgerList = document.querySelector(".navigation__list");
        hamburgerList.classList.toggle("list--active");

        const hamburgerName = document.querySelector(".hamburger__title");
        hamburgerName.style.animation = "hamburerTitleAnimate3 .2s ease-in-out reverse both";
        
        setTimeout(() => {
            hamburgerName.style.animation = "";
            hamburgerName.classList.toggle("hamburger__title--animation");      
            if (hamburgerName.innerText == "Menu") hamburgerName.innerText = "Hide menu";
            else hamburgerName.innerText = "Menu";
        }, 500);
        


    };   button.addEventListener(`click`, animateHamburgerButton);

})();