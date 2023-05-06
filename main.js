
import { funcApi } from "./api.js";

 let coment = [];

 let user = null;
 let token = null;

  funcApi();

  export function likesFun () {
    const buttonLike = document.querySelectorAll('.like-button');
    for (const buttonLikes of buttonLike) {
      buttonLikes.addEventListener('click', () => {
        const counter = buttonLikes.parentElement.querySelector(".likes-counter");
        buttonLikes.classList.toggle("-active-like");
        if (buttonLikes.classList.contains("-active-like")) {
          counter.textContent++;
        } else {
          counter.textContent--;
        }
      });
    }
  };

  export function searchHtml(htmlString = "") {
    return htmlString.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  }



  

  

  
    


  
 