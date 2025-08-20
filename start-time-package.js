document.querySelector(".close-pop-up").addEventListener("click", () => {
  document.querySelector(".pop-up-container").style.display = "none";
});
const packageElement = document.querySelector(".choose-package");
packageElement.addEventListener("click", () => {
  document.querySelector(".pop-up-container").style.display = "block";
});

const packageList = document.querySelectorAll("ul li");

packageList.forEach((items) => {
  items.addEventListener("click", () => {
    packageElement.textContent = items.textContent;

    const durationElement = items.querySelector(".duration").textContent.trim();
    const amountElement = items.querySelector(".amount").textContent.trim();
    const codeElement = items.querySelector(".service-code").textContent.trim();
    const popUpDuration = document.getElementById("pop-plan-duration");
    const amountSubscribed = document.getElementById("subscription-amonut");
    const serviceCode = document.getElementById("service-code");
    if (popUpDuration) {
      popUpDuration.textContent = durationElement;
      const durationText = document
        .getElementById("duration")
        .textContent.trim();
      durationText.textContent = durationElement;
    }
    if (popUpDuration.textContent === "weekly") {
      expireInSevenDays();
    } else {
      expireInThirtyDays();
    }
    if (amountSubscribed) {
      amountSubscribed.textContent = amountElement;
      const subAmount = document.getElementById("amount").textContent.trim();
      subAmount.textContent = amountElement;
    }
    if (serviceCode) {
      serviceCode.textContent = codeElement;
      const subCode = document.getElementById("code").textContent.trim();
      subCode.textContent = codeElement;
    }

    function expireInSevenDays() {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 7);

      const formattedDate = futureDate.toLocaleString();
      document.getElementById("expiring-date").textContent = formattedDate;
      const expiringDate = document.getElementById("epiringDate");
      expiringDate.textContent = formattedDate;
    }

    function expireInThirtyDays() {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 30);

      const formattedDate = futureDate.toLocaleString();
      document.getElementById("expiring-date").textContent = formattedDate;
      const expiringDate = document.getElementById("epiringDate");
      expiringDate.textContent = formattedDate;
    }

    document.querySelector(".pop-up-container").style.display = "none";
  });
});

document.querySelector(".proceed-btn").addEventListener("click", () => {
  const smartNumberValue = document.querySelector(".smart-number").value.trim();
  document.getElementById("pop-smart-number").textContent = smartNumberValue;
  const packageEl = document.querySelector(".choose-package");
  if (packageEl.textContent === "Choose package") {
    alert("Please choose a package to continue");
    return;
  }
  if (
    smartNumberValue === "" ||
    smartNumberValue.length < 11 ||
    smartNumberValue.length > 11
  ) {
    alert("Please enter your correct smart number");
    return;
  }
  const smartNumber = document.getElementById("smart-number");
  smartNumber.textContent = smartNumberValue;

  document.querySelector(".pop-container").style.display = "block";
});

document.querySelector(".pop-back-vector").addEventListener("click", () => {
  document.querySelector(".pop-container").style.display = "none";
});

// Receipt
document.querySelector(".pop-proceed-btn").addEventListener("click", () => {
  let serviceTipe = "StartTime";
  let status = "Success";
  let expiringDt = "";
  const date = new Date();
  const formatDate = date.toLocaleString();
  const currentTime = document.getElementById("currentTime");
  currentTime.textContent = formatDate;

  const smartNumberValue = document
    .getElementById("pop-smart-number")
    .textContent.trim();
  const durationElement = document
    .getElementById("pop-plan-duration")
    .textContent.trim();
  const amountElement = document
    .getElementById("subscription-amonut")
    .textContent.trim();
  const codeElement = document
    .getElementById("service-code")
    .textContent.trim();
  const expiringDate = document
    .getElementById("expiring-date")
    .textContent.trim();
  const duration = document.getElementById("duration");
  duration.textContent = durationElement;
  const code = document.getElementById("code");
  code.textContent = codeElement;
  const amount = document.getElementById("amount");
  amount.textContent = amountElement;

  const futureDate = new Date();
  if (durationElement.toLowerCase() === "monthly") {
    futureDate.setDate(futureDate.getDate() + 30);
  } else {
    futureDate.setDate(futureDate.getDate() + 7);
  }
  expiringDt = futureDate.toLocaleString();
  const tvRechargeDetails = {
    SmartNumber: smartNumberValue,
    PlanDuration: durationElement,
    ExpiringDate: expiringDt,
    SERVICETYPE: serviceTipe,
    ServiceCode: codeElement,
    Subscriptionamount: amountElement,
    time: formatDate,
    status: status,
    isRead: false,
  };

  const savedTvRecharge =
    JSON.parse(localStorage.getItem("savedTvRecharge")) || [];
  savedTvRecharge.push(tvRechargeDetails);
  localStorage.setItem("savedTvRecharge", JSON.stringify(savedTvRecharge));

  // call on this function if transaction fails.
  function successOrFailedDisplay() {
    document.querySelector(".success-vector").style.display = "none";
    document.querySelector(".failed-vector").style.display = "block";
    const statusText = document.querySelector(".success");
    statusText.textContent = "Transaction failed";
    statusText.style.color = "red";
    const retryBtn = document.querySelector(".demacation-line");
    retryBtn.style.width = "auto";
    retryBtn.style.height = "auto";
    retryBtn.style.backgroundColor = "#310048";
    retryBtn.textContent = "Retry";
    retryBtn.style.fontWeight = "600";
    retryBtn.style.color = "white";
    retryBtn.style.cursor = "pointer";
    retryBtn.addEventListener("click", () => {
      window.location.href = "start-time-package.html";
    });

    const savedTvRecharge =
      JSON.parse(localStorage.getItem("savedTvRecharge")) || [];
    if (savedTvRecharge.length > 0) {
      savedTvRecharge[savedTvRecharge.length - 1].status = "Failed";
    }
    localStorage.setItem("savedTvRecharge", JSON.stringify(savedTvRecharge));
  }
  // successOrFailedDisplay();

  document.querySelector(".receipt-container").style.display = "block";
});

document.querySelector(".home").addEventListener("click", () => {
  window.location.href = "dashboard.html";
});

document.querySelector(".demacation-line").addEventListener("click", () => {
  location.reload();
});

document.querySelector(".download").addEventListener("click", function () {
  const receipt = document.querySelector(".receipt-div");
  html2canvas(receipt, { scale: 2 }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "receipt.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});

let savedData = JSON.parse(localStorage.getItem("savedTvRecharge")) || [];

// Add the property to each object
savedData = savedData.map((item) => ({
  ...item,
  isRead: false,
}));

// Save it back to localStorage
localStorage.setItem("savedTvRecharge", JSON.stringify(savedData));
