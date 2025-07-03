// DOM selections
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const registerBtn = document.querySelector("#registerBtn");
const successMsg = document.querySelector("#successMsg");
const errorMsg = document.querySelector("#errorMsg");
const invalidMsg = document.querySelector("#invalidMsg");
const form = document.querySelector("form");

// variables
let usersArray = [];
if (localStorage.getItem("Users") !== null) {
  usersArray = JSON.parse(localStorage.getItem("Users"));
}

// expressions functions
const validateInputs = (input) => {
  const regex = {
    userName: /^[A-Z][a-z]{2,9}$/,
    userEmail:
      /^[a-z0-9_-]{2,20}@(gmail|yahoo|outlook|hotmail)\.(com|org|net)$/,
    userPassword: /^[A-Z][a-z0-9]{3,20}[!@#$%^&*]$/,
  };
  if (regex[input.id].test(input.value)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
};
const registerUser = function () {
  errorMsg.classList.replace("d-block", "d-none");
  if (
    validateInputs(userName) &&
    validateInputs(userEmail) &&
    validateInputs(userPassword)
  ) {
    invalidMsg.classList.replace("d-block", "d-none");
    for (let i = 0; i < usersArray.length; i++) {
      if (usersArray[i].email === userEmail.value) {
        errorMsg.classList.replace("d-none", "d-block");
        return;
      }
    }
    const user = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    };
    usersArray.push(user);
    localStorage.setItem("Users", JSON.stringify(usersArray));
    successMsg.classList.replace("d-none", "d-block");
    setTimeout(function () {
      window.location.href = "/Login-system/pages/login.html";
    }, 1000);
    console.log(usersArray);
  } else {
    invalidMsg.classList.replace("d-none", "d-block");
  }
};

// event listeners
registerBtn.addEventListener("click", function () {
  registerUser();
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
userName.addEventListener("input", () => {
  validateInputs(userName);
});
userEmail.addEventListener("input", () => {
  validateInputs(userEmail);
});
userPassword.addEventListener("input", () => {
  validateInputs(userPassword);
});
