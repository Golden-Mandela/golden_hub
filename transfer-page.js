document.querySelector(".close")?.addEventListener("click", () => {
  window.history.back();
});

const warning = document.querySelector(".overlay");
document.querySelector(".transfer-btn")?.addEventListener("click", () => {
  if (warning) {
    warning.style.display = "block";
  }
});
const cancelBtn = document.querySelector(".cancel");
if (cancelBtn) {
  cancelBtn.addEventListener("click", () => {
    warning.style.display = "none";
  });
}

const proceedBtn = document.getElementById("proceed");
if (proceedBtn) {
  proceedBtn.addEventListener("click", () => {
    const popUp = document.querySelector(".successful-container");
    let status = "Success";
    const getUsers = JSON.parse(localStorage.getItem("users")) || [];

    const username = document.getElementById("usernameInput").value.trim();
    const amountInput = document.getElementById("amountInput").value.trim();
    const amount = parseFloat(amountInput);

    if (!username) {
      alert("Enter username");
      return;
    }
    if (!amountInput) {
      alert("Enter amount to transfer");
      return;
    }
    if (isNaN(amount)) {
      alert("Amount must be a valid number");
      return;
    }
    const existingUser = getUsers.some((user) => user.username === username);
    if (!existingUser) {
      alert("User does not exist");
      return;
    }
    if (amount < 500) {
      alert("Amount should not be less than 500");
      return;
    }
    const currentDate = new Date().toLocaleString();

    const trsdUsername = document.getElementById("usernameTransferedTo");
    const amountElem = document.getElementById("amountTransfered");
    const timeElem = document.getElementById("transactionTime");
    if (trsdUsername || amountElem || timeElem) {
      trsdUsername.textContent = username;
      amountElem.textContent = amountInput;
      timeElem.textContent = currentDate;
    }

    const transferedDetails = {
      amount: amountInput,
      username: username,
      time: currentDate,
      status: status,
    };

    const transferHistory =
      JSON.parse(localStorage.getItem("savedTransactions")) || [];

    transferHistory.push(transferedDetails);
    localStorage.setItem("savedTransactions", JSON.stringify(transferHistory));

    const errorMessage = function () {
      const vector = document.querySelector(".vector-box");
      const vector3 = document.querySelector(".failed-vector-box");
      const statusText = document.querySelector(".success");
      const feedback = document.querySelector(".sub-text");

      if (vector && vector3 && statusText && feedback) {
        vector.style.display = "none";
        vector3.style.display = "block";
        statusText.textContent = "Failed!";
        statusText.style.color = "red";
        feedback.textContent = `Transfer of ${amountInput} to ${username} failed!`;
      }

      const history =
        JSON.parse(localStorage.getItem("savedTransactions")) || [];
      if (history.length > 0) {
        history[history.length - 1].status = "Failed!";
        localStorage.setItem("savedTransactions", JSON.stringify(history));
      }
    };

    // errorMessage();
    if (popUp) {
      popUp.style.display = "block";
    }
  });
}

const backToHome = document.querySelector(".back-to-home");
if (backToHome) {
  backToHome.addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });
}
