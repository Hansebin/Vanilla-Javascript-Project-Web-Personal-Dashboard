const clock = (function () {
  const clockObj = {
    $showClock: document.getElementById("clock"),
    getClock: function () {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      this.$showClock.innerText = `${hours}:${minutes}:${seconds}`;
    },
  };

  clockObj.getClock();
  setInterval(clockObj.getClock.bind(clockObj), 1000);
})();
