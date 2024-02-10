const loginForm = document.getElementById("login-from");
const loginInput = document.querySelector("#login-from input");
const titleContainer = document.getElementById("greeting-container");
const title = document.getElementById("greeting");
const titleBtn = titleContainer.querySelector("button");
const toDoFormContainer = document.getElementById("todo-form-container");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const getUserName = localStorage.getItem(USERNAME_KEY);

const titleCommon = {
  paintingTitle: function (username) {
    titleContainer.classList.remove(HIDDEN_CLASS);
    toDoFormContainer.classList.remove(HIDDEN_CLASS);
    title.innerText = `Hello, ${username}!`;
  },
  playLoginForm: function () {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", handleEventTitle.submitLoginForm);
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
  clickRenameBtn: function () {
    localStorage.removeItem(USERNAME_KEY);
    titleContainer.classList.add(HIDDEN_CLASS);
    toDoFormContainer.classList.add(HIDDEN_CLASS);
    titleCommon.playLoginForm();
  },
};

if (getUserName === null) {
  titleCommon.playLoginForm();
} else {
  titleCommon.paintingTitle(getUserName);
  toDoFormContainer.classList.remove(HIDDEN_CLASS);
  titleBtn.addEventListener("click", handleEventTitle.clickRenameBtn);
}
