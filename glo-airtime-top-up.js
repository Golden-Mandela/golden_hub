document.querySelector(".cancel-btn")?.addEventListener("click", () => {
  window.history.back();
});
function warning() {
  document.getElementById("warningText").style.color = "green";
}
function clearwarning() {
  document.getElementById("warningText").style.color = "red";
  document.getElementById("warningText").textContent =
    "Amount should not be less than 100";
}

function checkAmount() {
  const phone = document.getElementById("phone-number-input").value.trim();
  const amountInputValue = document.getElementById("amount-input").value.trim();
  if (Number(amountInputValue) >= 100) {
    warning();
    document.getElementById(
      "warningText"
    ).textContent = `You are about to recharge ${amountInputValue} to "${phone}" `;
  } else if (amountInputValue || Number(amountInputValue) < 100) {
    clearwarning();
  }
}
document.getElementById("amount-input")?.addEventListener("input", checkAmount);

const gloNumberPrifix = ["0705", "0805", "0807", "0811", "0815", "0905"];

document.querySelector(".proceed")?.addEventListener("click", () => {
  const receiptSuccess = document
    .querySelector(".success-or-error-message")
    .textContent.trim();
  const status = (document.createElement("p").textContent = "Success!");
  const phonNumberInput = document
    .getElementById("phone-number-input")
    .value.trim();
  if (phonNumberInput === "") {
    alert("Please enter phone number");
    return;
  }
  if (phonNumberInput.length < 11) {
    alert("Enter a correct phone number");
    return;
  }
  const prifix = phonNumberInput.slice(0, 4);
  if (!gloNumberPrifix.includes(prifix)) {
    alert("This is not a glo number");
    return;
  }
  const amountInput = document.getElementById("amount-input").value.trim();
  if (Number(amountInput) < 100) {
    alert("Amount should not be less than 100");
    return;
  }
  const amount = (document.getElementById("amount-recharged").innerText =
    amountInput);

  document.getElementById("recepient-number").textContent = phonNumberInput;
  const currentTime = new Date().toLocaleString();
  document.getElementById("transaction-date").textContent = currentTime;
  document.querySelector(".first-pop-container").style.display = "block";

  const historyStatus = {
    PhoneNumber: phonNumberInput,
    amount: amount,
    status: status,
    time: currentTime,
    receiptSuccessfull: receiptSuccess,
  };

  const savedHistoryData =
    JSON.parse(localStorage.getItem("HistoryData")) || [];
  savedHistoryData.push(historyStatus);
  localStorage.setItem("HistoryData", JSON.stringify(savedHistoryData));

  const errorMessage = function () {
    document.querySelector(".vector-box2").style.display = "none";
    document.querySelector(" .failed-vector-box").style.display = "block";
    const error = (document.querySelector(".success").textContent = "Failed!");
    document.querySelector(".success").style.color = "red";
    const airTimeFailed = (document.querySelector(
      ".success-or-error-message"
    ).textContent = "airtime purchase failed");
    document.querySelector(".btn").textContent = "Retry";

    const history = JSON.parse(localStorage.getItem("HistoryData")) || [];
    if (history.length > 0) {
      const lastTransaction = history[history.length - 1];
      lastTransaction.status = "Failed!";
      lastTransaction.receiptSuccessfull = "airtime purchase failed";
      localStorage.setItem("HistoryData", JSON.stringify(history));
    }
  };
  // errorMessage();
});
