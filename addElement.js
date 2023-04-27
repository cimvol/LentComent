import { renderComent } from "./renderComent.js";
import { likesFun } from "./likesFun.js";
import { polComent } from "./api.js";


export function addElement (e, coment) {
    nameInputElement.classList.remove('error');
    userComentElement.classList.remove('error');
    if (nameInputElement.value === "" || userComentElement.value === "") {
      nameInputElement.classList.add('error');
      userComentElement.classList.add('error');
      return;
    }

    e.target.disabled = true;
    e.target.textContent = "Публикуется";
    coment.push({
      name: nameInputElement.value,
      date: new Date(coment.date).toLocaleString().slice(0, -3),
      text: userComentElement.value,
      laiks: 0,
    });

    const nameInputElement = document.getElementById("nameInput");
    const userComentElement = document.getElementById("userComent");
    const buttonElement = document.getElementById("button");
    buttonElement.addEventListener('click', (e) => addElement(e, coment)); 

    dobComent(text, token).then((responseData) => {
        funcApi()
        e.target.disabled = false;
        e.target.textContent = "Написать";
        nameInputElement.value = "";
        userComentElement.value = "";
     })
      .catch((error) => {
        e.target.disabled = false;
        e.target.textContent = "Написать";
        console.log(error);
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
     

  export function funcApi() { 
      let token = "asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";
        return polComent(token).then((responseData) => {
          const ourComments = responseData.comments.map((comment) => {
            return {
              name: comment.author.name,
              date: new Date(comment.date).toLocaleString().slice(0, -3),
              text: comment.text,
              likes: comment.likes,
              isLiked: false,
            };
          });
          renderComent(ourComments);
          likesFun();
        });
     }
      
      