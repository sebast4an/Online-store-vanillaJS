import { mainComponent } from '../components/main';
import { productComponent } from '../components/productCard';

(() => {
  const routes = {
    '/': mainComponent,
    '/test': productComponent,
  };

  const rootDiv = document.querySelector('.content');
  rootDiv.innerHTML = routes[window.location.pathname];

  const onNavigate = pathname => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    rootDiv.innerHTML = routes[pathname];
  };

  const allLinks = document.querySelectorAll('a');
  allLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (!link.getAttribute('href')) onNavigate('/');
      else onNavigate(link.getAttribute('href'));
    });
  });

  window.addEventListener('popstate', () => {
    console.log('url changed');
    rootDiv.innerHTML = routes[window.location.pathname];
  });
})();
