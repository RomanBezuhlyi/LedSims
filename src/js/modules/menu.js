document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const burgerButton = document.querySelector(".header__burger");
  const navMenu = document.querySelector(".header__nav");
  const navCloseButton = document.querySelector(".header__nav-close");
  const navItems = document.querySelectorAll(".header__nav-item");

  // Toggle mobile menu
  function toggleMobileMenu() {
    navMenu.classList.toggle("show");
  }

  // Close mobile menu if clicked outside
  function closeMobileMenuIfClickedOutside(event) {
    if (
      !navMenu.contains(event.target) &&
      !burgerButton.contains(event.target)
    ) {
      navMenu.classList.remove("show");
      document.removeEventListener("click", closeMobileMenuIfClickedOutside);
    }
  }

  // Event listener for burger button
  burgerButton.addEventListener("click", function (event) {
    toggleMobileMenu();
    event.stopPropagation();
    // Add event listener to close menu if clicked outside
    document.addEventListener("click", closeMobileMenuIfClickedOutside);
  });

  // Event listener for close button
  navCloseButton.addEventListener("click", function () {
    toggleMobileMenu();
    document.removeEventListener("click", closeMobileMenuIfClickedOutside);
  });

  // Event listener for navigation items
  navItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      // Add the 'active' class to the clicked item
      navItems.forEach(function (item) {
        item.classList.remove("active");
      });
      item.classList.add("active");

      // Save the index of the clicked item in local storage
      localStorage.setItem("selectedNavItemIndex", index);
    });
  });

  // Set the 'active' class based on local storage on page load
  const selectedNavItemIndex = localStorage.getItem("selectedNavItemIndex");
  if (selectedNavItemIndex !== null) {
    navItems.forEach(function (item, index) {
      item.classList.toggle(
        "active",
        index.toString() === selectedNavItemIndex
      );
    });
  }
});
