import { mainCompotent } from '../components/main';
import { productCard } from '../components/productCard';

(() => {
  const routes = {
    '/': mainCompotent,
    '/product': productCard,
  };

  const rootDiv = document.querySelector(`.content`);
  rootDiv.innerHTML = routes[window.location.pathname];

  const onNavigate = pathname => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    rootDiv.innerHTML = routes[pathname];
  };

  window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname];
  };
})();
