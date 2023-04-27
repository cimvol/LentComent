import { loginGet } from "../api.js";
import{ renderComent } from "../renderComent.js";


export function renderloginComponent({enterButtonElement, appEl, setToken}) {
    const appHtml = 
    ` <h3>Форма входа:</h3>
      Логин: <input id="loginInput" type="text"/>
      <br>
      <br>
      Пароль: <input id="passwordInput" type="password"/>
      <br>
      <br>
      <div>
        <button id="entranceButton">Войти</button>
      </div>
    </div>`;

    appEl.innerHTML = appHtml;
     
    document.getElementById("entranceButton").addEventListener('click', () => {
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
        login: "login",
        password: "password"
      }).then((user) => {
        setToken(`Bearer ${user.user.token}`);
        renderComent();
      }).catch(error => {
        // TODO: Выводить alert красиво
        alert(error.message);

      })
    });
}
