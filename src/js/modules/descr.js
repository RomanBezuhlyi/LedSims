document.addEventListener("DOMContentLoaded", function () {
  const content = document.querySelector(".descr-wrap .descr__text");
  const button = document.querySelector(".descr-wrap .descr__btn");

  const wordCount = content.textContent.split(/\s+/).length;
  if (wordCount >= 50) {
    button.style.display = "block";
  }

  button.addEventListener("click", function () {
    if (content.style.webkitLineClamp) {
      content.style.webkitLineClamp = null;
      button.textContent = "Згорнути";
    } else {
      content.style.webkitLineClamp = "12";
      button.textContent = "Детальніше";
    }
  });
});
