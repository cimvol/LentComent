
// В этом блоке мы импортируем функции из других модулей в этот модуль
import { renderloginComponent } from "./components/login-component.js";
import { searchHtml } from "./main.js";
import { addElement } from "./addElement.js";
import { renderForm } from "./renderForm.js";
import { dobComent, funcApi, polComent } from "./api.js";

//здесь мы инициализируем переменные 'token', 'user'
let token = null;
let user = null;

// Здесь запускается функция отрисовки страницы 
//нашего приложения, в которую в качестве аргумента 
// передается переменная "coment"
export const renderComent = ({ coment }) => {
  // находим элемент на странице index.html  по его id
  const appEl = document.getElementById('app');
  //let isLoginMode = true;
  // Отрисовываем наши коментарии
  const comentHTML = coment
  .map((coment) => {
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

    // Отрисовывается форма для входа с логином и паролем
          const appHtml = `<div class="container" >
          <ul id="list" class="comments">
            ${comentHTML}
          </ul> 
          ${renderForm({token})}`
          appEl.innerHTML = appHtml;
// Делаем условие если токена нет запускаем обработчик на 
//кнопку Войти, который в свою очередь запускает функцию  renderloginComponent
// в которую передаются два аргумента setToken и setUser
           if (!token) {
           document.getElementById("entranceButton").addEventListener('click', () => {
              renderloginComponent({
                setToken:(newToken) => {
                  console.log(newToken);
                  // присваеваем token новое значение newToken
                      token = newToken;
                    },
                setUser: (newUser) => {
                  // присваеваем переменной user новое значение newUser
                  user = newUser;
                },
              });
            });
            return;
          }
          // находим элементы по их id на странице
          const listElement = document.getElementById("list");
          const nameInputElement = document.getElementById("nameInput");
          nameInputElement.value = user.name;
         
          //нахожу элемент кнопку "Написать" по id
          const buttonWriteElement = document.getElementById("buttonWrite");
          // ставлю на кнопку обработчик клика который запускает функцию dobComent или funApi
          buttonWriteElement.addEventListener('click', () => {
            const textInputElement = document.getElementById("text-input");
            const text = textInputElement.value;
            dobComent ({ text, token });
          }); 
            
// в этом блоке мы делаем возможность коментировать другие коментарии
    const comentTextElement = document.querySelectorAll(".comment-text");
    for (const comentText of comentTextElement) {
      comentText.addEventListener('click', () => {
        userComentElement.value = comentText.innerHTML;
      });
    }
  };