import { mainComponent, mainLoader } from '../components/main';
import { occasionComponent, getOccasionFromAPI } from './occasion';

(() => {
  const content = document.querySelector('.content');

  const routes = {
    '/': mainComponent,
    '/test': occasionComponent,
  };

  const loaderComponents = pathname => {
    window.history.pushState({}, pathname, window.location.origin + pathname);

    if (pathname == '/test') {
      content.innerHTML = routes[pathname];
      getOccasionFromAPI(15, 2);
    } else {
      content.innerHTML = routes[pathname];
      mainLoader();
    }
  };

  //first website loading
  content.innerHTML = routes[window.location.pathname];
  loaderComponents(window.location.pathname);

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
