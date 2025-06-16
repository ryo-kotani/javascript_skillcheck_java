function count() {
  const textInput = document.getElementById("article_text");
  textInput.addEventListener('keyup', () => {
    const textCount = textInput.value.length;
    const countNum = document.getElementById("char_num");
    countNum.innerHTML = `${textCount}文字`;
  });

};

window.addEventListener('load', count)