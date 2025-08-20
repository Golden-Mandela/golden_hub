function renderHistoryItem(data) {
  const ul = document.querySelector(".history-list");

  const li = document.createElement("li");

  const airtimeHistoryDiv = document.createElement("div");
  airtimeHistoryDiv.classList.add("airtime-history-div");

  const textDiv = document.createElement("div");
  textDiv.classList.add("text-div");

  const airtimePurchase = document.createElement("p");
  airtimePurchase.classList.add("airtime-purchase");
  airtimePurchase.textContent = "Airtime purchase";

  const phone = document.createElement("p");
  phone.classList.add("phone");
  phone.textContent = `Phone No: ${data.phone}`;

  textDiv.appendChild(airtimePurchase);
  textDiv.appendChild(phone);

  const receiptDiv = document.createElement("div");
  receiptDiv.classList.add("receipt-div");

  const failedText = document.createElement("p");
  failedText.textContent = data.status;

  const vectorBox = document.createElement("div");
  vectorBox.classList.add("vector-box");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("width", "15");
  svg.setAttribute("height", "15");
  svg.setAttribute("viewBox", "0 0 15 15");
  svg.setAttribute("fill", "none");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M0.75 5.24995L1.875 4.19995L7.5 9.74995L13.125 4.19995L14.25 5.24995L7.5 12L0.75 5.24995Z"
  );
  path.setAttribute("fill", "black");
  path.setAttribute("fill-opacity", "0.5");

  svg.appendChild(path);
  vectorBox.appendChild(svg);

  receiptDiv.appendChild(failedText);
  receiptDiv.appendChild(vectorBox);

  airtimeHistoryDiv.appendChild(textDiv);
  airtimeHistoryDiv.appendChild(receiptDiv);

  li.appendChild(airtimeHistoryDiv);
  ul.appendChild(li);
}

// Function to get history from localStorage and render all
function loadHistory() {
  const history = JSON.parse(localStorage.getItem("airtimeHistory")) || [];
  history.forEach((item) => renderHistoryItem(item));
}

// Function called on button click
function addHistoryItem() {
  const history = JSON.parse(localStorage.getItem("airtimeHistory")) || [];

  const newItem = {
    phone: "09050516334",
    status: "Failed!",
  };

  // Add to DOM
  renderHistoryItem(newItem);

  // Add to localStorage
  history.push(newItem);
  localStorage.setItem("airtimeHistory", JSON.stringify(history));
}

// Load history when page loads
window.addEventListener("DOMContentLoaded", loadHistory);
