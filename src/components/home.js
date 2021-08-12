import { getDataFromStoreAPI } from '../js/products';
import { getNewsFromNewsAPI } from '../js/news';
import { getOccasionFromAPI } from '../js/occasion';

const homeComponent = `
<section class="content__recommend recommend">
    <header class="recommend__header header__bottomline">
      <h2 class="header__bottomline--title">Recommend</h2>
    </header>

    <article class="recommend__products product"></article>
  </section>

  <section class="content__occasion occasion">
  </section>

  <section class="content__news news">
    <header class="news__header header__bottomline">
      <h2 class="header__bottomline--title">News and information</h2>
    </header>

    <article class="news__posts post"></article>
  </section>

  <section class="content__bestsellers bestsellers">
    <header class="bestsellers__header header__bottomline">
      <h2 class="header__bottomline--title">Bestsellers</h2>
    </header>

    <article class="bestsellers__products product"></article>
  </section>`;

const homeLoader = () => {
  getDataFromStoreAPI('products', '.recommend__products', 10);
  getOccasionFromAPI(14, 2);
  getDataFromStoreAPI('products', '.bestsellers__products', 4);
  getNewsFromNewsAPI(6);
};

export { homeComponent, homeLoader };
