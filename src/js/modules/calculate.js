document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо елементи DOM
  const slider = document.getElementById("slider");
  const inputValue = document.getElementById("inputValue");
  const rangeLine = document.querySelector(".range-line");

  // Функція для форматування значення в бажаний формат
  function formatValue(value) {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " m";
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
    // Оновлюємо значення на бігунку, видаляючи кому та " m"
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
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " m";
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
    // Оновлюємо значення на бігунку, видаляючи кому та " m"
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
