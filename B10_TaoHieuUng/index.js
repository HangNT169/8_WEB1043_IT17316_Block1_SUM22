// On tap:
// B1: Tao 3 button . Khi click vao tung button => Show image tuong ung
function changeImage(img) {
  let result = document.getElementById("result");
  result.innerHTML = `<img src ='${img}'/>`;
}
// B2: Tao 2 button. Click vao tung button thi add them background coclor cho tex
let title = document.getElementsByTagName("p")[2];
let red = document.getElementById("redBtn");
let blue = document.getElementById("blueBtn");
// C2: Khi goi ham
redBtn.onclick = function () {
  title.style.backgroundColor = "red";
};

blueBtn.onclick = function () {
  title.style.backgroundColor = "blue";
};

// B3: Khi di chuot vao anh thi chuyen thanh 1 anh khac
function onMouseOverEvent() {
  document.img_pet.src = "images/cat.jpg";
}
function onMouseOutEvent() {
  document.img_pet.src = "images/dog.jpg";
}
