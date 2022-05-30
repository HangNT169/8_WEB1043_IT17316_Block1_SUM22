function tinhTien() {
  // lay id
  let donGia = document.getElementById("donGia");
  let soLuong = document.getElementById("soLuong");
  let ketQua = document.getElementById("ketQua");

  // tinh tien
  let tien = Number(donGia.value) * Number(soLuong.value);
  ketQua.innerHTML = tien;
}
