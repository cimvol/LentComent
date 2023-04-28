
//import { polComent } from "./api.js";
import { renderloginComponent } from "./components/login-component.js";

export function searchHtml(htmlString = "") {
  return htmlString.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

 

export const renderComent = (coment) => {
  const enterButtonElement = document.getElementById("entranceButton");
  const appEl = document.getElementById('app');
  if(!token) {
   renderloginComponent({
      enterButtonElement,
      appEl, 
      setToken: (newToken) => {
      token = newToken;
    },
    });
    return;
  }
  
  const comentHTML = coment.map((coment) => {
    return `<li class="comment">
        <div class="comment-header">
          <div>${searchHtml(coment.name)} </div>
          <div> ${coment.date} </div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${searchHtml(coment.text)}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${coment.likes}</span>
            <button class="like-button"></button>
          </div>
        </div>
      </li>`;
    }).join('');

          const appHtml = `<div class="container" >
          <ul id="list" class="comments">
            <!-- список рендерится из JS -->
          </ul>
          ${comentHTML}
          <div class="add-form"  id="formAdd">
            <input id="nameInput" 
            type="text" 
            class="add-form-name" 
            placeholder="Введите ваше имя" value="" />

            <textarea type="textarea" class="add-form-text" 
            placeholder="Напишите ваш коментарий" 
            id="userComent"
              value="">
              </textarea>

            <div class="add-form-row">
              <button id="button" 
              class="add-form-button">Написать</button>
            </div>
          </div>
          </div>`;

          const listElement = document.getElementById("list");
          const buttonElement = document.getElementById("button");

          appEl.innerHTML = appHtml;

    const comentTextElement = document.querySelectorAll(".comment-text");
    for (const comentText of comentTextElement) {
      comentText.addEventListener('click', () => {
        userComentElement.value = comentText.innerHTML;
      });
    }
  };