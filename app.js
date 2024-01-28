// 자바스크립트 코드 작성
// 자바스크립트 파일에서는 다른 css 코드를 작성하는 것보다는, html 요소를 가지고 제어하는 코드만 작성하는 것이 좋다.
// css 코드는 css 파일에서만 작성하는 것이 가장 이상적!
const h1 = document.querySelector("div.hello:first-child h1");

const handleTitleClick = function () {
  // const currentClassList = h1.classList;
  const activeClass = "active";

  // if (currentClassList.contains(activeClass)) {
  //   h1.classList.remove(activeClass);
  // } else {
  //   h1.classList.add(activeClass);
  // }

  // 위의 코드를 아래와 같은 toggle 메서드로 사용 가능! -> 훨씬 더 간단하게 구현 가능
  h1.classList.toggle(activeClass);
};

h1.addEventListener("click", handleTitleClick);
