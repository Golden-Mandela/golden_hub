function copyAccountOrPhoneNumber(btn, sourceSelector) {
  const button = document.getElementById(btn);
  const source = document.querySelector(sourceSelector);
  const alert = document.querySelector(".copied-alert");

  if (button && source) {
    button.addEventListener("click", () => {
      const accountNumber = source.textContent.trim();
      const textarea = document.createElement("textarea");
      textarea.value = accountNumber;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      if (btn == "copy-account-number") {
        document.querySelector(".copied-alert").textContent =
          "Acct no copied !";
      } else if (btn == "copy-wallet-id") {
        document.querySelector(".copied-alert").textContent =
          "Wallet ID copied !";
      }
      alert.style.display = "inline-block";
      setTimeout(() => {
        alert.style.display = "none";
      }, 2000);
    });
  }
}
copyAccountOrPhoneNumber("copy-account-number", ".account-number");
copyAccountOrPhoneNumber("copy-wallet-id", ".wallet-id");
