"use strict";

const toggleOpen = document.getElementById("opennav");
const toggleClose = document.getElementById("closenav");
const mainNav = document.querySelector(".navlist");
const navBar = document.querySelector("#navbar");

toggleOpen.addEventListener("click", function () {
  navBar.classList.remove("hidden");
  toggleClose.classList.remove("hidden");
  toggleOpen.classList.add("hidden");
});
toggleClose.addEventListener("click", function () {
  navBar.classList.add("hidden");
  toggleClose.classList.add("hidden");
  toggleOpen.classList.remove("hidden");
});