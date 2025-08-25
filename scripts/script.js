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

// Main buttons function

// const addMoneyBtn = document.getElementById("addMoneyBtn").addEventListener("click", function () {
//   alert('hi')
//  });
// const cashOutBtn = document.getElementById("cashOutBtn");
// const transferMoneyBtn = document.getElementById("transferMoneyBtn");
// const GetBonusBtn = document.getElementById("GetBonusBtn");
// const payBillBtn = document.getElementById("payBillBtn");
// const TransactionBtn = document.getElementById("TransactionBtn");

// const latestPayS = document.getElementById("latestPayS");
// const addMoneyS = document.getElementById("addMoneyS");
// const cashOutS = document.getElementById("cashOutS");
// const transferMoneyS = document.getElementById("transferMoneyS");
// const GetBonusS = document.getElementById("GetBonusS");
// const payBillS = document.getElementById("payBillS");
// const TransactionS = document.getElementById("TransactionS");



// console.log("hie")