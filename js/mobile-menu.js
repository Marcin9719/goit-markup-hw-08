const menuOverlay = document.querySelector(".pop-up__overlay");
const closeMenuButton = document.querySelector(".pop-up__button-close");
const openMenuBtn = document.querySelector(".header__button-open");

openMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.remove("invisible");
});

closeMenuButton.addEventListener("click", (e) => {
  menuOverlay.classList.add("invisible");
});
