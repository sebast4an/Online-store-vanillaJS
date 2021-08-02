import { homeComponent, homeLoader } from '../components/home';
import { allProductsComponent, allProductsLoader } from '../components/allProducts';

(() => {
  const content = document.querySelector('.content');

  const routes = {
    '/': homeComponent,
    '/electronics': allProductsComponent,
  };

  const loaderComponents = pathname => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    content.innerHTML = routes[pathname];

    switch (pathname) {
      case '/electronics':
        allProductsLoader();
        break;
      default:
        homeLoader();
    }
  };

  //first website loading
  content.innerHTML = routes[window.location.pathname];
  loaderComponents(window.location.pathname);

  //this loop gets all link and add routing
  const allLinks = document.querySelectorAll('a');
  allLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (!href) {
        loaderComponents('/');
      } else {
        loaderComponents(href);
      }
    });
  });

  window.addEventListener('popstate', () => {
    loaderComponents(window.location.pathname);
  });
})();
