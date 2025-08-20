const backToPreviousPage = document.querySelector(".back-vector");
if (backToPreviousPage) {
  backToPreviousPage.addEventListener("click", () => {
    window.history.back();
  });
}
const profileUsername = document
  .getElementById("profileUsername")
  .textContent.trim();

window.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  document.getElementById("phone").textContent = user?.phone || "";
  document.getElementById("profileUsername").textContent = user?.username || "";

  const phone = localStorage.getItem("newUserPhonNumber");
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = users.find((user) => user.phone === phone);
  if (currentUser) {
    document.getElementById("bankName").textContent =
      currentUser.bankName || "";
    document.getElementById("accountName").textContent =
      currentUser.accountName || "";
    document.getElementById("accountNumber").textContent =
      currentUser.accountNumber || "";
  } else {
    console.error("Logged-in user not found in database.");
  }
});
