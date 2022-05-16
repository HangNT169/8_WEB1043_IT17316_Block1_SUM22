// cac ham
function tinhTong(a, b) {
  return a + b;
}
alert(tinhTong(4, 5));

function tinhTongKhongCoKieuTraVe() {
  let name = prompt("Ten");
  console.log(name);
}
tinhTongKhongCoKieuTraVe();

//ES5, ES6
let tinhTongES5 = function (a, b = 2) {
  return a + b;
};
alert(tinhTongES5(3)); // co the chi can truyen 1 so

let tinhTongES6 = (a, b = 4) => {
  return a + b;
};
alert(tinhTongES6(5, 3));

let confirmText = () => {
  let ok = confirm("Yes/No");
  if (ok) {
    alert("co");
  } else {
    alert("Khong");
  }
};

confirmText();

let clickMe = () => {
  alert("hien thi thong bao");
};

let showImage = (dovat) => {
  if (dovat == "anh1") {
    document.write("<img src='img/img1.jpeg'>");
  } else {
    document.write("<img src='img/img2.jpeg'>");
  }
};
