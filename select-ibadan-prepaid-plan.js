document.querySelector(".close-pop-up")?.addEventListener("click", () => {
  document.querySelector(".pop-up-container").style.display = "none";
});

document.querySelector(".proceed").addEventListener("click", () => {
  const inputValue = document.querySelector(".meter-number").value.trim();
  if (inputValue === "") {
    alert("Enter meter number");
    return;
  }
  if (inputValue.length < 11 || inputValue.length > 11) {
    alert("Please enter your correct meter number");
    return;
  }
  document.querySelector(".m-number").innerHTML = inputValue;
  document.getElementById("receipt-meterNumber").innerHTML = inputValue;
  document.querySelector(".pop-up-container").style.display = "block";
});

// Recharge Btn
document.getElementById("recharge-btn").addEventListener("click", () => {
  let status = "Recharge Successful";
  let status2 = "Success";
  let powerCompany = "IBADAN";
  const inputValue = document.querySelector(".meter-number").value.trim();
  const customerName = document.querySelector(".customer-name").value.trim();
  const customerPhoneNumber = document
    .querySelector(".customer-number")
    .value.trim();
  const customerAddress = document
    .querySelector(".customer-address")
    .value.trim();
  const amountToRcharge = document
    .querySelector(".amount-to-recharge")
    .value.trim();

  if (customerName === "") {
    alert("Enter customer's name");
    return;
  }
  if (customerPhoneNumber === "") {
    alert("Enter customer's phone number");
    return;
  } else if (customerPhoneNumber.length < 11) {
    alert("Enter a correct phone number");
    return;
  }
  if (customerAddress === "") {
    alert("Please customer's address");
    return;
  }
  if (amountToRcharge === "") {
    alert("Enter amount to recharge");
    return;
  }
  const date = new Date().toLocaleString();
  const rechargeDetails = {
    meterNumber: inputValue,
    customerName: customerName,
    customerNumber: customerPhoneNumber,
    address: customerAddress,
    amount: amountToRcharge,
    time: date,
    status: status,
    status2: status2,
    powerCompany: powerCompany,
  };

  const rechargeHistory =
    JSON.parse(localStorage.getItem("savedRecharge")) || [];
  console.log(rechargeHistory);

  rechargeHistory.push(rechargeDetails);
  localStorage.setItem("savedRecharge", JSON.stringify(rechargeHistory));

  const customername = document.getElementById("recipientName");
  const phoneNumber = document.getElementById("receipt-number");
  const address = document.getElementById("address");
  const rechargedAmount = document.getElementById("recharged-amount");
  const time = document.getElementById("rechargedTime");
  time.innerHTML = date;

  if (customername) {
    customername.innerHTML = customerName;
  }
  if (phoneNumber) {
    phoneNumber.innerHTML = customerPhoneNumber;
  }
  if (address) {
    address.innerHTML = customerAddress;
  }
  if (rechargedAmount) {
    rechargedAmount.innerHTML = amountToRcharge;
  }

  function failedReceipt() {
    const receiptHeader = document.querySelector(".successful");
    receiptHeader.style.backgroundColor = "white";
    receiptHeader.textContent = "Transaction failed !";
    receiptHeader.style.color = "red";
    const history = JSON.parse(localStorage.getItem("savedRecharge")) || [];
    console.log(history);
    if (history.length > 0) {
      history[history.length - 1].status = "Recharge failed";
      history[history.length - 1].status2 = "Failed";
      localStorage.setItem("savedRecharge", JSON.stringify(history));
    }
  }
  // failedReceipt();

  document.querySelector(".receipt-main-container").style.display = "block";
});
