const formBox = document.querySelector(".form-box");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

showSignup.addEventListener("click", () => {
    formBox.style.transform = "translateX(-50%)";
});

showLogin.addEventListener("click", () => {
    formBox.style.transform = "translateX(0)";
});

