window.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  document.getElementById("newUsername").textContent = user?.username || "";
  document.querySelector(".referralName").textContent = `/ref=${
    user?.username || ""
  }`;
});
document
  .querySelector(".notification-container circle")
  .setAttribute("fill", "none");
// side bar display
document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".overlay").style.display = "block";
});
document.querySelector(".close-btn").addEventListener("click", () => {
  document.querySelector(".overlay").style.display = "none";
});

// Hiding of balances
const walletBalance = document.querySelector(".balance");
const dataBonus = document.getElementById("data-bonus");
const hidingButton = document.getElementById("hiding-btn");
const actualBalance = walletBalance.textContent;
const actualDataBonusBalance = dataBonus.textContent;
let balancesHidden = localStorage.getItem("hideBalances") === "true";

walletBalance.textContent = balancesHidden ? "******" : actualBalance;
dataBonus.textContent = balancesHidden ? "******" : actualDataBonusBalance;

hidingButton.addEventListener("click", () => {
  balancesHidden = !balancesHidden;
  walletBalance.textContent = balancesHidden ? "******" : actualBalance;
  dataBonus.textContent = balancesHidden ? "******" : actualDataBonusBalance;
  localStorage.setItem("hideBalances", balancesHidden);
});
// Golden-Mandela
//github.com/Golden-Mandela/golden_hub.git

// copying of referal link
https: document.getElementById("copy-link").addEventListener("click", () => {
  const referalLink = document.getElementById("referal-link").textContent;

  const textarea = document.createElement("textarea");
  textarea.value = referalLink;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand("copy");
  document.querySelector(".copied-alert").style.display = "block";
  setTimeout(() => {
    document.querySelector(".copied-alert").style.display = "none";
  }, 2000);

  document.body.removeChild(textarea);
});

const circle = document.querySelector(".notification-container circle");
const notification = document.querySelector(".notification-container");

function notificationSignal(...storageKeys) {
  let allData = storageKeys.map(
    (key) => JSON.parse(localStorage.getItem(key)) || []
  );

  const hasUnread = allData.some((array) =>
    array.some((item) => item.isRead === false)
  );

  if (hasUnread) {
    circle.setAttribute("fill", "#FA7000");
  } else {
    circle.setAttribute("fill", "none");
  }

  notification.addEventListener("click", () => {
    indexOfDatas = allData.map((array) =>
      array.map((item) => ({ ...item, isRead: true }))
    );
    storageKeys.forEach((key, index) => {
      localStorage.setItem(key, JSON.stringify(indexOfDatas[index]));
    });

    circle.setAttribute("fill", "none");
  });
}
notificationSignal("savedTvRecharge", "savedDataHistory");

// const circle = document.querySelector(".notification-container circle");
// const notification = document.querySelector(".notification-container");

// let savedArray = JSON.parse(localStorage.getItem("savedTvRecharge")) || [];
// function notificationSignal() {
//   savedArray.forEach((item) => {
//     if (item.isRead === false) {
//       circle.setAttribute("fill", "#fA7000");
//     } else {
//       circle.setAttribute("fill", "none");
//     }
//   });

//   notification.addEventListener("click", () => {
//     let savedUpdate = JSON.parse(localStorage.getItem("savedTvRecharge")) || [];

//     savedUpdate.forEach((item) => {
//       item.isRead = true;
//       if (item.isRead === true) {
//         circle.setAttribute("fill", "none");
//       }
//     });
//     localStorage.setItem("savedTvRecharge", JSON.stringify(savedUpdate));
//   });
// }
// notificationSignal();

// Call with as many storage keys as you like
