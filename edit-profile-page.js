const backToPreviousPage = document.querySelector(".back-vector");
if (backToPreviousPage) {
  backToPreviousPage.addEventListener("click", () => {
    window.history.back();
  });
}
