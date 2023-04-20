
import {addElement} from "./modulAddElement.js";
import { funcApi } from "./modulAddElement.js";

 
  let coment = [];
  //Данный код находится в модуле modulRenderComent.js
  
  // function funcApi() { 
  //   fetch("https://webdev-hw-api.vercel.app/api/v1/:cimvol-key/comments",
  //   {
  //     method: "GET",
  //   })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((responseData) => {
  //     const ourComments = responseData.comments.map((comment) => {
  //       return {
  //         name: comment.author.name,
  //         date: new Date(comment.date).toLocaleString().slice(0, -3),
  //         text: comment.text,
  //         likes: comment.likes,
  //         isLiked: false,
  //       };
  //     });
  //     coment = ourComments;
  //     console.log(coment);
  //     renderComent(coment);
  //     likesFun();
  //   });
  // }
  
  const buttonElement = document.getElementById("button");
  
  buttonElement.addEventListener('click', (e) => addElement(e, coment));

  funcApi();