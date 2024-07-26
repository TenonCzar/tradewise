"use strict";

const toggleOpen = document.getElementById("opennav");
const toggleClose = document.getElementById("closenav");
const mainNav = document.querySelector(".navlist");
const featureLesson = document.querySelector(".featured");
const navBar = document.querySelector("#navbar");
const darkMood = document.getElementById("darkmode");
const lightMood = document.getElementById("lightmode");
const featured = document.querySelector(".featured-text");
const header = document.getElementById("header");

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

darkMood.addEventListener("click", function () {
  darkMood.classList.add("hidden");
  lightMood.classList.remove("hidden");
  document.body.style.backgroundColor = "#161058";
  document.body.style.color = "white";
  featured.style.color = "white";
  header.style.backgroundColor = "#161058";
  navBar.style.backgroundColor = "transparent";
});

lightMood.addEventListener("click", function () {
  lightMood.classList.add("hidden");
  darkMood.classList.remove('hidden');
  document.body.style.backgroundColor = "white";
  document.body.style.color = "#161058";
  featured.style.color = "";
  header.style.backgroundColor = "";
});
