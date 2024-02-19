const title = (function () {
  const HIDDEN_CLASS = "hidden";
  const USERNAME_KEY = "username";
  const getUserName = localStorage.getItem(USERNAME_KEY);

  const elements = {
    $loginForm: document.getElementById("login-from"),
    $loginInput: document.querySelector("#login-from input"),
    $titleContainer: document.getElementById("greeting-container"),
    $title: document.getElementById("greeting"),
    $titleBtn: document.querySelector("#greeting-container button"),
    $toDoFormContainer: document.getElementById("todo-form-container"),
    $logoutContainer: document.getElementById("logout-container"),
  };

  const common = {
    paintingTitle: function (username) {
      elements.$titleContainer.classList.remove(HIDDEN_CLASS);
      elements.$toDoFormContainer.classList.remove(HIDDEN_CLASS);
      elements.$logoutContainer.classList.remove(HIDDEN_CLASS);
      elements.$title.innerText = `Hello, ${username}!`;
    },
    playLoginForm: function () {
      elements.$loginForm.classList.remove(HIDDEN_CLASS);
      elements.$loginForm.addEventListener(
        "submit",
        handleEvent.submitLoginForm
      );
    },
  };

  const handleEvent = {
    submitLoginForm: function (e) {
      e.preventDefault();

      const usernameInput = elements.$loginInput.value;
      localStorage.setItem(USERNAME_KEY, usernameInput);
      elements.$loginInput.value = "";

      elements.$loginForm.classList.add(HIDDEN_CLASS);
      common.paintingTitle(usernameInput);
    },
    clickRenameBtn: function () {
      localStorage.removeItem(USERNAME_KEY);
      elements.$titleContainer.classList.add(HIDDEN_CLASS);
      elements.$toDoFormContainer.classList.add(HIDDEN_CLASS);
      elements.$logoutContainer.classList.add(HIDDEN_CLASS);
      common.playLoginForm();
    },
  };

  if (getUserName === null) {
    common.playLoginForm();
    elements.$logoutContainer.classList.add(HIDDEN_CLASS);
  } else {
    common.paintingTitle(getUserName);
    elements.$toDoFormContainer.classList.remove(HIDDEN_CLASS);
    elements.$logoutContainer.classList.remove(HIDDEN_CLASS);
    elements.$titleBtn.addEventListener("click", handleEvent.clickRenameBtn);
  }
})();
