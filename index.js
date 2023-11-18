const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const body = document.querySelector(".body");

menu.addEventListener("click", () => {
  nav.classList.add("nav--visible");
  nav.classList.remove("nav--invisible");
  menu.classList.add("menu--hide");
  close.classList.add("close--show");
  body.classList.add("body--no-scroll");
});

close.addEventListener("click", () => {
  nav.classList.remove("nav--visible");
  nav.classList.add("nav--invisible");
  menu.classList.remove("menu--hide");
  close.classList.remove("close--show");
  body.classList.remove("body--no-scroll");
});
