document.querySelector(".download-btn")?.addEventListener("click", () => {
  alert("Mobile App coming soon...");
});
document.querySelector(".back-vector")?.addEventListener("click", () => {
  window.history.back();
});
document.querySelector(".close-vector")?.addEventListener("click", () => {
  window.location.href = "dashboard.html";
});
