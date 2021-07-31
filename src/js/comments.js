import { loaderAnimate, randomContent } from './globalFunctions';

const renderComments = (data, howMany) => {
  const comments = document.querySelector('.comments__posts');
  if (!comments) return;

  const fragment = document.createDocumentFragment();
  const commentsNumber = randomContent(howMany, data.length - 1);

  const appendComments = (data, key) => {
    const commentPost = document.createElement('div');
    commentPost.classList.add(`post__element`);
    commentPost.classList.add(`post__element--${data[key]['postId']}`);
    commentPost.innerHTML = `
            
            <h2 class="post__email">
                <img class="post__email--icon" src="assets/mail.svg" style="fill: #000">
                <span> ${data[key]['email']} </span>
            </h2>
            <p class="post__body">
                <span> ${data[key]['body']} </span>
            </p>
        `;
    fragment.appendChild(commentPost);
  };
  commentsNumber.forEach(key => appendComments(data, key));
  comments.innerHTML = '';
  comments.appendChild(fragment);
};

const getCommentsFromCommentsAPI = async howMany => {
  const URL = `https://jsonplaceholder.typicode.com/comments`;

  // Correction the function for one declaration "where"
  const comments = document.querySelector('.comments__posts');
  if (!comments) return;
  else loaderAnimate(comments);

  try {
    const response = await fetch(URL);
    const data = await response.json();
    renderComments(data, howMany);
  } catch (error) {
    comments.innerText = 'Error loading data. Please reload page.';
  }
};

export { getCommentsFromCommentsAPI };
