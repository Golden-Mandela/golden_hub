document.querySelector(".reset-password").addEventListener("click", () => {
  window.location.href = "phoneNoToResetPswd.html";
});
document.querySelector(".input-field2 svg").addEventListener("click", () => {
  const passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
