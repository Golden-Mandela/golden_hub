if (document.querySelector(".vector-box")) {
  document.querySelector(".vector-box").addEventListener("click", () => {
    const textDiv = document.querySelector(".text-div");
    const receiptDv = document.querySelector(".receipt-div");
    const mainReceipt = document.querySelector(".mainReceipt");
    const isVisible = getComputedStyle(textDiv).display === "block";

    if (isVisible) {
      textDiv.style.display = "none";
      receiptDv.style.width = "97%";
      receiptDv.style.margin = "auto";
      mainReceipt.style.display = "block";
    } else {
      textDiv.style.display = "block";
      receiptDv.style.width = "124px";
      mainReceipt.style.display = "none";
    }
  });
}
