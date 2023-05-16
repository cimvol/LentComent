import { renderComent } from "./renderComent.js";
import { likesFun } from "./main.js";
import { addElement } from "./addElement.js";

export function funcApi() {
    return polComent().then((responseData) => {
      const coment = responseData.comments.map((comment) => {
        return {
          name: comment.author.name,
          date: new Date(comment.date),
          text: comment.text,
          likes: comment.likes,
          isLiked: false,
        };
      });
      renderComent({coment}); 
      likesFun();
    });
 }

export function polComent() {
      return fetch ("https://webdev-hw-api.vercel.app/api/v2/slava-tsym/comments",{
        method: "GET",
      }).then((response) => {
        if(response.status === 401) {
            throw new Error ("Нет авторизации");
        }
        return response.json();
      });
  }
  
export function dobComent ({ text, token }) {
    return fetch( "https://webdev-hw-api.vercel.app/api/v2/slava-tsym/comments",{
      method: "POST",
      body: JSON.stringify({
       text,
      }),
        headers: {
          Authorization: token,
        },
      })
    .then((response) => {
      if (response.status === 500) {
        throw new Error('Сервер упал');
      }
      else if (response.status === 400) {
         throw new Error('Ошибка в сообщении');
      } else {
        return response.json();
      };
    })
    .then(()=> funcApi());
  }

export function loginGet({ login, password }) {

  return fetch( "https://webdev-hw-api.vercel.app/api/user/login",
    {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
    }).then((response) => {
      if(response.status === 400) {
        throw new Error('Неверный логин или пароль');
      }
        return response.json();
      });
  }

export function registUser({ login, password, name }) {
      return fetch( "https://webdev-hw-api.vercel.app/api/user",
        {
          method: "POST",
          body: JSON.stringify({
            login,
            password,
            name,
          }),
        }).then((response) => {
          if(response.status === 400) {
            throw new Error('Такой пользователь уже существует');
          }
            return response.json();
          });
  }