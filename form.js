// // WORKING ON SIGNUP
const formDoc = document.getElementById("form");
const btn = document.getElementById('submit-btn')
const message = document.querySelector(".name-error");
const emailMessage = document.querySelector(".mail-error");
const passwordMessage = document.querySelector(".pword-error");
const numberMessage = document.querySelector(".num-error");
const darkMood = document.getElementById("darkmode");
const lightMood = document.getElementById("lightmode");
const modes = document.querySelector(".modes");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(formDoc));
  let valid = true;

  console.log(formData);

  // Checking name validity
  if (!formData.name) {
    message.innerText = "Name Cannot Be Blank";
    message.style.color = "red";
    valid = false;
  }
  if (formData.name < 5) {
    message.innerText = "Please Input Correct Name";
    message.style.color = "red";
    valid = false;
  }

  // Checking Email Validity
  if (!formData.email) {
    emailMessage.innerText = "Email Cannot Be Blank";
    emailMessage.style.color = "red";
    valid = false;
  }
  if (!formData.email.includes("@") || !formData.email.includes(".com")) {
    emailMessage.innerText = "Invalid Email";
    emailMessage.style.color = "red";
    valid = false;
  }

  // Checking Password
  if (!formData.password) {
    passwordMessage.innerText = "Password Cannot Be Blank";
    passwordMessage.style.color = "red";
    valid = false;
  }

  if (formData.password.length > 20) {
        passwordMessage.innerText = "Password Cannot Be More Than 20"
        passwordMessage.style.color = "red";
        valid = false;
      }
  // if (!formData.password.includes('@' || '#' || '$' || '%' || '&' || '*' || '(' || ')' || '_' || '-' || '~')) {
  //   passwordMessage.innerText = "Password Must Include Symbols and Numbers";
  //   passwordMessage.style.color = "red";
  //   valid = false;
  // }

  // Checking Mobile Number
  if (!formData.mobile) {
    numberMessage.innerText = "Please Input Mobile Number";
    numberMessage.style.color = "red";
    valid = false;
  }

  // If form Is not valid
  if (!valid) {
    return;
  }

  let redirect = 20000;
  function delayInSeconds() {
    window.location = "./crypto/courses.html";

    setTimeout(() => {}, redirect);
  }
  delayInSeconds();

  document.getElementById('submit-btn').innerText = 'Loading...'
});

// modes.style.display = "none";

darkMood.addEventListener("click", function () {
  darkMood.classList.add("hidden");
  lightMood.classList.remove("hidden");
  document.body.style.backgroundColor = "#161058";
  document.body.style.color = "white";
  formDoc.style.backgroundColor = "transparent";
});

lightMood.addEventListener("click", function () {
  lightMood.classList.add("hidden");
  darkMood.classList.remove("hidden");
  document.body.style.backgroundColor = "white";
  document.body.style.color = "#161058";
});

modes.style.backgroundColor = 'transparent'
modes.style.width = "60px"