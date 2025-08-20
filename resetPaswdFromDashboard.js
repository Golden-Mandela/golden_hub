const previousPage = document.querySelector(".back");
if (previousPage) {
  previousPage.addEventListener("click", () => {
    window.history.back();
  });
}

// Reset password through login page
document.querySelector(".update-btn").addEventListener("click", () => {
  const phoneN = document.getElementById("phoneN").value.trim();
  const newPassword = document.getElementById("newPassword").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();
  if (phoneN === "") {
    alert("Please enter your phone number");
    return;
  }
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = users.find((user) => user.phone === phoneN);
  if (!currentUser) {
    alert("User not found.");
    return;
  }
  if (newPassword === "" || confirmPassword === "") {
    alert("Please fill in both password fields.");
    return;
  }
  if (newPassword !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }
  currentUser.password = newPassword;
  localStorage.setItem("users", JSON.stringify(users));
  alert("Password reset successful.");
  window.location.href = "dashboard.html";
  console.log(users);
});
