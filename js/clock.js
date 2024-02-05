const showClock = document.getElementById("clock");

const getClock = function () {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  showClock.innerText = `${hours}:${minutes}:${seconds}`;
};

// 1초 뒤에 시계가 표시되는 것을 방지하기 위해 getClock함수 실행
getClock();
setInterval(getClock, 1000);
