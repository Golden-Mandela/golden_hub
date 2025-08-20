function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(userData) {
  localStorage.setItem("users", JSON.stringify(userData));
}

if (document.getElementById("signUpForm")) {
  document.getElementById("signUpForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const PhoneNumber = document.getElementById("PhoneNumber").value.trim();
    const username = document.getElementById("username").value.trim();
    const referralId = document.getElementById("referralId").value.trim();
    const password = document.getElementById("password").value.trim();

    let data = getUsers();

    if (PhoneNumber.length < 11 || PhoneNumber.length > 11) {
      alert("Enter a correct phone number");
      return;
    }
    const phoneExists = data.some((user) => user.phone === PhoneNumber);
    if (phoneExists) {
      alert("Phone numner already exist");
      return;
    }
    const usernameExists = data.some((user) => user.username === username);
    if (usernameExists) {
      alert("Username already exist");
      return;
    }
    // Only check referral ID if it's entered
    if (referralId !== "") {
      const referralIdExists = data.some((user) => user.id === referralId);
      if (!referralIdExists) {
        alert("Invalid referral ID");
        return;
      }
    }
    if (password.length < 6) {
      alert("Password should net be less than 6");
      return;
    }

    const newUser = {
      id: PhoneNumber.slice(1),
      phone: PhoneNumber,
      username: username,
      referralId: referralId || null,
      password: password,
      bankName: "",
      accountName: "",
      accountNumber: "",
    };
    data.push(newUser);
    saveUsers(data);
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    location.href = "dashboard.html";
  });
}

// Login function
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    let users = getUsers();
    const user = users.find(
      (correctDetails) =>
        correctDetails.username === username &&
        correctDetails.password === password
    );

    localStorage.setItem("newname", user?.username);
    localStorage.setItem("newUserPhonNumber", user?.phone);
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      location.href = "dashboard.html";
    } else {
      alert("Invalid password or username");
    }
  });
}
function updateProfile() {
  const usernameInputEl = document
    .getElementById("usernameInputEl")
    .value.trim();
  const bankNameInputEl = document.getElementById("bankNameInput").value.trim();
  const acctNameInputEl = document
    .getElementById("accountNameInput")
    .value.trim();
  const acctNumberInputEl = document
    .getElementById("acctNumberInput")
    .value.trim();

  let users = getUsers();
  const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const userIndex = users.findIndex(
    (user) => user.phone === currentUser?.phone
  );

  if (userIndex !== -1) {
    if (usernameInputEl) users[userIndex].username = usernameInputEl;
    if (bankNameInputEl) users[userIndex].bankName = bankNameInputEl;
    if (acctNameInputEl) users[userIndex].accountName = acctNameInputEl;
    if (acctNumberInputEl) users[userIndex].accountNumber = acctNumberInputEl;

    // Save the update to the users list
    saveUsers(users);

    // Also update loggedInUser copy
    localStorage.setItem("loggedInUser", JSON.stringify(users[userIndex]));

    alert("Profile updated successfully!");
  } else {
    alert("Logged-in user not found.");
  }
  window.location.href = "dashboard.html";
}
function logOut() {
  localStorage.removeItem("loggedInUser");
  location.href = "login-page.html";
}

// Downline table implementation
function addReferral() {
  const tableBody = document.getElementsByTagName("tbody")[0];
  const PhoneNumber = document.getElementById("PhoneNumber").value.trim();
  const username = document.getElementById("username").value.trim();

  if (username === "" || PhoneNumber === "") {
    return;
  }
  const dateAndtime = new Date();
  const formatedDate = dateAndtime.toLocaleString();
  const referral = null;
  const id = PhoneNumber.slice(1) || null;
  const newEntry = { username, PhoneNumber, date: formatedDate, referral, id };
  let entries = JSON.parse(localStorage.getItem("tableEntries")) || [];
  entries.push(newEntry);
  localStorage.setItem("tableEntries", JSON.stringify(entries));

  const tableRows = document.createElement("tr");
  const listName = document.createElement("td");
  const listPhone = document.createElement("td");
  const listDate = document.createElement("td");

  listName.textContent = username;
  listPhone.textContent = PhoneNumber;
  listDate.textContent = formatedDate;

  tableRows.appendChild(listName);
  tableRows.appendChild(listPhone);
  tableRows.appendChild(listDate);
  tableBody.appendChild(tableRows);
}

window.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementsByTagName("tbody")[0];
  const entries = JSON.parse(localStorage.getItem("tableEntries")) || [];

  entries.forEach((entry) => {
    const tableRows = document.createElement("tr");
    const listName = document.createElement("td");
    const listPhone = document.createElement("td");
    const listDate = document.createElement("td");

    listName.textContent = entry.username;
    listPhone.textContent = entry.PhoneNumber;
    listDate.textContent = entry.date;

    tableRows.appendChild(listName);
    tableRows.appendChild(listPhone);
    tableRows.appendChild(listDate);
    tableBody.appendChild(tableRows);
  });
});
