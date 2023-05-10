
//импортируем функции из других модулей
import { dobComent } from "./api.js";
import { funcApi } from "./api.js";

// Данная функция отвечает за добавление нового комментария
export function addElement ({e, coment}) {
  // инициализация переменных по их id
    const nameInputElement = document.getElementById("nameInput");
    const textInputElement = document.getElementById("text-input");
// проверяем наличие 
    nameInputElement.classList.remove('error');
    textInputElement.classList.remove('error');
    if (nameInputElement.value === "" || textInputElement.value === "") {
     nameInputElement.classList.add('error');
     textInputElement.classList.add('error');
     return;
   }

     e.target.disabled = true;
     e.target.textContent = "Публикуется";
    coment.push({
      name: nameInputElement.value,
      date: new Date(coment.date),
      text: textInputElement.value,
      laiks: 0,
    });
    //const token = "Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";

    dobComent({text, token}).then((responseData) => {
        funcApi();
        e.target.disabled = false;
        e.target.textContent = "Написать";
        nameInputElement.value = "";
        textInputElement.value = "";
     })
      .catch((error) => {
        e.target.disabled = false;
        e.target.textContent = "Написать";
        if (error.message === "Сервер упал") {
          alert("Ты сделал ошибку в запросе, исправь данные и попробуй снова");
        }
        else if (error.message === "Ошибка в сообщении") {
          alert("Слишком короткий коментарий или имя");
        } 
        else {
          alert('Похоже что-то пошло не так, повторите попытку позже');
        }
      });
    }