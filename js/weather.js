const API_KEY = "cd5c08d32d1af243ff980fcb213801f2";

const geo = {
  onGeoSuccess: function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const nameSpan = document.querySelector("#weather span:first-child");
        const tempSpan = document.querySelector("#weather span:nth-child(2)");
        const weatherSpan = document.querySelector("#weather span:last-child");

        nameSpan.innerText = data.name;
        tempSpan.innerText = data.main.temp;
        weatherSpan.innerText = data.weather[0].main;
      });
  },
  onGeoError: function () {
    console.log("Can't find your position");
  },
};

navigator.geolocation.getCurrentPosition(geo.onGeoSuccess, geo.onGeoError);
