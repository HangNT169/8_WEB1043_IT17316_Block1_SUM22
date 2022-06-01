function register() {
  let inputTexts = document.getElementsByClassName("inputText");

  // kiểm tra tất cả các field phải nhập vào
  for (let i = 0; i < inputTexts.length; i++) {
    let inputItem = inputTexts.item(i);
    // console.log(inputTexts[i]);
    // reset lại giá trị của error message về mặc định
    // do errorMessage nằm dưới inputText nên có thể lấy ra bằng nextElementSibling
    inputItem.nextElementSibling.innerText = "";
    inputItem.nextElementSibling.style.color = "red";
    inputItem.nextElementSibling.style.fontSize = "10px";

    // Kiểm tra nếu value trống
    if (inputItem.value === "") {
      inputItem.nextElementSibling.innerText = "* Bắt buộc";
    } else {
      // Kiểm tra nếu là email thì phải hợp lệ
      if (
        inputItem.getAttribute("type") === "email" &&
        isValidEmail(inputItem.value) === false
      ) {
        inputItem.nextElementSibling.innerText = "* Email không hợp lệ";
      }

      // kiểm tra nếu có điều kiện về độ dài
      if (
        inputItem.getAttribute("minlength") !== null &&
        inputItem.value.length < inputItem.getAttribute("minlength")
      ) {
        inputItem.nextElementSibling.innerText =
          "* Ít nhất " + inputItem.getAttribute("minlength") + " kí tự";
      }
    }
  }

  // kiểm tra riêng phần password
  let passwordElements = document.getElementsByName("password");
  let passValue = passwordElements.item(0).value;
  let repassValue = passwordElements.item(1).value;

  // hiện errorMessage cho repass nếu không giống với pass
  if (passValue !== repassValue) {
    passwordElements.item(1).nextElementSibling.innerText =
      "* Repass phải giống pass";
  }
}

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}
