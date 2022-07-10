const form = document.querySelector("form");

// HTML ELEMENTS
const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//REGEX
let EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let ZIPCODE_REGEX = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
let PASSWORD_REGEX =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

error_check = (elem) => {
  console.log();
  let regex;
  const error = document.getElementById(elem.target.id + "-error");
  const elem_name =
    String(elem.target.id).charAt(0).toUpperCase() +
    String(elem.target.id).slice(1);
  if (elem.target.id === "email") {
    text = "Test text";
    regex = EMAIL_REGEX;
  } else if (elem.target.id === "zipcode") {
    regex = ZIPCODE_REGEX;
  } else if (
    elem.target.id === "passowrd" ||
    elem.target.id === "password2"
  ) {
    regex = PASSWORD_REGEX;
  }

  if (elem.srcElement.validity.valueMissing) {
    error.textContent = `You need to enter a valid ${elem_name} value`;
  } else if (elem.srcElement.validity.typeMismatch) {
    error.textContent = `Entered value needs to be an ${elem_name}`;
  }

  // regex test
  let regex_test = regex.test(elem.srcElement.value)
    ? ((error.className = "error"),
      (error.textContent = ""),
      elem.srcElement.setCustomValidity(""))
    : ((((error.textContent = `This is an invalid ${elem_name}`),
      elem.srcElement.setCustomValidity(
        `Please enter a valid ${elem_name}`
      )),
      elem.srcElement.reportValidity()),
      (error.className = "error active"));
};

form.addEventListener("submit", function (event) {
  // if the email field is valid, we let the form submit

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError(email);
  }
  // Then we prevent the form from being sent by canceling the event
  event.preventDefault();
});
email.addEventListener("input", error_check);
zipcode.addEventListener("input", error_check);

/*

function showError() {
  if(email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if(email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
  }

  // Set the styling appropriately
  emailError.className = 'error active';
}

email.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit

  if(!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});


*/
