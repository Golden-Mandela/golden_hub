function next(from, id) {
  let value = from.value.length;
  let max = from.getAttribute("maxlength");
  if (value == max) {
    document.getElementById(id).focus();
  }
}

document.querySelector(".verify-btn").addEventListener("click", () => {
  const successful = document.querySelector(".success-popUp");
  if (successful) {
    document.querySelector(".success-popUp").style.display = "block";
  }
});
document.querySelector(".proceed-btn").addEventListener("click", () => {
  document.querySelector(".success-popUp").style.display = "none";
});
