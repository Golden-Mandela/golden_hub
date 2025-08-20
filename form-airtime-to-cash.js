document.querySelector(".cancle").addEventListener("click", () => {
  window.location.href = "dashboard.html";
});
document.getElementById("back").addEventListener("click", () => {
  window.history.back();
});
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const userName = document.querySelector(".username").value.trim();
  const phoneNumber = document.querySelector(".Phone-number").value.trim();
  const amount = document.querySelector(".amount").value.trim();
  const accountNumber = document.querySelector(".account-number").value.trim();
  const accountName = document.querySelector(".account-name").value.trim();
  const bankName = document.querySelector(".bank-name").value.trim();
  if (
    userName === "" ||
    phoneNumber === "" ||
    amount === "" ||
    accountNumber === "" ||
    accountName === "" ||
    bankName === ""
  ) {
    alert("Please fill the whole form");
    return;
  }
  let swapDetails = {
    userName: userName,
    phoneNumber: phoneNumber,
    amount: amount,
    accountNumber: accountNumber,
    accountName: accountName,
    bankName: bankName,
  };
  const savedSwap = JSON.parse(localStorage.getItem("savedSwap")) || [];
  savedSwap.push(swapDetails);
  localStorage.setItem("savedSwap", JSON.stringify(savedSwap));

  document.querySelector(".overlay").style.display = "block";
});
