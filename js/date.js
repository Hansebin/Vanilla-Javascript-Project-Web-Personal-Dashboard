const date = (function () {
  const dateObj = {
    $showDate: document.querySelector("#todo-list-container h3"),
    getDate: function () {
      const currentDate = new Date();
      const toady = {
        year: currentDate.getFullYear(),
        month: currentDate.getMonth() + 1,
        date: currentDate.getDate(),
      };
      this.$showDate.innerText = `${toady.year}.${String(toady.month).padStart(
        2,
        0
      )}.${String(toady.date).padStart(2, 0)} To Do List`;
    },
  };

  dateObj.getDate();
})();
