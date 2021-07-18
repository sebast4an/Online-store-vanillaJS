// scss
import '../scss/main.scss';

//svg
import '../assets/icons/search.svg';
import '../assets/icons/user.svg';
import '../assets/icons/basket.svg';
import '../assets/icons/add-basket.svg';
import '../assets/icons/mail.svg';
import '../assets/icons/phone.svg';
import '../assets/icons/mail.svg';
import '../assets/icons/clock.svg';
import '../assets/icons/facebook.svg';
import '../assets/icons/instagram.svg';
import '../assets/icons/twitter.svg';
import '../assets/icons/map-pin.svg';

//js
import './menu';
import { getDataFromStoreAPI } from './products';
import { getCommentsFromCommentsAPI } from './comments';

(() => {
  const recommendProducts = document.querySelector('.recommend__products');
  getDataFromStoreAPI('products', recommendProducts, 6);

  const bestsellersProducts = document.querySelector('.bestsellers__products');
  getDataFromStoreAPI('products', bestsellersProducts, 4);

  console.log(window.innerWidth);
  const howManyCommentsToDisplay = () => {
    if (window.innerWidth > 1018) getCommentsFromCommentsAPI(8);
    else if (window.innerWidth > 809) getCommentsFromCommentsAPI(6);
    else getCommentsFromCommentsAPI(4);
  };
  howManyCommentsToDisplay();
  window.addEventListener('resize', howManyCommentsToDisplay);
})();
