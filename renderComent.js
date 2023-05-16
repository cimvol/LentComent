
import { renderloginComponent } from "./components/login-component.js";
import { searchHtml } from "./main.js";
import { addElement } from "./addElement.js";
import { renderForm } from "./renderForm.js";
import { dobComent } from "./api.js";
import { format } from "date-fns";

//здесь мы инициализируем переменные 'token', 'user', 'isLoginMode'

let token = null;
let user = null;
//let isLoginMode = true;

// Здесь запускается функция отрисовки страницы нашего приложения, в которую в качестве аргумента 
// передается переменная "coment"

export const renderComent = ({ coment, isLoginMode }) => {
  // находим элемент на странице index.html  по его id
  const appEl = document.getElementById('app');
  //нахожу кнопку "Написать" по id
 

  // Отрисовываем наши коментарии coment.date
  const comentHTML = coment.map((coment) => {
    const createdDate = format(new Date(coment.date), 'yyyy/mm/dd hh/mm/ss');
    return `<li class="comment">
        <div class="comment-header">
          <div>${searchHtml(coment.name)} </div>
          <div> ${createdDate} </div>
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
          ${renderForm({token, isLoginMode})}`
          appEl.innerHTML = appHtml;

          // находим элементы по их id на странице
          //const listElement = document.getElementById("list");

          const nameInputElement = document.getElementById("nameInput");
          if(user) {
            nameInputElement.value = user.name;
          }

// Делаем условие если токена нет запускаем обработчик на кнопку Войти, который в свою очередь запускает функцию  renderloginComponent
// в которую передаются два аргумента setToken и setUser

           if (!token) {
           document.getElementById("entranceButton").addEventListener('click', () => {
              renderloginComponent({
                setToken:(newToken) => {
// присваеваем token новое значение newToken
                      token = newToken;
                    },
                setUser: (newUser) => {
// присваеваем переменной user новое значение newUser
                  user = newUser;
                },
              });
            });
          }
// ставлю на кнопку обработчик клика который запускает функцию dobComent
       if(token) {
       const buttonWriteElement = document.getElementById("buttonWrite");
        buttonWriteElement.addEventListener('click', () => {
          const textInputElement = document.getElementById("text-input");
          const text = textInputElement.value;
          dobComent ({ text, token });
          }); 
       }
         
 // нахожу кнопку ставлю на нее обработчик клика, при нажатии на кнопку флажок должен переключаться
// на противоположное значение и затем форма должна отобразиться с дополнительным полем "name"
          const registrButtonElement = document.getElementById("registrButton");
          registrButtonElement.addEventListener('click', () => {
            //console.log("registrButtonElement");
            isLoginMode = !isLoginMode;
            renderComent({ coment, isLoginMode });
            });

        // в этом блоке мы делаем возможность коментировать другие коментарии
            const comentTextElement = document.querySelectorAll(".comment-text");
            for (const comentText of comentTextElement) {
              comentText.addEventListener('click', () => {
                userComentElement.value = comentText.innerHTML;
              });
            }
            return;
          };
         