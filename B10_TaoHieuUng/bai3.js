let imageObjects = [];
let indexHienTai = 0;
let intervalId;

// function loadimage
function loadImage() {
  // B1: Tao ra 1 mang chua ten cua tat ca cac anh muon show
  const images = ["cat.jpg", "chicken.jpg", "dog.jpg", "monkey.jpg", "pig.jpg"];

  // B2: Tao ra 1 folder chua nhung cai img dang luu
  const imgFolderName = "images/";

  // B3: Push anh vao html
  images.forEach(function (e) {
    // Khoi tao 1 object image
    let img = new Image();
    // gan duong dan anh
    img.src = imgFolderName + e;
    // push anh
    imageObjects.push(img);
  });

  if (intervalId === undefined) {
    intervalId = setInterval(function () {
      nextImage();
    }, 1000);
  }
  // B4: Xet lai cho ben HTML
  document.img_pet.src = imageObjects[indexHienTai].src;
}
// Button next
function nextImage() {
  indexHienTai++;

  if (indexHienTai >= imageObjects.length) {
    indexHienTai = 0;
  }

  document.img_pet.src = imageObjects[indexHienTai].src;
}
