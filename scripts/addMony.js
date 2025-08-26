let pinNumber = "1234";

document.getElementById("addMoney").addEventListener("click", function (e) {
  e.preventDefault();
  const balance = parseInt(
    document.getElementById("current-balance").innerText
  );
  const addBank = document.getElementById("selectBank").value;

  const addAccount = document.getElementById("AccNumber").value;
  const isLengthEleven = addAccount.length === 11;
  const isNumeric = /^\d{11}$/.test(addAccount);

  const addAmount = parseInt(document.getElementById("addAmount").value);
  const maxAmount = addAmount <= 5000 && addAmount > 0;
  const adAmount = document.getElementById("addAmount").value
  const isAmount = /^\d+$/.test(adAmount);

  const addPin = document.getElementById("addPin").value;
  const addAlart = document.getElementById("addAlart");

  if (addBank > 0 == false) {
    addAlart.style.display = "block";
    document.getElementById("addAlartInfo").innerText = "bank";
  } else if ((isLengthEleven && isNumeric) === false) {
    addAlart.style.display = "block";
    document.getElementById("addAlartInfo").innerText = "Bank Account Number";
  } else if ((maxAmount && isAmount) === false) {
    addAlart.style.display = "block";
    document.getElementById("addAlart").innerText =
      "Your Amount: " + adAmount + " is not Valid, Plese enter valid amount of 1 to 5000 USD";
  }
    else if((addPin === pinNumber) === false){
    addAlart.style.display = "block";
    document.getElementById("addAlart").innerText =
      "Your PIN: " + addPin + " is not Currect";
    }
    else {
    addAlart.style.display = "none";
    const newAmount = balance + addAmount;
    document.getElementById("current-balance").innerText = newAmount;
  }
//   alert(isAmount);
  // alert(isNumeric)
});
