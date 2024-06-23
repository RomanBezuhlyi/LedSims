var swiper = new Swiper(".projects__tabs", {
  slidesPerView: 2.75,
  spaceBetween: 10,
  breakpoints: {
    480: {
      slidesPerView: 4,
    },
    576: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 7,
    },
    991: {
      slidesPerView: 8,
    },
    1200: {
      slidesPerView: 9,
    },
  },
});

// Video

document.addEventListener("DOMContentLoaded", function () {
  const playButtons = document.querySelectorAll(".play");

  playButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const videoOverlay = button.previousElementSibling;
      const iframe = videoOverlay.previousElementSibling;
      playIframe(iframe, videoOverlay, button);
    });
  });

  function playIframe(iframe, videoOverlay, button) {
    const src = iframe.getAttribute("src");
    iframe.setAttribute("src", src + "&autoplay=1");

    // Додати затримку в 1 секунду перед приховуванням елементів
    setTimeout(() => {
      videoOverlay.classList.add("hide");
      button.classList.add("hide");
    }, 1000); // 1000 мілісекунд = 1 секунда
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".projects__tab");
  const videoLists = document.querySelectorAll(".projects__list");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Сховати всі списки відео
      videoLists.forEach((list) => {
        list.classList.add("hide");
      });

      // Відобразити потрібний список відео
      videoLists[index].classList.remove("hide");

      // Забрати клас 'active' у всіх табів і додати його тільки поточному табу
      tabs.forEach((t) => {
        t.classList.remove("active");
      });
      tab.classList.add("active");
    });
  });
});
