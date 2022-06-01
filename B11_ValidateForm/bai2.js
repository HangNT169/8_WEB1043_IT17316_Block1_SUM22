function onChangeKhoaHoc() {
  // truy xuat ra 2 phan tu bang id
  let khoaHocElement = document.getElementById("khoaHoc");
  let hocPhiElement = document.getElementById("hocPhi");
  // xet lai value
  hocPhiElement.value = khoaHocElement.value;
}

function register() {
  // B1: Truy xuat cac phan tu nhap vao
  let inputTexts = document.getElementsByClassName("inputText");

  // B2: Kiem tra cac field vua nhap vao
  for (let i = 0; i < inputTexts.length; i++) {
    //  lay ra doi tuong
    let inputItem = inputTexts.item(i);

    // reset lai gia tri cua error message ve mac dinh
    inputItem.nextElementSibling.innerText = "";
    inputItem.nextElementSibling.style.color = "red";
    inputItem.nextElementSibling.style.fontSize = "10px";

    // Kiem tra neu value rong
    if (inputItem.value === "") {
      inputItem.nextElementSibling.innerText = "* Bắt Buộc";
    } else {
      // Kiem tra email hop le hay khong
      if (
        inputItem.getAttribute("type") === "email" &&
        isValidEmail(inputItem.value) === false
      ) {
        inputItem.nextElementSibling.innerText = "* Email khong hop le";
      }
      // Kiem tra so dien thoai
      if (
        inputItem.getAttribute("type") === "number" &&
        isNaN(inputItem.value) === true
      ) {
        inputItem.nextElementSibling.innerText = "* Phai nhap vao so";
      }
    }
  }
}

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}
