const bookMarkIcon = document.getElementById("book-mark-icon");
const bookMarkContainer = document.getElementById("book-mark-list-container");
const bookMarkForm = bookMarkContainer.querySelector("form");
const urlNameInput = bookMarkContainer.querySelector("input");
const urlInput = bookMarkContainer.querySelector("div > input");
const bookMarkList = document.getElementById("book-mark-list");

const BOOKMARK_KEY = "book_marks";

let bookMarks = [];

const bookMarkCommon = {
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
    deleteSpan.addEventListener(
      "click",
      handleEventBookMark.deleteBookMarkList
    );

    div.appendChild(iconSpan);
    div.appendChild(a);
    li.appendChild(div);
    li.appendChild(deleteSpan);
    bookMarkList.appendChild(li);
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

const handleEventBookMark = {
  clickIcon: function () {
    bookMarkContainer.classList.toggle("hidden");
  },
  SubmitBookMarkForm: function (e) {
    e.preventDefault();

    const newUrlName = urlNameInput.value;
    const newUrl = urlInput.value;

    urlNameInput.value = "";
    urlInput.value = "";

    const urlObj = {
      id: Date.now(),
      name: newUrlName,
      url: newUrl,
    };

    bookMarks.push(urlObj);
    bookMarkCommon.paintingBookMark(urlObj);
    bookMarkCommon.savingBookMark();
  },
  deleteBookMarkList: function (e) {
    const li = e.target.parentElement;
    const id = parseInt(li.id);

    li.remove();
    bookMarks = bookMarks.filter((bookMark) => bookMark.id !== id);
    bookMarkCommon.savingBookMark();
  },
};

bookMarkIcon.addEventListener("click", handleEventBookMark.clickIcon);
bookMarkForm.addEventListener("submit", handleEventBookMark.SubmitBookMarkForm);

const savedBookMarks = localStorage.getItem(BOOKMARK_KEY);
bookMarkCommon.paintingSavedBookMarks();
