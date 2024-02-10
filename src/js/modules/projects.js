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
  let currentVideo;

  playButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const video = button.previousElementSibling;
      toggleVideo(video, button);
    });
  });

  function toggleVideo(video, button) {
    if (currentVideo && currentVideo !== video) {
      currentVideo.pause();
      currentVideo.nextElementSibling.classList.remove("hide");
    }

    if (video.paused || video.ended) {
      video.play();
      button.classList.add("hide");
      currentVideo = video;
    } else {
      video.pause();
      button.classList.remove("hide");
      currentVideo = null;
    }
  }

  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    video.addEventListener("click", function () {
      toggleVideo(video, video.nextElementSibling);
    });
  });
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
