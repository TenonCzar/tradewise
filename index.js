"use strict";

// variables;

const signUpBtn = document.getElementById("signupbtn");
const signInBtn = document.getElementById("signinbtn");

const toggleOpen = document.getElementById("opennav");
const toggleClose = document.getElementById("closenav");

const featureLesson = document.querySelector(".featured");
const navBar = document.querySelector("#navbar");
const darkMood = document.getElementById("darkmode");
const lightMood = document.getElementById("lightmode");
const featured = document.querySelector(".featured-text");
const header = document.getElementById("header");
document.body.style.background = "#161058";

// window.onload = function () {
//   // Get the current URL
//   var url = window.location.href;

//   // Check if the URL ends with ".html"
//   if (url.endsWith(".html")) {
//     // Redirect to the same URL without ".html"
//     var newUrl = url.replace(".html", "");
//     window.location.href = newUrl;
//   }
// };

// nav toggle
toggleOpen.addEventListener("click", function () {
  navBar.classList.remove("hidden");
  toggleClose.classList.toggle("hidden");
  toggleOpen.classList.toggle("hidden");
});
toggleClose.addEventListener("click", function () {
  navBar.classList.toggle("hidden");
  toggleClose.classList.toggle("hidden");
  toggleOpen.classList.toggle("hidden");
});

//  STYLING DARK MODE
darkMood.addEventListener("click", function () {
  darkMood.classList.toggle("hidden");
  lightMood.classList.toggle("hidden");
  document.body.style.backgroundColor = "";
  document.body.style.color = "";
  featured.style.color = "";
  header.style.backgroundColor = "";
  navBar.style.backgroundColor = "";
});

lightMood.addEventListener("click", function () {
  lightMood.classList.add("hidden");
  darkMood.classList.remove("hidden");
  document.body.style.backgroundColor = "white";
  document.body.style.color = "#161058";
  featured.style.color = "#161058";
  header.style.backgroundColor = "";
});

signInBtn.addEventListener("click", () => {
  window.location.href = "/signin.html";
});
signUpBtn.addEventListener("click", () => {
  window.location.href = "/signup.html";
});
