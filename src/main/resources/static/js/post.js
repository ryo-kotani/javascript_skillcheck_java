function post() {
  const submit = document.getElementById("submit_btn");
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById("new_article"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/articles", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        window.alert(`Error ${XHR.status}: ${XHR.response.error}`)
        return null;
      };
      const article = XHR.response;
      const list = document.getElementById("contents_area");
      const text = document.getElementById("article_text");
      const numCount = document.getElementById("char_num");
      const html = `
        <div class="article">
          ${article.text}
        </div>`;
      list.insertAdjacentHTML("afterbegin", html);
      text.value = "";
      numCount.innerHTML = "0文字";
    };
  });
};

window.addEventListener('load', post);