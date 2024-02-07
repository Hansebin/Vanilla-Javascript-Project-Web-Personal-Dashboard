const bookMarkIcon = document.getElementById("book-mark-icon");
const bookMarkContainer = document.getElementById("book-mark-list-container");
const bookMarkForm = bookMarkContainer.querySelector("form");

const handleEventBookMark = {
  onClickIcon: function () {
    bookMarkContainer.classList.toggle("hidden");
  },
  onSubmitForm: function (e) {
    e.preventDefault();
    console.log("제출 완료!");
  },
};

bookMarkIcon.addEventListener("click", handleEventBookMark.onClickIcon);
bookMarkForm.addEventListener("submit", handleEventBookMark.onSubmitForm);
