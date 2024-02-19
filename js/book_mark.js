const bookMark = (function () {
  const BOOKMARK_KEY = "book_marks";
  const savedBookMarks = localStorage.getItem(BOOKMARK_KEY);
  let bookMarks = [];

  const elements = {
    $bookMarkIcon: document.getElementsByClassName("icon")[0],
    $bookMarkContainer: document.getElementById("book-mark-list-container"),
    $bookMarkForm: document.querySelector("#book-mark-list-container form"),
    $urlNameInput: document.querySelector("#book-mark-list-container input"),
    $urlInput: document.querySelector("#book-mark-list-container div > input"),
    $bookMarkList: document.getElementById("book-mark-list"),
  };

  const common = {
    paintingBookMark: function (urlObj) {
      const li = document.createElement("li");
      const div = document.createElement("div");
      const iconSpan = document.createElement("span");
      const a = document.createElement("a");
      const deleteSpan = document.createElement("span");

      li.id = urlObj.id;
      iconSpan.innerText = "★";
      a.innerText = urlObj.name;
      a.href = urlObj.url;
      a.target = "_blank";
      deleteSpan.innerText = "x";
      deleteSpan.addEventListener("click", handleEvent.deleteBookMarkList);

      div.appendChild(iconSpan);
      div.appendChild(a);
      li.appendChild(div);
      li.appendChild(deleteSpan);
      elements.$bookMarkList.appendChild(li);
    },
    savingBookMark: function () {
      localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookMarks));
    },
    paintingSavedBookMarks: function () {
      const parseBookMarks = JSON.parse(savedBookMarks);
      if (parseBookMarks && parseBookMarks.length > 0) {
        bookMarks = parseBookMarks;
        parseBookMarks.forEach(this.paintingBookMark);
      }
    },
  };

  const handleEvent = {
    clickIcon: function () {
      elements.$bookMarkContainer.classList.toggle("hidden");
    },
    SubmitBookMarkForm: function (e) {
      e.preventDefault();

      const newUrlName = elements.$urlNameInput.value;
      const newUrl = elements.$urlInput.value;

      elements.$urlNameInput.value = "";
      elements.$urlInput.value = "";

      const urlObj = {
        id: Date.now(),
        name: newUrlName,
        url: newUrl,
      };

      bookMarks.push(urlObj);
      common.paintingBookMark(urlObj);
      common.savingBookMark();
    },
    deleteBookMarkList: function (e) {
      const li = e.target.parentElement;
      const id = parseInt(li.id);

      li.remove();
      bookMarks = bookMarks.filter((bookMark) => bookMark.id !== id);
      common.savingBookMark();
    },
  };

  elements.$bookMarkIcon.addEventListener("click", handleEvent.clickIcon);
  elements.$bookMarkForm.addEventListener(
    "submit",
    handleEvent.SubmitBookMarkForm
  );

  common.paintingSavedBookMarks();
})();
