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

  // Event listener for navigation items (without active link highlighting)
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Handle click event if needed, but no active class toggling
    });
  });
});
