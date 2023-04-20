
const listElement = document.getElementById("list");
function searchHtml(htmlString = "") {
  return htmlString.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

export const renderComent = (coment) => {
    const comentHTML = coment.map((coment) => {
      return `<li class="comment">
          <div class="comment-header">
            <div>${searchHtml(coment.name)} </div>
            <div> ${coment.date} </div>
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
        </li>`
    }).join('')
    listElement.innerHTML = comentHTML;
    console.log(comentHTML);

    const comentTextElement = document.querySelectorAll(".comment-text");
    for (const comentText of comentTextElement) {
      comentText.addEventListener('click', () => {
        userComentElement.value = comentText.innerHTML;
      });
    }
  };