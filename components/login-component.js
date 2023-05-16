//импортируем другие функции в данный модуль
import { funcApi, loginGet, registUser } from "../api.js";
import { renderComent } from "../renderComent.js";
// Запускаем функцию renderloginComponent и передаем туда в качестве 
// аргумента setToken и setUser
export function renderloginComponent( {setToken, setUser} ) {
 // находим кнопку по ее id и вешаем на нее обработчик клика 
    document.getElementById("entranceButton").addEventListener('click', () => {
  // инициализируем переменные login и password по их id
        //const name = document.getElementById("nameUser").value;
        const login = document.getElementById("loginInput").value;
        const password = document.getElementById("passwordInput").value;
//делаем проверку name если не введен просим пользователя ввести 
//его ввыводя сообщения в alert
        // if(!name) {
        //   alert('Введите name');
        //   return;
        // }
// делаем проверку если не введен login просим пользователя 
// ввести его выводя сообщение в alert
        if(!login) {
          alert('Введите login');
          return;
        }
  // делаем проверку если не введен password просим пользователя 
// ввести его выводя сообщение в alert
        if(!password) {
          alert('Введите password');
          return;
        }
    // если все проверки пройдены запускаем функцию loginGet
    // передаем в эту функцию два аргумента login и password
        loginGet({
          login: login,
          password: password,
        })
        .then((user) => {
          // вот здесь не понимаю что происходит???
          setToken(`Bearer ${user.user.token}`);
           // вот здесь не понимаю что происходит???
          setUser(user.user)
         funcApi();
        })
        //здесь ловим ошибку если она есть
        .catch(error => {
          alert(error.message);
        });
      });
  }

    