import {randomNumber, randomContent} from "./products";

const getCommentsFromAPI = async () => {
    const URL = `https://jsonplaceholder.typicode.com/comments`;

    try {
        const response = await fetch(URL);
        const data = await response.json();
        const comments = document.querySelector(".comments__post");
        console.log(data);

    } catch (error) {
        console.log(error);
    }
};

const renderComments = (howManyToRender) => {
    const fragment = document.createDocumentFragment();
    const commentsNumber = randomContent(4, data.length-1);

    
    console.log(commentsNumber);

}



export {getCommentsFromAPI};