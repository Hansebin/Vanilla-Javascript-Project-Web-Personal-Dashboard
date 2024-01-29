const loginForm = document.getElementById("login-from");
const loginInput = document.querySelector("#login-from input");
const title = document.getElementById("greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const getUserName = localStorage.getItem(USERNAME_KEY);

// 공통으로 사용하는 함수
const commonFunc = {
  paintingTitle: function (username) {
    title.classList.remove(HIDDEN_CLASS);
    title.innerText = `Hello, ${username}!`;
  },
};

// event에 사용하는 함수
const handleEvent = {
  submitLoginForm: function (e) {
    e.preventDefault();

    const usernameInput = loginInput.value;
    localStorage.setItem(USERNAME_KEY, usernameInput);

    loginForm.classList.add(HIDDEN_CLASS);
    commonFunc.paintingTitle(usernameInput);
  },
};

if (getUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", handleEvent.submitLoginForm);
} else {
  commonFunc.paintingTitle(getUserName);
}
