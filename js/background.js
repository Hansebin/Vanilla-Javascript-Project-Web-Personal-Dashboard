const images = ["img01.jpeg", "img02.jpeg", "img03.jpeg"];

const maxImg = images.length;
const bgImg = document.createElement("img");

const getBgImg = function () {
  const currentImg = images[Math.floor(Math.random() * maxImg)];
  bgImg.src = `img/${currentImg}`;
  document.body.appendChild(bgImg);
};

getBgImg();
