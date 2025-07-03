// dom selection
const welcomeMsg = document.querySelector("#welcomeMsg");
const logOutBtn = document.querySelector("#logOutBtn");

// variables
let userName = "";
// expression functions
const logUserOut = () => {
  localStorage.removeItem("UserName");
  welcomeMsg.innerHTML = "Logging Out";
  setTimeout(() => {
    window.location.href = "/login.html";
  }, 1000);
};

// main logic
if (localStorage.getItem("UserName") !== null) {
  userName = localStorage.getItem("UserName");
  welcomeMsg.innerHTML = `welcome ${userName} <i class="fa-solid fa-handshake"></i>`;
} else {
  welcomeMsg.innerHTML = "you're not logged in, redirecting to login page";
  setTimeout(() => {
    window.location.href = "/login.html";
  }, 1000);
}
// event listeners
logOutBtn.addEventListener("click", logUserOut);
