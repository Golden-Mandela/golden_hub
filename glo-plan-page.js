document.querySelector(".back").addEventListener("click", () => {
  window.history.back();
});
document.querySelector(".selected-plan").addEventListener("click", () => {
  document.querySelector(".pop-up-container").style.display = "block";
  document.querySelector(".close-pop-up").addEventListener("click", () => {
    document.querySelector(".pop-up-container").style.display = "none";
  });
});

let amountOfData = "";
const planElement = document.querySelector(".selected-plan");
const subscribedAmount = document.getElementById("amount-of-data-subscribed");
const subscribedAmount2 = document.querySelector(".amount-of-data-subscribed");
const list = document.querySelectorAll("ul li");
list.forEach((item) => {
  item.addEventListener("click", () => {
    planElement.textContent = item.textContent;
    const spans = item.querySelectorAll("span");
    if (spans.length >= 2) {
      const firstSpan = spans[0].textContent.trim();
      amountOfData = spans[0].textContent.trim();
      console.log("firstSpan", firstSpan);
      const secondSpan = spans[1].textContent.trim();
      subscribedAmount.textContent = `${firstSpan} ${secondSpan}`;
      subscribedAmount2.textContent = `${firstSpan} ${secondSpan}`;
    }
    localStorage.setItem("selected_plan", item?.innerText);

    document.querySelector(".pop-up-container").style.display = "none";
    console.log(item.innerText);
  });
});

const input = document.getElementById("phoneNumberInput");
input.addEventListener("input", () => {
  input.value = input.value.replace(/\D/g, "");
});

const gloNumberPrifix = ["0705", "0805", "0807", "0811", "0815", "0905"];
document.querySelector(".proceed").addEventListener("click", () => {
  let status = "Success!";
  let network = "Glo";
  const phoneInput = document.getElementById("phoneNumberInput").value.trim();
  if (phoneInput === "") {
    alert("Please enter phone number");
    return;
  }
  const prifix = phoneInput.slice(0, 4);
  if (!gloNumberPrifix.includes(prifix)) {
    alert("This is not a glo phone number");
    return;
  }
  if (phoneInput.length < 11) {
    alert("Please enter a correct phone number");
    return;
  }
  document.querySelector(".successful-receipt-overlay").style.display = "block";
  const receiptPhoneNumber = document.getElementById("subscribed-phone-number");
  receiptPhoneNumber.textContent = phoneInput;
  const receiptPhone = document.querySelector(".subscribed-phone-number");
  receiptPhone.innerHTML = phoneInput;

  localStorage.setItem("phone", receiptPhoneNumber?.textContent);
  const numbeers = localStorage.getItem("phone");
  console.log(numbeers);

  const plan = localStorage.getItem("selected_plan");
  const time = document.getElementById("subscription-date");
  const time2 = document.querySelector(".subscription-date");
  const curremtTime = new Date();
  const formatedDate = curremtTime.toLocaleString();
  time.innerHTML = formatedDate;
  time2.innerHTML = formatedDate;

  console.log(plan);

  const dataHistory = {
    number: phoneInput,
    purchasedAmount: amountOfData,
    subTime: formatedDate,
    status: status,
    network: network,
  };
  // subscribedAmount.textContent,
  const saveDataHistory =
    JSON.parse(localStorage.getItem("savedDataHistory")) || [];
  saveDataHistory.push(dataHistory);
  console.log("Data history", saveDataHistory);
  localStorage.setItem("savedDataHistory", JSON.stringify(saveDataHistory));

  const errorMessage = function () {
    document.querySelector(".successful-receipt-overlay").style.display =
      "none";
    document.querySelector(".failed-receipt-overlay").style.display = "block";

    const saveDataHistory =
      JSON.parse(localStorage.getItem("savedDataHistory")) || [];
    if (saveDataHistory.length > 0) {
      const lastTransaction = saveDataHistory[saveDataHistory.length - 1];
      lastTransaction.status = "FAILED!";
      console.log("Updated Data History:", saveDataHistory);
    }
    localStorage.setItem("savedDataHistory", JSON.stringify(saveDataHistory));
  };

  // errorMessage();
});

["close-receipt1", "close-receipt2"].forEach((id) => {
  document.getElementById(id).addEventListener("click", () => {
    window.location.href = "top-up-page.html";
  });
});
document.querySelector(".download-btn").addEventListener("click", function () {
  const receipt = document.querySelector(".main-receipt-container");
  html2canvas(receipt, { scale: 2 }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "receipt.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});
// all glo phone number prefixes
//  0705; 0805; 0807; 0811; 0815; 0905

// all mtn phone number prefixes
// 0813, 0810, 0814, 0816, 0913, 0916, 0702

// all airtel phone number prefixes
// 0812; 0902; 0907; 0901; 0912; 0701
