const bxButton = document.querySelector(".bx");
const modalMobile = document.querySelector(".modal-mobile");

bxButton.addEventListener("click", () => {
  bxButton.classList.toggle("bx-active");
  modalMobile.classList.toggle("modal-mobile-active");
});
