// // WORKING ON SIGNUP
const formDoc = document.getElementById("form");
const message = document.querySelector(".name-error");
const emailMessage = document.querySelector(".mail-error");
const passwordMessage = document.querySelector(".pword-error");
const numberMessage = document.querySelector(".num-error");
const modes = document.querySelector(".modes");

formDoc.addEventListener("submit", (e) => {
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
});

modes.style.display = "none";
