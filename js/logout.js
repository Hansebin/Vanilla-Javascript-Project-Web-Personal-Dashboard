const logout = (function () {
  const HIDDEN_CLASS = "hidden";
  const USERNAME_KEY = "username";
  const getUserName = localStorage.getItem(USERNAME_KEY);

  const elements = {
    $logoutIcon: document.querySelector("#logout-container .icon-container"),
    $logoutContainer: document.getElementById("logout-container"),
    $logoutBox: document.querySelector("#logout-container form"),
    $logoutBtn: document.querySelector("#logout-container form button"),
  };

  const handleEvent = {
    ClickIcon: function () {
      elements.$logoutBox.classList.toggle(HIDDEN_CLASS);
    },
    SubmitLogoutForm: function (e) {
      e.preventDefault();
      localStorage.clear();
      location.reload();
    },
  };

  elements.$logoutIcon.addEventListener("click", handleEvent.ClickIcon);
  elements.$logoutBtn.addEventListener("click", handleEvent.SubmitLogoutForm);

  if (getUserName === null) {
    elements.$logoutContainer.classList.add(HIDDEN_CLASS);
  } else {
    elements.$logoutContainer.classList.remove(HIDDEN_CLASS);
  }
})();
