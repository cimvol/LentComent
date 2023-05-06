
// Экспортируем данную функцию в другие модули
// renderForm принимает аргументом переменную token
export function  renderForm ({ token }) {
  // Если в token содержится значение null
    if(!token) {
      // отрисовываем форму входа предлагающую ввести
      //логин и пароль 
        return  `<div class="add-form"> 
         <h3>Форма входа </h3>
      <input id="loginInput"  class="add-form-name"  type="text" placeholder="Логин"/>
      <br  />
      <input id="passwordInput"  class="add-form-name"  type="password" placeholder="Пароль"/>
      <br  />
      <div>
        <button class="add-form-button" id="entranceButton"> Войти </button>
        <br  />
      </div>
      </div>`;
  } 
  // если токен не пустой мы отрисовываем форму для 
  //добавления комментариев
  else {
    return `<div class="add-form">
    <input type="text" id="nameInput" class="add-form-name" placeholder="Введите ваше имя"/>
    <textarea id="text-input" type="textarea" class="add-form-text" placeholder="Введите ваш коментарий" rows="4"></textarea>
    <div class="add-form-row">
      <button id="buttonWrite" class="add-form-button">Написать</button>
    </div>
  </div>`;
    }
}

