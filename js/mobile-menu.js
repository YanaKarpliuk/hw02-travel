window.addEventListener("load", function () {
  const mobileMenu = document.querySelector(".js-mobile-menu");
  const closeBtn = document.querySelector(".js-close");
  const openBtn = document.querySelector(".js-open");

  function openMenu() {
    mobileMenu.classList.add("mobile-menu_opened");
    mobileMenu.classList.remove("mobile-menu_closed");
  }

  openBtn.addEventListener("click", openMenu);

  function closeMenu() {
    mobileMenu.classList.add("mobile-menu_closed");
    mobileMenu.classList.remove("mobile-menu_opened");
  }

  closeBtn.addEventListener("click", closeMenu);
});
