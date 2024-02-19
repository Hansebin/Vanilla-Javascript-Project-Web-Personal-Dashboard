const date = (function () {
  const dateObj = {
    $listDate: document.querySelector("#todo-list-container h3"),
    $titleDate: document.querySelector("section #date"),
    getDate: function () {
      const currentDate = new Date();
      return {
        year: currentDate.getFullYear(),
        month: currentDate.getMonth() + 1,
        date: currentDate.getDate(),
      };
    },
    innerDateList: function () {
      const today = this.getDate();
      this.$listDate.innerText = `${today.year}.${String(today.month).padStart(
        2,
        0
      )}.${String(today.date).padStart(2, 0)} To Do List`;
    },
    innerDateTitle: function () {
      const today = this.getDate();
      this.$titleDate.innerText = `${today.year}.${String(today.month).padStart(
        2,
        0
      )}.${String(today.date).padStart(2, 0)}`;
    },
  };

  dateObj.innerDateList();
  dateObj.innerDateTitle();
})();
