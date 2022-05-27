/**
 * 1. Dom la gi?
 * - Document Object Modalinh:
 * 2. Truy xuat phan tu
 * - Node : thuoc tinh, phuong thuc
 * + thuoc tinh: dac diem , dai dien cho node day
 * +phuong thuc: the su thao tac: truy cap, them , sua xoa
 *
 * On lai CSS selector:
 * 1. Basic selector
 * // C1: Element selector: p{}
 * // C2: Class selector .class{}
 * // C3: ID selector #id{}
 * // C4: Universal select : *: all phan tu
 *2. Selector nang cao
 // https://niithanoi.edu.vn/8-loai-css-selector.html
 */

// Cac cach truy xuat phan tu:
// C1: Truy xuat phan tu bang ID
// let x1 = document.getElementById("hienthi");
// // thay doi mau
// x1.style.color = "red";
// // thay doi text : innerHTML hoac innerText
// x1.innerHTML = "Thay doi text";

// // C2: Truy xuat phan tu bang class Name
// let x2 = document.getElementsByClassName("header");
// console.log(x2.length);

// // C3: Truy xuat phan tu bang tag name
// let x3 = document.getElementsByTagName("p");
// console.log(x3.length);

// // C4: Truy xuat phan tu bang CSS Selector
// let x4 = document.querySelectorAll("div p");
// console.log(x4.length);

// BT: Tao 1 button. Khi click vao button => hien thi anh
function hienThiAnh() {
  let hienThi = document.getElementById("hienThi");
  hienThi.innerHTML =
    "<img src ='https://img.thuthuatphanmem.vn/uploads/2018/09/25/hinh-anh-hoa-cuc-cau-vong-dep_110817989.jpg'>";
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
var child = document.getElementById("p1");
child.parentNode.removeChild(child);
