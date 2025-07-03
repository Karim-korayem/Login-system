// dom selctions
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const loginBtn = document.querySelector("#loginBtn");
const successMsg = document.querySelector("#successMsg");
const errorMsg = document.querySelector("#errorMsg");
const form = document.querySelector("form");
// variables
let usersArray = [];

// main logic
if (localStorage.getItem("Users") !== null) {
  usersArray = JSON.parse(localStorage.getItem("Users"));
}
// expressions functions
const loginUser = () => {
  errorMsg.classList.replace("d-block", "d-none");
  for (let i = 0; i < usersArray.length; i++) {
    if (
      usersArray[i].email === userEmail.value &&
      usersArray[i].password === userPassword.value
    ) {
      successMsg.classList.replace("d-none", "d-block");
      localStorage.setItem("UserName", usersArray[i].name);
      setTimeout(() => {
        window.location.href = "/Login-system/pages/home.html";
      }, 1000);
      return;
    }
  }

  errorMsg.classList.replace("d-none", "d-block");
};

// event listeners
loginBtn.addEventListener("click", loginUser);
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
