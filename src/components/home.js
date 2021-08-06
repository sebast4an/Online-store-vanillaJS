import { getDataFromStoreAPI } from '../js/products';
import { getCommentsFromCommentsAPI } from '../js/comments';
import { getOccasionFromAPI } from '../js/occasion';

const homeComponent = `
<section class="content__recommend recommend">
    <header class="recommend__header header__bottomline">
      <h1 class="header__bottomline--title">Recommend</h1>
    </header>

    <article class="recommend__products product"></article>
  </section>

  <section class="content__occasion occasion">
  </section>

  <section class="content__comments comments">
    <header class="comments__header header__bottomline">
      <h1 class="header__bottomline--title">Comments</h1>
    </header>

    <article class="comments__posts post"></article>
  </section>

  <section class="content__bestsellers bestsellers">
    <header class="bestsellers__header header__bottomline">
      <h1 class="header__bottomline--title">Bestsellers</h1>
    </header>

    <article class="bestsellers__products product"></article>
  </section>`;

const homeLoader = () => {
  getDataFromStoreAPI('products', '.recommend__products', 10);
  getOccasionFromAPI(15, 2);
  getDataFromStoreAPI('products', '.bestsellers__products', 4);
  getCommentsFromCommentsAPI(8);
};

export { homeComponent, homeLoader };
