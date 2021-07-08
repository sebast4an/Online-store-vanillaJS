import {loaderAnimate, randomContent} from "./products";

const renderComments = (data) => {
    const comments = document.querySelector(".comments__posts");
    const fragment = document.createDocumentFragment();
    const commentsNumber = randomContent(4, data.length-1);    

    const appendComments = (data, key) => {
        console.log(data);
        const commentPost = document.createElement("div");
        commentPost.classList.add(`post__element`);
        commentPost.classList.add(`post__element--${data[key]["postId"]}`); 
        commentPost.innerHTML = `
            <header class="post__header">
                <h2 class="post__header--name">
                    ${data[key]["name"]}
                </h2>
                <h3 class="post__header--email">
                    ${data[key]["email"]}
                </h3>
            </header>
            <p class="post__body">
                ${data[key]["body"]}
            </p>
        `;
        fragment.appendChild(commentPost);
    };
    commentsNumber.forEach(key => appendComments(data, key));
    comments.innerHTML = "";
    comments.appendChild(fragment);

};

const getCommentsFromAPI = async () => {
    const URL = `https://jsonplaceholder.typicode.com/comments`;
    
    const comments = document.querySelector(".comments__posts");
    loaderAnimate(comments);

    try {
        const response = await fetch(URL);
        const data = await response.json();
        renderComments(data);

    } catch (error) {
        console.log(error);
    }
};



export {getCommentsFromAPI};