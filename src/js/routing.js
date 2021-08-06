import { homeComponent, homeLoader } from '../components/home';
import { categoryProductsComponent, categoryProductsLoader } from '../components/categoryProducts';

(() => {
  const content = document.querySelector('.content');

  const routes = {
    '/': homeComponent,
    '/electronics': categoryProductsComponent,
    '/jewelery': categoryProductsComponent,
    '/men%27s%20clothing': categoryProductsComponent,
    '/women%27s%20clothing': categoryProductsComponent,
  };

  const loaderComponents = pathname => {
    window.history.pushState({}, pathname, window.location.origin + pathname);

    switch (pathname) {
      case '/electronics':
        document.title = `Online Store - ${pathname.slice(1)}`;
        content.innerHTML = routes[pathname];
        categoryProductsLoader('electronics');
        break;
      case '/jewelery':
        document.title = `Online Store - ${pathname.slice(1)}`;
        content.innerHTML = routes[pathname];
        categoryProductsLoader('jewelery');
        break;
      case '/men%27s%20clothing':
        document.title = `Online Store - ${decodeURI(pathname.slice(1))}`;
        content.innerHTML = routes[pathname];
        categoryProductsLoader('men%27s%20clothing');
        break;
      case '/women%27s%20clothing':
        document.title = `Online Store - ${decodeURI(pathname.slice(1))}`;
        content.innerHTML = routes[pathname];
        categoryProductsLoader('women%27s%20clothing');
        break;
      default:
        document.title = 'Online Store';
        content.innerHTML = routes['/'];
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
