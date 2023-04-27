
export function polComent(token) {
      return fetch ("https://webdev-hw-api.vercel.app/api/v2/slava-tsym/comments",{
        method: "GET",
        headers: {
            Authorization: token,
        },
      }).then((response) => {
        if(response === 401) {
            throw new Error ("Нет авторизации")
        }
        return response.json();
      });
    }
  
export function dobComent (text, token) {
    return fetch( "https://webdev-hw-api.vercel.app/api/user/login",
    {
      method: "POST",
      body: JSON.stringify({
        name: nameInputElement.value,
        text: userComentElement.value,
        headers: {
          Authorization:`Bearer ${token}`,
        },
      }),
    })
    .then((response) => {
      if (response.status === 500) {
        console.log(response);
        throw new Error('Сервер упал');
      }
      else if (response.status === 400) {
         throw new Error('Ошибка в сообщении');
      } else {
        return response.json();
      }
    })
}

export function loginGet(login, password) {
  return fetch( "https://webdev-hw-api.vercel.app/api/user/login",
    {
      method: "POST",
      body: JSON.stringify({
        login,
        password
      }),
    }).then((response) => {
      if(response.status === 400) {
        throw new Error('Неверный логин или пароль');
      }
        return response.json();
      });
    }

    export function registUser(login, password, name) {
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