/**
 * Ham co kieu tra ve
 * Ham khong co kieu tra ve
 * https://codelearn.io/sharing/function-javascript
 */
// Cach viet ham
// c1:
// ham khong co kieu tra ve
// function hamKhongCoKieuTraVe(a) {
//   alert("Ham khong co kieu tra ve " + a);
// }

// // cach goi ham: co the goi cung trong 1 file js hoac goi ra file js khac van chay binh thuong
// hamKhongCoKieuTraVe(3);

// function hamCoKieuTraVe(a, b) {
//   return a + b;
// }

// let number = hamCoKieuTraVe(4, 7);
// console.log(hamCoKieuTraVe(4, 7));

// // c2: ES5
// let value = function tinhTongHaiSoES5(a, b = 1) {
//   return a + b;
// };
// console.log("ES5: " + value(3, 5));

// // c3: ES6
// let valueES6 = (a, b = 2) => {
//   return a + b;
// };
// console.log("ES6: " + valueES6(4));

// // 2. Pham vi truy cap
// let t1 = "Bien toan cuc";
// for (let i = 0; i < 5; i++) {
//   let t2 = " Bien cuc bo";
//   console.log("Trong: " + t1);
//   console.log("Trong: " + t2);
// }
// console.log("Ngoai: " + t1);
// console.log("Ngoai: " + t2);

// 3. Xu ly su kien event
function clickMe() {
  alert("Ban vua click vao function Click me");
}
function showImageFirst() {
  //   document.write("<img src='img/img1.jpeg'>");
  document.write("hien thi anh 1");
}

function showImageSecond() {
  //   document.write("<img src='img/img2.jpeg'>");
  document.write("hien thi anh 2");
}
