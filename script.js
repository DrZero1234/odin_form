const form = document.querySelector("form");

const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

email.addEventListener("input", (event) => {
  const error = document.getElementById(event.target.id + "-error");
  console.log(error);
  if (email.validity.valid) {
    error.className = "error";
    error.textContent = "";
  } else {
    error.textContent = "Invalid email";
  }
});
