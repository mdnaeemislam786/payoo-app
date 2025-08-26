// login button function
const loginClick = document
  .getElementById("loginBtn")
  .addEventListener("click", function () {
    const mobileNumber = 13000000000;
    const pinNumber = 1234;
    const mobileNumberValu = document.getElementById("Mobile-number").value;
    const pinNumberValu = document.getElementById("pin-number").value;
    const mobileNumberValuConvert = parseInt(mobileNumberValu);
    const pinNumberValuConvert = parseInt(pinNumberValu);
    if (
      mobileNumber === mobileNumberValuConvert &&
      pinNumber === pinNumberValuConvert
    ) {
      alert("Welcome");
      window.location.href = "./home.html";
    } else {
      alert("wrong info");
    }
  });

