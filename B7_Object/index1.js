/**
 * Cach khai bao Object: Thuoc tinh, phuong thuc
 * Co 2 cach khai bao 1 object:
 * - Literal {}
 * - New
 */
var hoaHong1 = new Object(); // Khoi tao bang tu khoa new
var hoaHong2 = {}; // literal

let hoaHong = {
  mauSac: "Hong",
  soCanh: 5,
  // cach su dung setter
  set mauSac(mauSac) {
    // console.log("Setter:" + this.mauSac);
    this.mauSac = mauSac;
  },
  // Cac ham viet trong Object
  // ten Ham : function
  hienThi: function () {
    console.log("hien thi: " + this.mauSac + " - " + this.soCanh);
  },
};

// cach lay thuoc tinh ra
console.log(hoaHong.mauSac);
console.log(hoaHong.soCanh);
// thay doi thuoc tinh
hoaHong.soCanh = 8;
console.log(hoaHong.soCanh);

// c2
const hoaLoaKen = new Object();
hoaLoaKen.mauSac = "Trang";
hoaLoaKen.soCanh = 10;
console.log(hoaLoaKen.mauSac + " - " + hoaLoaKen.soCanh);

/**
 * Class : Co 2 cach
 */
// C1
// Giong Class bt
class Hoa {
  mauSac;
  soCanh;
  // contructor,...
}
// c2
/*
    Cú pháp:

    function tenlop (tenbien1, tenbien2…){
        tenthuoctinh1 = tenbien1;
        tenthuoctinh2 = tenbien2;
        tenphuongthuc = function(){
            Viết mã cho phương thức ở đây
        }
    }
*/
function Dog(name, tuoi) {
  this.name = name;
  this.tuoi = tuoi;
  this.tiengKeu = function () {
    return "gau gau";
  };
}
// Gan gia tri cho cac phan tu trong mang
Dog[0] = new Dog("cho1", 1);
Dog[1] = new Dog("cho2", 5);
Dog[2] = new Dog("cho3", 10);
Dog[3] = new Dog("cho4", 2);

for (let i in Dog) {
  // console.log(Dog[i].name);
  console.log(Dog[i].tiengKeu());
}

// Khai bao mang
var comment = {
  title: "",
  content: "",
};

// Khoi tao mang
var comments = [];
// gan gia tri cac phan tu cho mang
comments[0] = comment;
comment.title = "Tieu de 1";
comment.content = "Noi dung 1";
