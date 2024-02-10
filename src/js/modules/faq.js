document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    const itemTop = item.querySelector(".faq__item-top");
    const itemBody = item.querySelector(".faq__item-body");
    const btnPpenFaq = item.querySelector(".faq-open");

    itemTop.addEventListener("click", () => {
      // Змінюємо max-height для відображення/приховання контенту
      if (itemBody.style.maxHeight) {
        itemBody.style.maxHeight = null;
        btnPpenFaq.style.transform = null;
      } else {
        itemBody.style.maxHeight = "200px";
        btnPpenFaq.style.transform = "rotate(45deg)";
      }
    });
  });
});
