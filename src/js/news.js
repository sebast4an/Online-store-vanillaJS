import { loaderAnimate, randomContent, addGrabAndScroll } from './globalFunctions';

const renderNews = (data, howMany) => {
  const news = document.querySelector('.news__posts');
  if (!news) return;

  const fragment = document.createDocumentFragment();
  const commentsNumber = randomContent(howMany, data.length - 1);

  const appendNews = (data, key) => {
    const commentPost = document.createElement('div');
    commentPost.classList.add(`post__element`);
    commentPost.classList.add(`post__element--${data[key]['id']}`);
    commentPost.innerHTML = `
                <img class="post__image" src="https://picsum.photos/300/300.webp/?random=${key}">
                <header class="post__header">
                  <h3 class="post__header--title">${data[key]['title']}</h3>
                </header>
               `;
    fragment.appendChild(commentPost);
  };
  commentsNumber.forEach(key => appendNews(data, key));
  news.innerHTML = '';
  news.appendChild(fragment);
};

const getNewsFromNewsAPI = async howMany => {
  const URL = `https://jsonplaceholder.typicode.com/posts`;

  // Correction the function for one declaration "where"
  const news = document.querySelector('.news__posts');
  if (!news) return;
  else {
    loaderAnimate(news);
    addGrabAndScroll('.post');
  }

  try {
    const response = await fetch(URL);
    const data = await response.json();
    renderNews(data, howMany);
  } catch (error) {
    news.innerText = 'Error loading data. Please reload page.';
  }
};

export { getNewsFromNewsAPI };
