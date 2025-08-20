// window.addEventListener("DOMContentLoaded", () => {
//   const phone = localStorage.getItem("newUserPhonNumber");
//   const users = JSON.parse(localStorage.getItem("users")) || [];
//   const currentUser = users.find((user) => user.phone === phone);

//   if (currentUser) {
//     document.getElementById("phone").textContent = currentUser.phone || "";
//   }
// });

const previousPage = document.querySelector(".back-vector");
if (previousPage) {
  previousPage.addEventListener("click", () => {
    window.history.back();
  });
}
function moveToTheNext(from, to) {
  let fro = from.value.length;
  let max = from.getAttribute("maxlength");
  if (fro == max) {
    document.getElementById(to).focus();
  }
}
const continueBtn = document.getElementById("continueToReset");
if (continueBtn) {
  continueBtn.addEventListener("click", () => {
    const phoneInput = document.getElementById("phone-number").value.trim();

    if (phoneInput.length < 11) {
      alert("Phone number is incomplete");
      return;
    }
    localStorage.setItem("phoneInput", phoneInput);

    const phoneNumberEl = document.getElementById("phoneNumber");
    if (phoneNumberEl) {
      phoneNumberEl.textContent = phoneInput;
    }

    window.location.href = "reset-password-otp-page.html";
  });
}

// Proceed btn function
const verifyBtn = document.querySelector(".verify-btn");
if (verifyBtn) {
  verifyBtn.addEventListener("click", () => {
    const phone = localStorage.getItem("phoneInput");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users.find((user) => user.phone === phone);
    console.log(users);

    const otpInputs = document.querySelectorAll(".input-field");

    for (let input of otpInputs) {
      if (input.value.trim() === "") {
        alert("All OTP fields must be filled");
        return;
      }
    }
    if (currentUser) {
      window.location.href = "reset-password-page.html";
    } else {
      alert(
        "The phone number does not have an account, please check the phone number and try again"
      );
      return;
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const phoneNumberEl = document.getElementById("phoneNumber");
  if (phoneNumberEl) {
    phoneNumberEl.textContent = localStorage.getItem("phoneInput") || "";
  }
});
