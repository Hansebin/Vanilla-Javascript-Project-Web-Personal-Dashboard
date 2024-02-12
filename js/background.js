const background = (function () {
  const bgObj = {
    imgArr: ["img01.jpeg", "img02.jpeg", "img03.jpeg"],
    maxImg: 0,
    $bgImg: document.createElement("img"),
    currentImg: "",
    getBgImg: function () {
      this.maxImg = this.imgArr.length;
      this.currentImg = this.imgArr[Math.floor(Math.random() * this.maxImg)];
      this.$bgImg.src = `img/${this.currentImg}`;
      document.body.appendChild(this.$bgImg);
    },
  };

  bgObj.getBgImg();
})();
