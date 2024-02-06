const showDate = document.querySelector("#todo-list-container h3");

(function () {
  const getDate = new Date();

  const today = {
    year: getDate.getFullYear(),
    month: getDate.getMonth() + 1,
    date: getDate.getDate(),
  };

  showDate.innerText = `${today.year}.${String(today.month).padStart(
    2,
    0
  )}.${String(today.date).padStart(2, 0)} To Do List`;
})();
