function createHistoryList() {
  const history = JSON.parse(localStorage.getItem("HistoryData")) || [];

  const historyList = document.querySelector(".history-list");

  for (let i = 0; i < history.length; i++) {
    const li = document.createElement("li");
    console.log(history[i]);
    const mainContainer = document.createElement("div");
    mainContainer.className = "mainContner";

    mainContainer.innerHTML = `
              <div class="airtime-history-div">
            <div class="text-div">
              <p class="airtime-purchase">Airtime purchase. <span class="little-time">${history[i].time}
    </span></p>
              <p class="phone">Phone No: <span class="airtimeNumber">${history[i].PhoneNumber}</span></p>
            </div>
            <div class="receipt-div">
              <p class="status">${history[i].status}</p>
              <div class="vector-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M0.75 5.24995L1.875 4.19995L7.5 9.74995L13.125 4.19995L14.25 5.24995L7.5 12L0.75 5.24995Z"
                    fill="black"
                    fill-opacity="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="mainReceipt">
            <div class="popUpContainer">
              <div class="vector-box2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                >
                  <g clip-path="url(#clip0_79_584)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.5135 0.885928C24.2515 0.617188 23.9383 0.403613 23.5925 0.257787C23.2466 0.111961 22.8751 0.0368347 22.4998 0.0368347C22.1244 0.0368347 21.7529 0.111961 21.4071 0.257787C21.0612 0.403613 20.748 0.617188 20.486 0.885928L18.6917 2.72812C18.3385 3.09099 17.8939 3.35178 17.4048 3.48296C16.9157 3.61415 16.4003 3.61085 15.9129 3.47343L13.4379 2.77593C13.0766 2.67427 12.6987 2.64593 12.3263 2.6926C11.9539 2.73927 11.5947 2.85999 11.2697 3.04765C10.9447 3.23531 10.6605 3.48612 10.4339 3.7853C10.2074 4.08448 10.043 4.42598 9.9504 4.78968L9.31478 7.28155C9.19016 7.7721 8.93548 8.21992 8.5776 8.57781C8.21971 8.9357 7.77188 9.19037 7.28134 9.31499L4.78946 9.9478C4.42576 10.0404 4.08427 10.2048 3.78509 10.4313C3.48591 10.6579 3.2351 10.9421 3.04744 11.2671C2.85977 11.5921 2.73905 11.9513 2.69239 12.3237C2.64572 12.6961 2.67405 13.074 2.77571 13.4353L3.47321 15.9131C3.61064 16.4005 3.61393 16.9159 3.48275 17.405C3.35157 17.8941 3.09078 18.3387 2.7279 18.6919L0.885714 20.4862C0.616975 20.7483 0.403399 21.0614 0.257573 21.4073C0.111748 21.7531 0.0366211 22.1247 0.0366211 22.5C0.0366211 22.8753 0.111748 23.2469 0.257573 23.5927C0.403399 23.9386 0.616975 24.2517 0.885714 24.5137L2.7279 26.3109C3.09028 26.6638 3.35078 27.108 3.48194 27.5965C3.61311 28.085 3.61009 28.5999 3.47321 29.0869L2.77571 31.5619C2.67405 31.9231 2.64572 32.3011 2.69239 32.6735C2.73905 33.0458 2.85977 33.4051 3.04744 33.7301C3.2351 34.0551 3.48591 34.3393 3.78509 34.5658C4.08427 34.7924 4.42576 34.9568 4.78946 35.0494L7.28134 35.685C7.77188 35.8096 8.21971 36.0643 8.5776 36.4222C8.93548 36.7801 9.19016 37.2279 9.31478 37.7184L9.94759 40.2103C10.0398 40.5743 10.204 40.9161 10.4305 41.2155C10.6569 41.515 10.941 41.7662 11.266 41.9541C11.5911 42.142 11.9505 42.263 12.323 42.3099C12.6955 42.3567 13.0736 42.3285 13.4351 42.2269L15.9129 41.5294C16.4 41.3916 16.9153 41.3879 17.4044 41.5185C17.8934 41.6492 18.3382 41.9095 18.6917 42.2719L20.486 44.1141C20.748 44.3828 21.0612 44.5964 21.4071 44.7422C21.7529 44.888 22.1244 44.9631 22.4998 44.9631C22.8751 44.9631 23.2466 44.888 23.5925 44.7422C23.9383 44.5964 24.2515 44.3828 24.5135 44.1141L26.3107 42.2719C26.6639 41.91 27.1082 41.65 27.5967 41.5193C28.0852 41.3887 28.5999 41.3921 29.0867 41.5294L31.5617 42.2269C31.9231 42.3285 32.3012 42.3567 32.6738 42.3099C33.0463 42.263 33.4057 42.142 33.7307 41.9541C34.0557 41.7662 34.3398 41.515 34.5663 41.2155C34.7927 40.9161 34.9569 40.5743 35.0491 40.2103L35.6848 37.7184C35.8094 37.2279 36.0641 36.7801 36.422 36.4222C36.7798 36.0643 37.2277 35.8096 37.7182 35.685L40.2101 35.0522C40.574 34.9599 40.9158 34.7958 41.2153 34.5693C41.5148 34.3429 41.7659 34.0588 41.9539 33.7337C42.1418 33.4087 42.2628 33.0493 42.3096 32.6768C42.3565 32.3043 42.3283 31.9261 42.2267 31.5647L41.5292 29.0897C41.3914 28.6026 41.3876 28.0873 41.5183 27.5982C41.649 27.1091 41.9093 26.6644 42.2716 26.3109L44.1138 24.5137C44.3826 24.2517 44.5962 23.9386 44.742 23.5927C44.8878 23.2469 44.9629 22.8753 44.9629 22.5C44.9629 22.1247 44.8878 21.7531 44.742 21.4073C44.5962 21.0614 44.3826 20.7483 44.1138 20.4862L42.2716 18.6919C41.9093 18.3384 41.649 17.8937 41.5183 17.4046C41.3876 16.9155 41.3914 16.4002 41.5292 15.9131L42.2267 13.4381C42.3283 13.0767 42.3565 12.6985 42.3096 12.326C42.2628 11.9535 42.1418 11.5941 41.9539 11.2691C41.7659 10.944 41.5148 10.6599 41.2153 10.4335C40.9158 10.207 40.574 10.0429 40.2101 9.95061L37.7182 9.31499C37.2277 9.19037 36.7798 8.9357 36.422 8.57781C36.0641 8.21992 35.8094 7.7721 35.6848 7.28155L35.052 4.78968C34.9594 4.42598 34.795 4.08448 34.5684 3.7853C34.3419 3.48612 34.0577 3.23531 33.7327 3.04765C33.4077 2.85999 33.0484 2.73927 32.6761 2.6926C32.3037 2.64593 31.9257 2.67427 31.5645 2.77593L29.0895 3.47343C28.6017 3.61139 28.0857 3.61497 27.5961 3.48377C27.1064 3.35257 26.6613 3.09148 26.3079 2.72812L24.5135 0.885928ZM33.1113 17.6906C33.5141 17.302 33.7461 16.7693 33.7561 16.2097C33.7661 15.65 33.5534 15.1094 33.1648 14.7066C32.7761 14.3038 32.2434 14.0718 31.6838 14.0618C31.1242 14.0518 30.5835 14.2645 30.1807 14.6531L18.5538 25.8806L14.8498 22.1822C14.4533 21.7868 13.9161 21.5652 13.3562 21.566C12.7963 21.5668 12.2596 21.7899 11.8643 22.1864C11.469 22.5829 11.2473 23.1201 11.2481 23.68C11.2489 24.2399 11.4721 24.7765 11.8685 25.1719L17.0407 30.33C17.4313 30.7203 17.9594 30.9418 18.5115 30.9471C19.0637 30.9523 19.5959 30.7409 19.9938 30.3581L33.1113 17.6906Z"
                      fill="#61FF00"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_79_584">
                      <rect width="45" height="45" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="failed-vector-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <path
                    d="M28.0003 56.6667L40.0003 44.6667L52.0003 56.6667L56.667 52L44.667 40L56.667 28L52.0003 23.3334L40.0003 35.3334L28.0003 23.3334L23.3337 28L35.3337 40L23.3337 52L28.0003 56.6667ZM40.0003 73.3334C35.3892 73.3334 31.0559 72.4578 27.0003 70.7067C22.9448 68.9556 19.417 66.5811 16.417 63.5834C13.417 60.5856 11.0426 57.0578 9.29366 53C7.54477 48.9422 6.66922 44.6089 6.667 40C6.66477 35.3911 7.54033 31.0578 9.29366 27C11.047 22.9422 13.4214 19.4145 16.417 16.4167C19.4126 13.4189 22.9403 11.0445 27.0003 9.29335C31.0603 7.54224 35.3937 6.66669 40.0003 6.66669C44.607 6.66669 48.9403 7.54224 53.0003 9.29335C57.0603 11.0445 60.5881 13.4189 63.5837 16.4167C66.5792 19.4145 68.9548 22.9422 70.7103 27C72.4659 31.0578 73.3403 35.3911 73.3337 40C73.327 44.6089 72.4514 48.9422 70.707 53C68.9626 57.0578 66.5881 60.5856 63.5837 63.5834C60.5792 66.5811 57.0514 68.9567 53.0003 70.71C48.9492 72.4634 44.6159 73.3378 40.0003 73.3334ZM40.0003 66.6667C47.4448 66.6667 53.7503 64.0834 58.917 58.9167C64.0837 53.75 66.667 47.4445 66.667 40C66.667 32.5556 64.0837 26.25 58.917 21.0834C53.7503 15.9167 47.4448 13.3334 40.0003 13.3334C32.5559 13.3334 26.2503 15.9167 21.0837 21.0834C15.917 26.25 13.3337 32.5556 13.3337 40C13.3337 47.4445 15.917 53.75 21.0837 58.9167C26.2503 64.0834 32.5559 66.6667 40.0003 66.6667Z"
                    fill="#FF0000"
                  />
                </svg>
              </div>
              <p class="success">${history[i].status}</p>
              <p class="airtimeSub-text">
                N<span id="amount-recharged">${history[i].amount}</span>
                <span class="success-or-error-message"
                  >${history[i].receiptSuccessfull}</span
                >
              </p>
              <div class="networkBox">Network: <span class="subNetwork">Glo</span></div>
              <div class="recepient-container">
                <div class="recepient-number-airtime">
                  <span class="recepient">Recipient No: </span>
                  <span id="recepient-number">${history[i].PhoneNumber}</span>
                </div>
                <div class="dateAirtime">
                  <span class="date-airtime">Date:</span>
                  <span id="transaction-date">${history[i].time}</span>
                </div>
              </div>
            </div>
          </div>
  `;
    const backgroundColor = mainContainer.querySelector(".airtime-history-div");
    const vectorBox2 = mainContainer.querySelector(".vector-box2");
    const failedVectorBox = mainContainer.querySelector(".failed-vector-box");
    const success = mainContainer.querySelector(".success");
    const status = mainContainer.querySelector(".status");
    if (status.textContent === "Failed!" && success.textContent === "Failed!") {
      backgroundColor.style.backgroundColor = "#ffeede";
      vectorBox2.style.display = "none";
      failedVectorBox.style.display = "block";
      status.style.color = "red";
      success.style.color = "red";
    } else {
      backgroundColor.style.backgroundColor = "#E8E8E8";
      vectorBox2.style.display = "block";
      failedVectorBox.style.display = "none";
      status.textContent = "Success!";
      success.textContent = "Success!";
    }

    const gloNumberPrifix = ["0812", "0902", "0907", "0901", "0912", "0701"];
    const mtnNumberPrifix = [
      "0813",
      "0810",
      "0814",
      "0816",
      "0913",
      "0916",
      "0702",
    ];
    const prifix = history[i].PhoneNumber.slice(0, 4);

    if (gloNumberPrifix.includes(prifix)) {
      mainContainer.querySelector(".subNetwork").textContent = "Airtel";
    } else if (mtnNumberPrifix.includes(prifix)) {
      mainContainer.querySelector(".subNetwork").textContent = "MTN";
    }
    // Append and return
    li.appendChild(mainContainer);
    historyList.appendChild(li);

    // Bind toggle event to vector-box
    const vectorBox = li.querySelector(".vector-box");
    const textDiv = li.querySelector(".text-div");
    const receiptDv = li.querySelector(".receipt-div");
    const mainReceipt = li.querySelector(".mainReceipt");

    vectorBox.addEventListener("click", () => {
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
}

createHistoryList();

function dataHistoryList() {
  const dataHistory =
    JSON.parse(localStorage.getItem("savedDataHistory")) || [];

  const historyList = document.querySelector(".history-list");

  for (let i = 0; i < dataHistory.length; i++) {
    const li = document.createElement("li");
    console.log(dataHistory[i]);
    const mainContainer = document.createElement("div");
    mainContainer.className = "mainContner";

    mainContainer.innerHTML = ` 
              
<div class="airtime-history-div">
  <div class="text-div">
    <p class="airtime-purchase">Data purchase. <span class="little-time">${
      dataHistory[i].subTime
    }</span></p>
    <p class="phone">Phone No: <span class="dataNumber">${
      dataHistory[i].number
    }</span></p>
  </div>
  <div class="receipt-div">
    <p class="status">${dataHistory[i].status}</p>
    <div class="vector-box">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
      >
        <path
          d="M0.75 5.24995L1.875 4.19995L7.5 9.74995L13.125 4.19995L14.25 5.24995L7.5 12L0.75 5.24995Z"
          fill="black"
          fill-opacity="0.5"
        />
      </svg>
    </div>
  </div>
</div>
<div class="mainReceipt">
  <div class="successfull-main-receipt-container">
    <div class="main-receipt">
      <div class="dataSuccessful-container">
        <div class="successful-box">Successfully delibvered!</div>
      </div>
      <p class="service-type">Service type: Data</p>
      <div class="recepient-details-container">
        <div class="recepient-number">
          Recipient number:
          <span id="subscribed-phone-number">${dataHistory[i].number}</span>
        </div>
        <div class="Purchased-bundle">
          Purchased bundle:
          <span id="amount-of-data-subscribed">${
            dataHistory[i].purchasedAmount
          }</span>
        </div>
        <div class="networkType">Network type:${" "}${
      dataHistory[i].network
    }</div>
        <div class="date">
          Date:
          <span id="subscription-date">${dataHistory[i].subTime}</span>
        </div>
        <div class="check-balance-code">
          Dial<span>*323#</span> to check balance
        </div>
      </div>
    </div>
  </div>
  <!-- FAILED RECEIPT -->
  <div class="main-receipt-container">
    <div class="main-receipt">
      <div class="failed-container">
        <div class="failed-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M10.894 22.0475L15.5628 17.3786L20.2317 22.0475L22.0474 20.2318L17.3785 15.5629L22.0474 10.894L20.2317 9.07836L15.5628 13.7472L10.894 9.07836L9.0783 10.894L13.7472 15.5629L9.0783 20.2318L10.894 22.0475ZM15.5628 28.532C13.7688 28.532 12.0828 28.1913 10.5049 27.51C8.92699 26.8287 7.55443 25.9049 6.38721 24.7385C5.21999 23.5722 4.29616 22.1996 3.61572 20.6209C2.93527 19.0421 2.59462 17.3561 2.59375 15.5629C2.59289 13.7697 2.93354 12.0837 3.61572 10.505C4.29789 8.92619 5.22172 7.55363 6.38721 6.38727C7.5527 5.22092 8.92526 4.29709 10.5049 3.61578C12.0845 2.93447 13.7705 2.59381 15.5628 2.59381C17.3552 2.59381 19.0412 2.93447 20.6208 3.61578C22.2004 4.29709 23.573 5.22092 24.7385 6.38727C25.904 7.55363 26.8282 8.92619 27.5113 10.505C28.1943 12.0837 28.5345 13.7697 28.5319 15.5629C28.5294 17.3561 28.1887 19.0421 27.51 20.6209C26.8313 22.1996 25.9074 23.5722 24.7385 24.7385C23.5695 25.9049 22.197 26.8292 20.6208 27.5113C19.0446 28.1935 17.3586 28.5337 15.5628 28.532ZM15.5628 25.9382C18.4593 25.9382 20.9126 24.9331 22.9228 22.9229C24.933 20.9127 25.9381 18.4593 25.9381 15.5629C25.9381 12.6665 24.933 10.2132 22.9228 8.20294C20.9126 6.19273 18.4593 5.18763 15.5628 5.18763C12.6664 5.18763 10.2131 6.19273 8.20289 8.20294C6.19268 10.2132 5.18757 12.6665 5.18757 15.5629C5.18757 18.4593 6.19268 20.9127 8.20289 22.9229C10.2131 24.9331 12.6664 25.9382 15.5628 25.9382Z"
              fill="#FF0000"
            />
          </svg>
        </div>
        <p class="failed">Failed</p>
        <p class="invalid-numbber">Invalid number</p>
      </div>
      <p class="svic-type">Service type: Data</p>
      <div class="recepient-details-container">
        <div class="recepient-number">
          Recipient number:
          <span class="subscribed-phone-number">${dataHistory[i].number}</span>
        </div>
        <div class="Purchased-bundle">
          Purchased bundle:
          <span class="amount-of-data-subscribed">${
            dataHistory[i].purchasedAmount
          }</span>
        </div>
        <div class="networkType">Network type:${" "}${
      dataHistory[i].network
    }</div>
        <div class="date">
          Date:
          <span class="subscription-date">${dataHistory[i].subTime}</span>
        </div>
        <div class="check-balance-code">
          Dial<span>*323#</span> to check balance
        </div>
      </div>
    </div>
  </div>
</div>

  `;

    // Append and return
    li.appendChild(mainContainer);
    historyList.appendChild(li);

    const statusContent = mainContainer.querySelector(".status");
    const divColor = mainContainer.querySelector(".airtime-history-div");
    const successfulReceipt = mainContainer.querySelector(
      ".successfull-main-receipt-container"
    );
    const failedReceipt = mainContainer.querySelector(
      ".main-receipt-container"
    );

    if (statusContent.textContent === "FAILED!") {
      statusContent.style.color = "red";
      divColor.style.backgroundColor = "#ffeede";
      successfulReceipt.style.display = "none";
      failedReceipt.style.display = "block";
    } else {
      divColor.style.backgroundColor = "#E8E8E8";
      successfulReceipt.style.display = "block";
      failedReceipt.style.display = "none";
    }

    // Bind toggle event to vector-box
    const vectorBox = li.querySelector(".vector-box");
    const textDiv = li.querySelector(".text-div");
    const receiptDv = li.querySelector(".receipt-div");
    const mainReceipt = li.querySelector(".mainReceipt");

    vectorBox.addEventListener("click", () => {
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
}
dataHistoryList();

function transferListFunction() {
  const transferHistory =
    JSON.parse(localStorage.getItem("savedTransactions")) || [];

  const historyList = document.querySelector(".history-list");

  for (let i = 0; i < transferHistory.length; i++) {
    const li = document.createElement("li");
    console.log(transferHistory[i]);
    const mainContainer = document.createElement("div");
    mainContainer.className = "mainContner";

    mainContainer.innerHTML = ` 
              
      <div class="p2p-history-div">
        <p class="airtime-purchase">
          P2P transfer to <span class="transfered-username">${transferHistory[i].username}</span> <span class="transfer-time" >${transferHistory[i].time}</span>
        </p>
        <div class="receipt-div">
          <p class="status">${transferHistory[i].status}</p>
          <div class="vector-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M0.75 5.24995L1.875 4.19995L7.5 9.74995L13.125 4.19995L14.25 5.24995L7.5 12L0.75 5.24995Z"
                fill="black"
                fill-opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="mainReceipt">
        <div class="transfer-receipt">
          <div class="successReceipt-vector-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 45 45"
              fill="none"
            >
              <g clip-path="url(#clip0_175_686)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.514 0.885958C24.252 0.617219 23.9388 0.403643 23.593 0.257818C23.2471 0.111992 22.8756 0.0368652 22.5003 0.0368652C22.1249 0.0368652 21.7534 0.111992 21.4075 0.257818C21.0617 0.403643 20.7485 0.617219 20.4865 0.885958L18.6921 2.72815C18.339 3.09102 17.8944 3.35181 17.4053 3.48299C16.9162 3.61418 16.4008 3.61088 15.9134 3.47346L13.4384 2.77596C13.0771 2.6743 12.6992 2.64597 12.3268 2.69263C11.9544 2.7393 11.5951 2.86002 11.2701 3.04768C10.9451 3.23534 10.661 3.48615 10.4344 3.78533C10.2078 4.08451 10.0434 4.42601 9.95089 4.78971L9.31526 7.28158C9.19065 7.77213 8.93597 8.21996 8.57808 8.57784C8.2202 8.93573 7.77237 9.1904 7.28183 9.31502L4.78995 9.94783C4.42625 10.0404 4.08475 10.2048 3.78557 10.4314C3.48639 10.6579 3.23559 10.9421 3.04792 11.2671C2.86026 11.5921 2.73954 11.9514 2.69288 12.3237C2.64621 12.6961 2.67454 13.0741 2.7762 13.4353L3.4737 15.9131C3.61113 16.4005 3.61442 16.9159 3.48324 17.405C3.35206 17.8941 3.09126 18.3387 2.72839 18.6919L0.886202 20.4863C0.617463 20.7483 0.403888 21.0615 0.258062 21.4073C0.112236 21.7531 0.0371094 22.1247 0.0371094 22.5C0.0371094 22.8754 0.112236 23.2469 0.258062 23.5927C0.403888 23.9386 0.617463 24.2517 0.886202 24.5138L2.72839 26.311C3.09077 26.6639 3.35126 27.108 3.48243 27.5965C3.6136 28.0851 3.61058 28.5999 3.4737 29.0869L2.7762 31.5619C2.67454 31.9232 2.64621 32.3011 2.69288 32.6735C2.73954 33.0459 2.86026 33.4051 3.04792 33.7301C3.23559 34.0551 3.48639 34.3393 3.78557 34.5659C4.08475 34.7924 4.42625 34.9568 4.78995 35.0494L7.28183 35.685C7.77237 35.8096 8.2202 36.0643 8.57808 36.4222C8.93597 36.7801 9.19065 37.2279 9.31526 37.7185L9.94808 40.2103C10.0403 40.5743 10.2045 40.9161 10.4309 41.2156C10.6574 41.5151 10.9415 41.7662 11.2665 41.9541C11.5916 42.1421 11.9509 42.263 12.3235 42.3099C12.696 42.3567 13.0741 42.3285 13.4356 42.2269L15.9134 41.5294C16.4005 41.3916 16.9158 41.3879 17.4049 41.5186C17.8939 41.6493 18.3387 41.9095 18.6921 42.2719L20.4865 44.1141C20.7485 44.3828 21.0617 44.5964 21.4075 44.7422C21.7534 44.888 22.1249 44.9632 22.5003 44.9632C22.8756 44.9632 23.2471 44.888 23.593 44.7422C23.9388 44.5964 24.252 44.3828 24.514 44.1141L26.3112 42.2719C26.6644 41.91 27.1087 41.65 27.5972 41.5194C28.0857 41.3887 28.6004 41.3922 29.0871 41.5294L31.5621 42.2269C31.9236 42.3285 32.3017 42.3567 32.6742 42.3099C33.0468 42.263 33.4062 42.1421 33.7312 41.9541C34.0562 41.7662 34.3403 41.5151 34.5668 41.2156C34.7932 40.9161 34.9574 40.5743 35.0496 40.2103L35.6853 37.7185C35.8099 37.2279 36.0646 36.7801 36.4224 36.4222C36.7803 36.0643 37.2282 35.8096 37.7187 35.685L40.2106 35.0522C40.5745 34.96 40.9163 34.7958 41.2158 34.5693C41.5153 34.3429 41.7664 34.0588 41.9544 33.7338C42.1423 33.4087 42.2633 33.0493 42.3101 32.6768C42.357 32.3043 42.3288 31.9262 42.2271 31.5647L41.5296 29.0897C41.3919 28.6026 41.3881 28.0873 41.5188 27.5982C41.6495 27.1092 41.9098 26.6644 42.2721 26.311L44.1143 24.5138C44.3831 24.2517 44.5966 23.9386 44.7425 23.5927C44.8883 23.2469 44.9634 22.8754 44.9634 22.5C44.9634 22.1247 44.8883 21.7531 44.7425 21.4073C44.5966 21.0615 44.3831 20.7483 44.1143 20.4863L42.2721 18.6919C41.9098 18.3384 41.6495 17.8937 41.5188 17.4046C41.3881 16.9155 41.3919 16.4003 41.5296 15.9131L42.2271 13.4381C42.3288 13.0767 42.357 12.6986 42.3101 12.326C42.2633 11.9535 42.1423 11.5941 41.9544 11.2691C41.7664 10.9441 41.5153 10.6599 41.2158 10.4335C40.9163 10.2071 40.5745 10.0429 40.2106 9.95065L37.7187 9.31502C37.2282 9.1904 36.7803 8.93573 36.4224 8.57784C36.0646 8.21996 35.8099 7.77213 35.6853 7.28158L35.0525 4.78971C34.9599 4.42601 34.7955 4.08451 34.5689 3.78533C34.3424 3.48615 34.0582 3.23534 33.7332 3.04768C33.4082 2.86002 33.0489 2.7393 32.6765 2.69263C32.3042 2.64597 31.9262 2.6743 31.565 2.77596L29.09 3.47346C28.6022 3.61142 28.0862 3.615 27.5965 3.4838C27.1069 3.3526 26.6618 3.09151 26.3084 2.72815L24.514 0.885958ZM33.1118 17.6906C33.5146 17.302 33.7465 16.7693 33.7566 16.2097C33.7666 15.6501 33.5539 15.1094 33.1653 14.7066C32.7766 14.3038 32.2439 14.0719 31.6843 14.0618C31.1247 14.0518 30.584 14.2645 30.1812 14.6531L18.5543 25.8806L14.8503 22.1822C14.4538 21.7869 13.9165 21.5652 13.3567 21.566C12.7968 21.5668 12.2601 21.79 11.8648 22.1864C11.4695 22.5829 11.2478 23.1201 11.2486 23.68C11.2494 24.2399 11.4726 24.7766 11.869 25.1719L17.0412 30.33C17.4318 30.7203 17.9599 30.9418 18.512 30.9471C19.0642 30.9524 19.5964 30.7409 19.9943 30.3581L33.1118 17.6906Z"
                  fill="#61FF00"
                />
              </g>
              <defs>
                <clipPath id="clip0_175_686">
                  <rect width="45" height="45" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="failed-receipt-vector-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="65"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path
                d="M28.0003 56.6666L40.0003 44.6666L52.0003 56.6666L56.667 52L44.667 40L56.667 28L52.0003 23.3333L40.0003 35.3333L28.0003 23.3333L23.3337 28L35.3337 40L23.3337 52L28.0003 56.6666ZM40.0003 73.3333C35.3892 73.3333 31.0559 72.4577 27.0003 70.7066C22.9448 68.9555 19.417 66.5811 16.417 63.5833C13.417 60.5855 11.0426 57.0577 9.29366 53C7.54477 48.9422 6.66922 44.6088 6.667 40C6.66477 35.3911 7.54033 31.0577 9.29366 27C11.047 22.9422 13.4214 19.4144 16.417 16.4166C19.4126 13.4188 22.9403 11.0444 27.0003 9.29329C31.0603 7.54218 35.3937 6.66663 40.0003 6.66663C44.607 6.66663 48.9403 7.54218 53.0003 9.29329C57.0603 11.0444 60.5881 13.4188 63.5837 16.4166C66.5792 19.4144 68.9548 22.9422 70.7103 27C72.4659 31.0577 73.3403 35.3911 73.3337 40C73.327 44.6088 72.4514 48.9422 70.707 53C68.9626 57.0577 66.5881 60.5855 63.5837 63.5833C60.5792 66.5811 57.0514 68.9566 53.0003 70.71C48.9492 72.4633 44.6159 73.3377 40.0003 73.3333ZM40.0003 66.6666C47.4448 66.6666 53.7503 64.0833 58.917 58.9166C64.0837 53.75 66.667 47.4444 66.667 40C66.667 32.5555 64.0837 26.25 58.917 21.0833C53.7503 15.9166 47.4448 13.3333 40.0003 13.3333C32.5559 13.3333 26.2503 15.9166 21.0837 21.0833C15.917 26.25 13.3337 32.5555 13.3337 40C13.3337 47.4444 15.917 53.75 21.0837 58.9166C26.2503 64.0833 32.5559 66.6666 40.0003 66.6666Z"
                fill="#FF0000"
              />
            </svg>
          </div>
          <p class="successful">${transferHistory[i].status}</p>
          <p class="transfer-sub-text">
            You have successfully transferred
            <span class="tfAmount">${transferHistory[i].amount}</span> to <span>${transferHistory[i].username}</span>
          </p>
          <p class="transferDateAndTimer">${transferHistory[i].time}</p>
        </div>
      </div>

  `;

    // Append and return
    li.appendChild(mainContainer);
    historyList.appendChild(li);

    const vector = mainContainer.querySelector(".successReceipt-vector-box");
    const failedVector = mainContainer.querySelector(
      ".failed-receipt-vector-box"
    );
    const status = mainContainer.querySelector(".successful");
    const firstStatus = mainContainer.querySelector(".status");
    const receiptDiv = mainContainer.querySelector(".p2p-history-div");
    const subText = mainContainer.querySelector(".transfer-sub-text");

    if (
      vector &&
      failedVector &&
      status &&
      firstStatus &&
      subText &&
      status.textContent === "Failed!" &&
      firstStatus.textContent === "Failed!"
    ) {
      vector.style.display = "none";
      failedVector.style.display = "block";
      receiptDiv.style.backgroundColor = "#ffeede";
      status.style.color = "red";
      firstStatus.style.color = "red";
      subText.textContent = `Transfer of ${transferHistory[i].amount} to ${transferHistory[i].username}  failed!`;
    } else {
      vector.style.display = "block";
      failedVector.style.display = "none";
      receiptDiv.style.backgroundColor = "#E8E8E8";
    }

    // Bind toggle event to vector-box
    const vectorBox = li.querySelector(".vector-box");
    const textDiv = li.querySelector(".airtime-purchase");
    const receiptDv = li.querySelector(".receipt-div");
    const mainReceipt = li.querySelector(".mainReceipt");

    vectorBox.addEventListener("click", () => {
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
}
transferListFunction();

function nepaRecharge() {
  const nepaRechargeList =
    JSON.parse(localStorage.getItem("savedRecharge")) || [];
  console.log(nepaRechargeList);

  const historyList = document.querySelector(".history-list");

  for (let i = 0; i < nepaRechargeList.length; i++) {
    const li = document.createElement("li");
    console.log(nepaRechargeList[i]);
    const mainContainer = document.createElement("div");
    mainContainer.className = "mainContner";

    mainContainer.innerHTML = ` 
              
      <div class="p2p-history-div">
        <p class="airtime-purchase">
          NEPA recharge. <span class="nepa-time">${nepaRechargeList[i].time}</span>
        </p>
        <div class="receipt-div">
          <p class="status">${nepaRechargeList[i].status2}</p>
          <div class="vector-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M0.75 5.24995L1.875 4.19995L7.5 9.74995L13.125 4.19995L14.25 5.24995L7.5 12L0.75 5.24995Z"
                fill="black"
                fill-opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="mainReceipt">
      <div class="nepa-bill-receipt">
        <p class="payment-successful">${nepaRechargeList[i].status}</p>
        <p class="eedc powerCompany">${nepaRechargeList[i].powerCompany}</p>
        <div class="center-container">
          <div class="pDiv">
            <p class="meter-number:">Meter number:</p>
            <p class="m-number">${nepaRechargeList[i].meterNumber}</p>
          </div>
          <div class="pDiv">
            <p class="power-company">Power company:</p>
            <p class="powerCompany" >${nepaRechargeList[i].powerCompany}</p>
          </div>
          <div class="pDiv">
            <p class="costumer-name">Costumer name:</p>
            <p class="c-name">${nepaRechargeList[i].customerName}</p>
          </div>
          <div class="pDiv">
            <p class="costumer-number">Costumer number:</p>
            <p class="c-number">${nepaRechargeList[i].customerNumber}</p>
          </div>
          <div class="pDiv">
            <p class="costumer’s-address">Address:</p>
            <p class="c-address">${nepaRechargeList[i].address}</p>
          </div>
          <div class="pDiv">
            <p class="meter-type">Meter type:</p>
            <p>Prepaid</p>
          </div>
          <div class="pDiv">
            <p class="amount">Amount:</p>
            <p class="paid-amount">${nepaRechargeList[i].amount}</p>
          </div>
          <div class="pDiv">
            <p class="payment-time">Time:</p>

            <p class="time&date">${nepaRechargeList[i].time}</p>
          </div>
        </div>
      </div>
      </div>

  `;

    // Append and return
    li.appendChild(mainContainer);
    historyList.appendChild(li);
    const status2 = mainContainer.querySelector(".status");
    const firstStatus = mainContainer.querySelector(".payment-successful");
    const receiptDiv = mainContainer.querySelector(".p2p-history-div");

    if (
      status2.textContent === "Failed" &&
      firstStatus.textContent === "Recharge failed"
    ) {
      receiptDiv.style.backgroundColor = "#ffeede";
      status2.style.color = "red";
      firstStatus.style.color = "red";
      firstStatus.style.backgroundColor = "white";
    } else {
      receiptDiv.style.backgroundColor = "#E8E8E8";
    }

    // Bind toggle event to vector-box
    const vectorBox = li.querySelector(".vector-box");
    const textDiv = li.querySelector(".airtime-purchase");
    const receiptDv = li.querySelector(".receipt-div");
    const mainReceipt = li.querySelector(".mainReceipt");

    vectorBox.addEventListener("click", () => {
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
}

nepaRecharge();

function tvSubscription() {
  const tvSubscriptionList =
    JSON.parse(localStorage.getItem("savedTvRecharge")) || [];
  console.log(tvSubscriptionList);

  const historyList = document.querySelector(".history-list");

  for (let i = 0; i < tvSubscriptionList.length; i++) {
    const li = document.createElement("li");
    console.log(tvSubscriptionList[i]);
    const mainContainer = document.createElement("div");
    mainContainer.className = "mainContner";

    mainContainer.innerHTML = ` 
              
      <div class="p2p-history-div">
        <p class="airtime-purchase">
          Tv recharge. <span class="nepa-time">${tvSubscriptionList[i].time}</span>
        </p>
        <div class="receipt-div">
          <p class="status">${tvSubscriptionList[i].status}</p>
          <div class="vector-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M0.75 5.24995L1.875 4.19995L7.5 9.74995L13.125 4.19995L14.25 5.24995L7.5 12L0.75 5.24995Z"
                fill="black"
                fill-opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="mainReceipt">
      <div class="tv-main-receipt">
        <div class="tv-success-vector">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
          >
            <g clip-path="url(#clip0_123_85)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.866 0.645687C17.675 0.449826 17.4468 0.294169 17.1947 0.187889C16.9427 0.0816087 16.6719 0.0268555 16.3983 0.0268555C16.1248 0.0268555 15.854 0.0816087 15.602 0.187889C15.3499 0.294169 15.1217 0.449826 14.9307 0.645687L13.6229 1.9883C13.3655 2.25277 13.0415 2.44284 12.685 2.53845C12.3286 2.63405 11.9529 2.63165 11.5977 2.5315L9.79391 2.02315C9.53062 1.94906 9.25516 1.92841 8.98377 1.96242C8.71237 1.99643 8.45053 2.08441 8.21366 2.22118C7.9768 2.35795 7.7697 2.54075 7.60457 2.75879C7.43944 2.97684 7.31962 3.22573 7.25217 3.4908L6.78891 5.30691C6.69809 5.66443 6.51248 5.99081 6.25165 6.25165C5.99081 6.51248 5.66443 6.69809 5.30691 6.78891L3.4908 7.25012C3.22573 7.31757 2.97684 7.43739 2.75879 7.60252C2.54075 7.76765 2.35795 7.97475 2.22118 8.21161C2.08441 8.44848 1.99643 8.71032 1.96242 8.98172C1.92841 9.25311 1.94906 9.52857 2.02315 9.79186L2.5315 11.5977C2.63165 11.9529 2.63405 12.3286 2.53845 12.685C2.44284 13.0415 2.25277 13.3655 1.9883 13.6229L0.645687 14.9307C0.449826 15.1217 0.294169 15.3499 0.187889 15.602C0.0816087 15.854 0.0268555 16.1248 0.0268555 16.3983C0.0268555 16.6719 0.0816087 16.9427 0.187889 17.1947C0.294169 17.4468 0.449826 17.675 0.645687 17.866L1.9883 19.1758C2.25241 19.433 2.44226 19.7567 2.53786 20.1128C2.63345 20.4688 2.63126 20.844 2.5315 21.199L2.02315 23.0028C1.94906 23.2661 1.92841 23.5415 1.96242 23.8129C1.99643 24.0843 2.08441 24.3462 2.22118 24.583C2.35795 24.8199 2.54075 25.027 2.75879 25.1921C2.97684 25.3572 3.22573 25.4771 3.4908 25.5445L5.30691 26.0078C5.66443 26.0986 5.99081 26.2842 6.25165 26.545C6.51248 26.8059 6.69809 27.1322 6.78891 27.4898L7.25012 29.3059C7.31735 29.5711 7.437 29.8202 7.60204 30.0385C7.76707 30.2568 7.97414 30.4398 8.21103 30.5768C8.44792 30.7138 8.70984 30.8019 8.98134 30.8361C9.25284 30.8702 9.52843 30.8496 9.79186 30.7756L11.5977 30.2672C11.9527 30.1668 12.3283 30.1641 12.6847 30.2593C13.0412 30.3546 13.3653 30.5443 13.6229 30.8084L14.9307 32.151C15.1217 32.3469 15.3499 32.5025 15.602 32.6088C15.854 32.7151 16.1248 32.7698 16.3983 32.7698C16.6719 32.7698 16.9427 32.7151 17.1947 32.6088C17.4468 32.5025 17.675 32.3469 17.866 32.151L19.1758 30.8084C19.4332 30.5446 19.757 30.3552 20.1131 30.2599C20.4691 30.1647 20.8442 30.1672 21.199 30.2672L23.0028 30.7756C23.2662 30.8496 23.5418 30.8702 23.8133 30.8361C24.0848 30.8019 24.3467 30.7138 24.5836 30.5768C24.8205 30.4398 25.0276 30.2568 25.1926 30.0385C25.3576 29.8202 25.4773 29.5711 25.5445 29.3059L26.0078 27.4898C26.0986 27.1322 26.2842 26.8059 26.545 26.545C26.8059 26.2842 27.1322 26.0986 27.4898 26.0078L29.3059 25.5466C29.5711 25.4793 29.8202 25.3597 30.0385 25.1946C30.2568 25.0296 30.4398 24.8225 30.5768 24.5857C30.7138 24.3488 30.8019 24.0868 30.8361 23.8153C30.8702 23.5438 30.8496 23.2682 30.7756 23.0048L30.2672 21.201C30.1668 20.846 30.1641 20.4704 30.2593 20.114C30.3546 19.7576 30.5443 19.4334 30.8084 19.1758L32.151 17.866C32.3469 17.675 32.5025 17.4468 32.6088 17.1947C32.7151 16.9427 32.7698 16.6719 32.7698 16.3983C32.7698 16.1248 32.7151 15.854 32.6088 15.602C32.5025 15.3499 32.3469 15.1217 32.151 14.9307L30.8084 13.6229C30.5443 13.3653 30.3546 13.0412 30.2593 12.6847C30.1641 12.3283 30.1668 11.9527 30.2672 11.5977L30.7756 9.79391C30.8496 9.53048 30.8702 9.25489 30.8361 8.98339C30.8019 8.71189 30.7138 8.44997 30.5768 8.21308C30.4398 7.97618 30.2568 7.76912 30.0385 7.60409C29.8202 7.43905 29.5711 7.3194 29.3059 7.25217L27.4898 6.78891C27.1322 6.69809 26.8059 6.51248 26.545 6.25165C26.2842 5.99081 26.0986 5.66443 26.0078 5.30691L25.5466 3.4908C25.4791 3.22573 25.3593 2.97684 25.1942 2.75879C25.029 2.54075 24.8219 2.35795 24.5851 2.22118C24.3482 2.08441 24.0864 1.99643 23.815 1.96242C23.5436 1.92841 23.2681 1.94906 23.0048 2.02315L21.201 2.5315C20.8455 2.63205 20.4694 2.63465 20.1126 2.53903C19.7557 2.44342 19.4314 2.25313 19.1738 1.9883L17.866 0.645687ZM24.1322 12.8932C24.4258 12.61 24.5948 12.2217 24.6021 11.8138C24.6094 11.406 24.4544 11.0119 24.1712 10.7184C23.8879 10.4248 23.4997 10.2558 23.0918 10.2485C22.6839 10.2412 22.2899 10.3962 21.9963 10.6794L13.5225 18.8622L10.8229 16.1667C10.534 15.8786 10.1424 15.717 9.73434 15.7176C9.32629 15.7182 8.93518 15.8808 8.64705 16.1698C8.35892 16.4587 8.19738 16.8503 8.19795 17.2584C8.19853 17.6664 8.36118 18.0575 8.65013 18.3456L12.4197 22.105C12.7044 22.3894 13.0892 22.5509 13.4916 22.5547C13.8941 22.5585 14.2819 22.4044 14.572 22.1255L24.1322 12.8932Z"
                fill="#61FF00"
              />
            </g>
            <defs>
              <clipPath id="clip0_123_85">
                <rect width="32.7967" height="32.7967" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="tv-failed-vector">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="65"
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              d="M28.0003 56.6666L40.0003 44.6666L52.0003 56.6666L56.667 52L44.667 40L56.667 28L52.0003 23.3333L40.0003 35.3333L28.0003 23.3333L23.3337 28L35.3337 40L23.3337 52L28.0003 56.6666ZM40.0003 73.3333C35.3892 73.3333 31.0559 72.4577 27.0003 70.7066C22.9448 68.9555 19.417 66.5811 16.417 63.5833C13.417 60.5855 11.0426 57.0577 9.29366 53C7.54477 48.9422 6.66922 44.6088 6.667 40C6.66477 35.3911 7.54033 31.0577 9.29366 27C11.047 22.9422 13.4214 19.4144 16.417 16.4166C19.4126 13.4188 22.9403 11.0444 27.0003 9.29329C31.0603 7.54218 35.3937 6.66663 40.0003 6.66663C44.607 6.66663 48.9403 7.54218 53.0003 9.29329C57.0603 11.0444 60.5881 13.4188 63.5837 16.4166C66.5792 19.4144 68.9548 22.9422 70.7103 27C72.4659 31.0577 73.3403 35.3911 73.3337 40C73.327 44.6088 72.4514 48.9422 70.707 53C68.9626 57.0577 66.5881 60.5855 63.5837 63.5833C60.5792 66.5811 57.0514 68.9566 53.0003 70.71C48.9492 72.4633 44.6159 73.3377 40.0003 73.3333ZM40.0003 66.6666C47.4448 66.6666 53.7503 64.0833 58.917 58.9166C64.0837 53.75 66.667 47.4444 66.667 40C66.667 32.5555 64.0837 26.25 58.917 21.0833C53.7503 15.9166 47.4448 13.3333 40.0003 13.3333C32.5559 13.3333 26.2503 15.9166 21.0837 21.0833C15.917 26.25 13.3337 32.5555 13.3337 40C13.3337 47.4444 15.917 53.75 21.0837 58.9166C26.2503 64.0833 32.5559 66.6666 40.0003 66.6666Z"
              fill="#FF0000"
            />
          </svg>
        </div>
        <p class="tv-success">${tvSubscriptionList[i].status}</p>
        <div class="tv-details-container">
          <div class="details-parent-div">
            <p class="smart-number">Smart Number:</p>
            <p>${tvSubscriptionList[i].SmartNumber}</p>
          </div>
          <div class="details-parent-div">
            <p>Plan Duration:</p>
            <p>${tvSubscriptionList[i].PlanDuration}</p>
          </div>
          <div class="details-parent-div">
            <p>Expiring Date:</p>
            <p class="expiring">${tvSubscriptionList[i].ExpiringDate}</p>
          </div>
          <div class="details-parent-div">
            <p>SERVICE TYPE:</p>
            <p>${tvSubscriptionList[i].SERVICETYPE}</p> 
          </div>
          <div class="details-parent-div">
            <p>Service code:</p>
            <p>${tvSubscriptionList[i].ServiceCode}</p>
          </div>
          <div class="details-parent-div">
            <p>Subscribed amount:</p>
            <p>${tvSubscriptionList[i].Subscriptionamount}</p>
          </div>
          <div class="details-parent-div" id="time-margin">
            <p class="timeWidth" >Time:</p>
            <p class="timeWidth2">${tvSubscriptionList[i].time}</p>
          </div>
        </div>
      </div>
      </div>

  `;

    // Append and return
    li.appendChild(mainContainer);
    historyList.appendChild(li);
    const status2 = mainContainer.querySelector(".status");
    const firstStatus = mainContainer.querySelector(".tv-success");
    const receiptDiv = mainContainer.querySelector(".p2p-history-div");
    const successVector = mainContainer.querySelector(".tv-success-vector");
    const failedVector = mainContainer.querySelector(".tv-failed-vector");

    if (
      status2.textContent === "Failed" &&
      firstStatus.textContent === "Failed"
    ) {
      receiptDiv.style.backgroundColor = "#ffeede";
      status2.style.color = "red";
      firstStatus.style.color = "red";
      firstStatus.style.backgroundColor = "white";
      successVector.style.display = "none";
      failedVector.style.display = "block";
    } else {
      receiptDiv.style.backgroundColor = "#E8E8E8";
    }

    // Bind toggle event to vector-box
    const vectorBox = li.querySelector(".vector-box");
    const textDiv = li.querySelector(".airtime-purchase");
    const receiptDv = li.querySelector(".receipt-div");
    const mainReceipt = li.querySelector(".mainReceipt");

    vectorBox.addEventListener("click", () => {
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
}

tvSubscription();
