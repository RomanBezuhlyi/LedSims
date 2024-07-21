document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо елементи DOM
  const slider = document.getElementById("slider");
  const inputValue = document.getElementById("inputValue");
  const rangeLine = document.querySelector(".range-line");

  // Функція для форматування значення в бажаний формат
  function formatValue(value) {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " м";
  }

  // Оновлення лінії при завантаженні сторінки
  updateLine();

  // Додаємо обробник подій для зміни значення бігунка
  slider.addEventListener("input", function () {
    // Оновлюємо значення в інпуті з використанням форматування
    inputValue.value = formatValue(slider.value);

    // Оновлюємо лінію
    updateLine();
  });

  // Додаємо обробник подій для зміни значення інпуту
  inputValue.addEventListener("input", function () {
    // Оновлюємо значення на бігунку, видаляючи кому та " м"
    var numericValue = inputValue.value.replace(/,/g, "").replace(" м", "");

    // Перевіряємо, чи значення є числом та в межах допустимого діапазону
    if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 20000) {
      slider.value = numericValue;
    } else {
      // Якщо введено неправильне значення, встановлюємо значення бігунка на максимальне
      slider.value = 20000;
    }

    // Оновлюємо значення в інпуті з використанням форматування
    inputValue.value = formatValue(slider.value);

    // Оновлюємо лінію
    updateLine();
  });

  // Функція для оновлення лінії
  function updateLine() {
    const percentage = (slider.value / slider.max) * 97;
    rangeLine.style.width = percentage + "%";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const inputDrop = document.getElementById("inputDrop");
  const dropdownIcon = document.getElementById("dropdownIcon");
  const dropdownList = document.getElementById("dropdownList");

  // Toggle dropdown visibility
  inputDrop.addEventListener("click", function () {
    dropdownList.style.display =
      dropdownList.style.display === "flex" ? "none" : "flex";
    dropdownIcon.style.transform =
      dropdownList.style.display === "flex" ? "rotate(180deg)" : "rotate(0deg)";
  });

  // Handle item selection
  dropdownList.addEventListener("click", function (e) {
    if (e.target.classList.contains("input-dropdown__item")) {
      inputDrop.value = e.target.textContent;
      dropdownList.style.display = "none";
      dropdownIcon.style.transform = "rotate(0deg)";
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!inputDrop.contains(e.target) && !dropdownList.contains(e.target)) {
      dropdownList.style.display = "none";
      dropdownIcon.style.transform = "rotate(0deg)";
    }
  });
});

// ==========================

document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо елементи DOM
  const slider2 = document.getElementById("slider2");
  const inputValue2 = document.getElementById("inputValue2");
  const rangeLine2 = document.querySelector(".range-line2");

  // Функція для форматування значення в бажаний формат
  function formatValue(value) {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " м";
  }

  // Оновлення лінії при завантаженні сторінки
  updateLine();

  // Додаємо обробник подій для зміни значення бігунка
  slider2.addEventListener("input", function () {
    // Оновлюємо значення в інпуті з використанням форматування
    inputValue2.value = formatValue(slider2.value);

    // Оновлюємо лінію
    updateLine();
  });

  // Додаємо обробник подій для зміни значення інпуту
  inputValue2.addEventListener("input", function () {
    // Оновлюємо значення на бігунку, видаляючи кому та " м"
    var numericValue2 = inputValue2.value.replace(/,/g, "").replace(" м", "");

    // Перевіряємо, чи значення є числом та в межах допустимого діапазону
    if (!isNaN(numericValue2) && numericValue2 >= 0 && numericValue2 <= 8000) {
      slider2.value = numericValue2;
    } else {
      // Якщо введено неправильне значення, встановлюємо значення бігунка на максимальне
      slider2.value = 8000;
    }

    // Оновлюємо значення в інпуті з використанням форматування
    inputValue2.value = formatValue(slider2.value);

    // Оновлюємо лінію
    updateLine();
  });

  // Функція для оновлення лінії
  function updateLine() {
    const percentage2 = (slider2.value / slider2.max) * 97;
    rangeLine2.style.width = percentage2 + "%";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const inputDrop2 = document.getElementById("inputDrop2");
  const dropdownIcon2 = document.getElementById("dropdownIcon2");
  const dropdownList2 = document.getElementById("dropdownList2");

  // Toggle dropdown visibility
  inputDrop2.addEventListener("click", function () {
    dropdownList2.style.display =
      dropdownList2.style.display === "flex" ? "none" : "flex";
    dropdownIcon2.style.transform =
      dropdownList2.style.display === "flex"
        ? "rotate(180deg)"
        : "rotate(0deg)";
  });

  // Handle item selection
  dropdownList2.addEventListener("click", function (e) {
    if (e.target.classList.contains("input-dropdown__item2")) {
      inputDrop2.value = e.target.textContent;
      dropdownList2.style.display = "none";
      dropdownIcon2.style.transform = "rotate(0deg)";
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!inputDrop2.contains(e.target) && !dropdownList2.contains(e.target)) {
      dropdownList2.style.display = "none";
      dropdownIcon2.style.transform = "rotate(0deg)";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const inputDrop3 = document.getElementById("inputDrop3");
  const dropdownIcon3 = document.getElementById("dropdownIcon3");
  const dropdownList3 = document.getElementById("dropdownList3");

  // Toggle dropdown visibility
  inputDrop3.addEventListener("click", function () {
    dropdownList3.style.display =
      dropdownList3.style.display === "flex" ? "none" : "flex";
    dropdownIcon3.style.transform =
      dropdownList3.style.display === "flex"
        ? "rotate(180deg)"
        : "rotate(0deg)";
  });

  // Handle item selection
  dropdownList3.addEventListener("click", function (e) {
    if (e.target.classList.contains("input-dropdown__item3")) {
      inputDrop3.value = e.target.textContent;
      dropdownList3.style.display = "none";
      dropdownIcon3.style.transform = "rotate(0deg)";
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!inputDrop3.contains(e.target) && !dropdownList3.contains(e.target)) {
      dropdownList3.style.display = "none";
      dropdownIcon3.style.transform = "rotate(0deg)";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownList = document.getElementById("dropdownList");
  const dropdownList3 = document.getElementById("dropdownList3");
  const inputDrop = document.getElementById("inputDrop");
  const inputDrop3 = document.getElementById("inputDrop3");

  const externalSizes = ["P10", "P8", "P6", "P5", "P4", "P3", "P2.5"];
  const internalSizes = ["P5", "P4", "P3", "P2.5", "P2", "P1.5"];

  function updateScreenTypeText() {
    const isSmallScreen = window.innerWidth < 991;
    const items = document.querySelectorAll(
      "#dropdownList .input-dropdown__item"
    );

    items.forEach((item) => {
      item.textContent = isSmallScreen
        ? item.getAttribute("data-short")
        : item.getAttribute("data-full");
    });

    // Update the input value based on screen size
    if (
      inputDrop.value === "Зовнішній екран" ||
      inputDrop.value === "Зовнішній"
    ) {
      inputDrop.value = isSmallScreen ? "Зовнішній" : "Зовнішній екран";
    } else if (
      inputDrop.value === "Внутрішній екран" ||
      inputDrop.value === "Внутрішній"
    ) {
      inputDrop.value = isSmallScreen ? "Внутрішній" : "Внутрішній екран";
    }
  }

  dropdownList.addEventListener("click", function (event) {
    if (event.target.classList.contains("input-dropdown__item")) {
      inputDrop.value = event.target.getAttribute("data-full");

      // Clear current options in the size dropdown
      dropdownList3.innerHTML = "";

      let sizes = [];
      if (inputDrop.value === "Зовнішній екран") {
        sizes = externalSizes;
      } else if (inputDrop.value === "Внутрішній екран") {
        sizes = internalSizes;
      }

      // Populate the size dropdown with the relevant options
      sizes.forEach((size) => {
        const li = document.createElement("li");
        li.classList.add("input-dropdown__item3");
        li.textContent = size;
        dropdownList3.appendChild(li);
      });

      // Update the value of the size input to the first size in the list
      if (sizes.length > 0) {
        inputDrop3.value = sizes[0];
      }
    }
  });

  dropdownList3.addEventListener("click", function (event) {
    if (event.target.classList.contains("input-dropdown__item3")) {
      inputDrop3.value = event.target.textContent;
    }
  });

  // Initial update
  updateScreenTypeText();

  // Update on resize
  window.addEventListener("resize", updateScreenTypeText);
});
