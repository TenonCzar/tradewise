// // WORKING ON SIGNUP
const formDoc = document.getElementById("form");
const emailMessage = document.querySelector(".mail-error");
const passwordMessage = document.querySelector(".pword-error");
const modes = document.querySelector(".modes");

formDoc.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(formDoc));
  let valid = true;

  console.log(formData);

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
  if (formData.password.includes("admin", "Admin")) {
    passwordMessage.innerText = "Password Cannot Include Admin";
    passwordMessage.style.color = "red";
    valid = false;
  }
//   if (formData.password.length > 20) {
//     passwordMessage.innerText = "Password Cannot Be More Than 20";
//     passwordMessage.style.color = "red";
//     valid = false;
//   }
//   if (!formData.password.length > 5 ) {
//     passwordMessage.innerText = "Password Cannot Be less Than 6";
//     passwordMessage.style.color = "red";
//     valid = false;
//   }
});
