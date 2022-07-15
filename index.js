"use strict";

function imgSlider(anything) {
  document.querySelector(".bubble").src = anything;
}

const menuBar = document.querySelector(".Menu-bar");
const navBar = document.querySelector(".nav-bar");

menuBar.addEventListener("click", function () {
  menuBar.classList.toggle("active");
  navBar.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", function () {
    menuBar.classList.remove("active");
    navBar.classList.add("active");
  })
);
