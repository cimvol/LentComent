
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
