/**
 * 1. Gioi thieu qua ve Object
 *  cach khoi tao 1 object,
 *  Thêm thuộc tính cho đối tượng,
 *  Truy cập đến thuộc tính của đối tượng
 *  Thêm phương thức cho đối tượng
 *  Gọi phương thức của đối tượng
 * 2. Gioi thieu qua ve Class
 * 3. Object va Array
 * 4. Link tham khao:
 * https://codelearn.io/sharing/object-trong-javascript
 * https://freetuts.net/doi-tuong-object-trong-javascript-408.html
 * https://kipalog.com/posts/Ban-ve-khai-niem-Object-trong-Javascript
 * https://niithanoi.edu.vn/class-trong-javascript.html
 */

/**
 * 1. Objet
 * Các bạn có 3 cách để khai báo đối tượng trong Javascript: 
        Sử dụng từ khóa {}
        Sử dụng từ khóa new Object()
        Sử dụng phương thức static // it dung
    // literal
    const dog = { }

    // constructor
    const cat = new Object();

    // static method
    const horse = Object.create({ })
 */
// cach 1
var hoaHong = {
  mau: "Hong",
  soCanh: 5,
  set mauInfo(age) {
    console.log("setter - " + this.mau);
    this.age = age;
  },

  get mauInfo() {
    console.log("getter");
    return "Thông tin mau: " + this.mau;
  },
  // rong trường hợp muốn định nghĩa setter / getter trong hàm tạo đối tượng thì bạn cần định nghĩa theo nguyên tắc thêm một thuộc tính vào đối tượng đã có với lệnh Object.defineProperty
};
function person(age) {
  this.age = 0;
  Object.defineProperty(this, "ageInfo", {
    set: function (age) {
      console.log("setter - " + age);
      this.age = age;
    },
    get: function () {
      console.log("getter");
      return "Thông tin tuổi: " + this.age;
    },
  });
}
// log
// console.log(hoaLoaKen);
// truoc
// console.log(hoaHong);
hoaHong.mau = "Xanh";
hoaHong.mauInfo = "Do";
console.log(hoaHong.mau);
// sau
// console.log(hoaHong);
// Cach 2
var hoaLoaKen = new Object();
// them thuoc tinh
hoaLoaKen.mau = "vang";
hoaLoaKen.soCanh = 5;

// 2. Class
// C1:
function Dog(dogName, weight, color, breed, type) {
  this.dogName = dogName;
  this.weight = weight;
  this.color = color;
  this.breed = breed;
  this.type = type;
  this.sua = function () {
    return "Gau Gau";
  };
}
Dog[0] = new Dog("Jacky", 0.8, "brown", "chihuahua teacup", "short hair");
Dog[1] = new Dog("Javascript", 1, "brown", "chihuahua mini", "long hair");
Dog[2] = new Dog("Jscript", 1, "white", "chihuahua", "long hair");
Dog[3] = new Dog("Jscript", 1, "black & white", "chihuahua", "short hair");
Dog[1].dogName;
for (var x in Dog) {
  console.log(Dog[x].dogName);
}
// C2:
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

const poly1 = new Polygon();

console.log(poly1.name);
// expected output: "Polygon"

// 3. Mang chua object
// Đối tượng Comment
var Comment = {
  title: "",
  content: "",
  email: "",
  fullname: "",
};

// Khởi tạo mảng
var Comments = [];

// Gán giá trị cho phần tử mảng
Comments[0] = Comment;

// Gọi tới thuộc tính
Comments[0].title = "Tiêu đề bình luận";
alert(Comments[0].title);

// Lap cac phan tu trong obejct
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  console.log(`Key ${key} có giá trị là ${user[key]}`);
}
