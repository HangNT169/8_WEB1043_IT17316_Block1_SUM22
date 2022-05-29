//bài 1
function tinhToan(n) {
  let a = document.getElementById("input1");
  let b = document.getElementById("input2");
  let kq = document.getElementById("kq");
  if (
    isNaN(a.value) == false &&
    isNaN(b.value) == false &&
    a.value.length > 0 &&
    b.value.length > 0
  ) {
    if (n == "cong") {
      let sum = Number(a.value) + Number(b.value);
      kq.innerHTML = sum;
    } else if (n == "tru") {
      let hieu = Number(a.value) - Number(b.value);
      kq.innerHTML = hieu;
    } else if (n == "nhan") {
      let tich = Number(a.value) * Number(b.value);
      kq.innerHTML = tich;
    } else {
      let thuong = Number(a.value) / Number(b.value);
      kq.innerHTML = thuong;
    }
  } else {
    alert(`Bạn để trống hoặc không nhập số, mời nhập lại`);
  }
}

//bài 2
function Add() {
  let input = document.getElementById("input3");
  if (input.value.length == 0) {
    alert("Không được để trống, mời nhập lại");
  } else {
    let hienthi = document.getElementById("resultBai2");
    hienthi.insertAdjacentHTML("afterbegin", "<p id='ds'></p>");
    let newHienThi = document.getElementById("ds");
    newHienThi.innerText = input.value;
  }
}
//bài 3
function deleteRow(x) {
  let row = x.parentElement.parentElement; //có thể dùng let row = x.parentNode.parentNode; (nodeName: dùng để đọc tên của cha)
  //sự khác biệt giữa parentElement và parentNode là parentElement trả về giá trị null nếu node cha không phải là node phần tử => parentElement là null
  row.remove(row);
  //hoặc là row.ParentElement.RemoveChild(row);
}
