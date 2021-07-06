import {randomNumber, randomContent} from "./products";

const renderComments = (howManyToRender) => {
    const comments = document.querySelector(".comments__post");
    const fragment = document.createDocumentFragment();
    const commentsNumber = randomContent(4, data.length-1);    

    const appendComments = () => {
        const comment = document.createElement("div");
        comment.classList.add(`comments__element`);
        comment.classList.add(`comments__element--${key}`); 
                                                //TODO: Add data element.
    }

};

const getCommentsFromAPI = async () => {
    const URL = `https://jsonplaceholder.typicode.com/comments`;

    try {
        const response = await fetch(URL);
        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log(error);
    }
};



export {getCommentsFromAPI};