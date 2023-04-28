import { loginGet, registUser } from "../api.js";
import{ renderComent } from "./renderComent.js";


export function renderloginComponent({enterButtonElement, appEl, setToken}) {

  let isLoginMode = false;

  const renderForm = () => {
    const appHtml = 
    ` <h3>Форма ${isLoginMode ? 'входа' : 'регистрации'}</h3>
    ${isLoginMode ? '' : 
    ` Имя: <input id="newNameInput" 
    type="text"/>
    <br>
    <br>`}
     
      Логин: <input id="loginInput" type="text"/>
      <br>
      <br>
      Пароль: <input id="passwordInput" type="password"/>
      <br>
      <br>
      <div>
        <button id="entranceButton">${isLoginMode ? 'Войти' : 'Зарегистрироваться'}</button>
        <br>
        <br>
        <button id="toggleButton">Перейти   ${isLoginMode ? 'к регистрации' : 'ко входу'}</button>
      </div>
    </div>`;

    appEl.innerHTML = appHtml;
     
    document.getElementById("entranceButton").addEventListener('click', () => {

      if(isLoginMode) {
        const login = document.getElementById("loginInput").value;
        const password = document.getElementById("passwordInput").value;
  
        if(!login) {
          alert('Введите login');
          return;
        }
  
        if(!password) {
          alert('Введите password');
          return;
        }
  
        loginGet({
          login: login,
          password: password,
        }).then((user) => {
          setToken(`Bearer ${user.user.token}`);
          renderComent();
        }).catch(error => {
          // TODO: Выводить alert красиво
          alert(error.message);
        })
      } else {
        const name = document.getElementById("newNameInput").value;
        const login = document.getElementById("loginInput").value;
        const password = document.getElementById("passwordInput").value;

        if(!name) {
          alert('Введите name');
          return;
        }
  
        if(!login) {
          alert('Введите login');
          return;
        }
  
        if(!password) {
          alert('Введите password');
          return;
        }
  
        registUser({
          login: login,
          password: password,
          name: name,
        }).then((user) => {
          setToken(`Bearer ${user.user.token}`);
          renderComent();
        }).catch(error => {
          // TODO: Выводить alert красиво
          alert(error.message);
        })
      }
    });
    document.getElementById("toggleButton").addEventListener('click', () => {
      isLoginMode = !isLoginMode
      renderForm();
    });
  };
  renderForm();
  }
