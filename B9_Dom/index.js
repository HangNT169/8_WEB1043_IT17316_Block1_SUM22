/**
 * 1. Dom la gì?HTML DOM ? Cấu trúc
 * 2. Truy xuat phan tu element
 * 3. Link
 * https://codelearn.io/sharing/thao-tac-voi-dom-bang-javascript
 * https://freetuts.net/dom-la-gi-cac-loai-dom-trong-javascript-366.html
 * https://viblo.asia/p/nhung-khai-niem-co-ban-ve-dom-DzVkpoDgenW
 */
// 1. Dom la gi? HTML DOM?
// Document Object Model
// HTML DOM: cho xem ảnh va gt ?
// Noi về quan hệ cha con, anh em

// 2. Truy xuat phan tu element
// Node: Thuộc tính, phương thức
// Thuộc tính: đặc tính cho node: Mo slide cho xem them cac thuoc tinh cua node
// Phương thức: thể hiện thao tác : Thêm, truy cập, xoá

// Nhắc lại: CSS selector:
// 1. Basic CSS Selector
// C1: Element Selector: h1{},p{}
// C2: Class Selector: .class. Nó chọn tất cả các phần tử có class đã cho.
// C3: ID Selector: #id. Nó chọn tất cả các phần tử có id đã cho.
// C4: Universal selector: *. Nó chọn tất cả các phần tử.:
// 2. Descendant CSS Selector
// Doc them
// https://niithanoi.edu.vn/8-loai-css-selector.html

// => Trong DOM cung giong CSS cung co selector : DOM selector

// 1. Nhắm đến phần tử DOM hàng đầu
// Phần tử html có thể được truy cập bằng document.documentElement
// Phần tử head có thể được truy cập bằng document.head
// Phần tử body có thể được truy cập bằng document.body

// 2. Truy xuat phần tử DOM bằng ID
// let x = document.getElementById("content");
// // thay doi mau
// x.style.color = "black";
// // thay doi text: innerText hoac innerHTML
// x.innerHTML = "Thay doi gia tri";

// 3. Truy xuat phần tử DOM bằng Class Name
// let x = document.getElementsByClassName("nhom1");
// console.log(x.length);
// // Thiết lập h1 thành màu đỏ
// x[0].style.color = "red";
// // Lặp qua từng phần tử và thiết lập nền màu
// for (let i in x) {
//   x[i].style.color = "black";
// }

// 4. Truy xuat đến phần tử DOM bằng Tag Name
// let z = document.getElementsByTagName("p");
// console.log(x.length);
// // Thiết lập màu cho phần tử đầu tiên
// x[0].style.color = "blue";
// // Lặp qua các phần tử lấy được và thiết lập màu nền
// for (let elem in x) {
//   x[elem].style.background = "gray";
// }
// 5. Truy xuat đến phần tử DOM bằng CSS Selector
// Lấy về các phần tử theo CSS Selector
let x5 = document.querySelectorAll("ul li");
// Kiểm tra xem lấy được bao nhiêu phần tử
console.log(x5.length);
// Lặp qua các phần tử li lấy được
// In ra màn hình console
for (var elem of x5) {
  console.log(elem.innerHTML);
}
// Nhắm đến phần tử li có class gachChan
let y = document.querySelectorAll("ul li.gachChan");

// Thêm gạch chân
y[0].style.textDecoration = "underline";

// Demo
// B1: An vao button hien thi anh : Them phan tu vao dom
function hienThiAnh() {
  let hienThi = document.getElementById("hienThi");
  hienThi.innerHTML =
    "<img src = 'https://vcdn1-dulich.vnecdn.net/2021/05/18/VnExpress-MauSon-10-1621330131.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=vcgUl191emOhjwo1IzIDQw'>";
}

// B2: Them node vao element
function add_child() {
  //tạo phần tử p
  var p = document.createElement("p");
  //tạo phần tử text
  var node = document.createTextNode("Some new text");
  //gắn node vào p
  p.appendChild(node);
  //Thay đổi một số thuộc tính của p
  p.appendChild(node);
  p.style.backgroundColor = "red";
  p.style.padding = "10px";
  p.style.color = "white";

  var div = document.getElementById("demo");
  //gắn p vào div
  div.appendChild(p);
}

// Xoa phan tu
var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.removeChild(child);
