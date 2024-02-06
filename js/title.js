const loginForm = document.getElementById("login-from");
const loginInput = document.querySelector("#login-from input");
const title = document.getElementById("greeting");
const toDoFormContainer = document.getElementById("todo-form-container");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const getUserName = localStorage.getItem(USERNAME_KEY);

const titleCommon = {
  paintingTitle: function (username) {
    title.classList.remove(HIDDEN_CLASS);
    toDoFormContainer.classList.remove(HIDDEN_CLASS);
    title.innerText = `Hello, ${username}!`;
  },
};

const handleEventTitle = {
  submitLoginForm: function (e) {
    e.preventDefault();

    const usernameInput = loginInput.value;
    localStorage.setItem(USERNAME_KEY, usernameInput);

    loginForm.classList.add(HIDDEN_CLASS);
    titleCommon.paintingTitle(usernameInput);
  },
};

if (getUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", handleEventTitle.submitLoginForm);
} else {
  titleCommon.paintingTitle(getUserName);
  toDoFormContainer.classList.remove(HIDDEN_CLASS);
}
