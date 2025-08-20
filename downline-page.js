document.getElementById("addList").addEventListener("click", () => {
  const tableBody = document.getElementsByTagName("tbody")[0];
  const name = document.getElementById("name").value.trim();
  const phoneNumb = document.getElementById("phoneNumb").value.trim();

  if (name === "" || phoneNumb === "") {
    return;
  }
  const dateAndtime = new Date();
  const formatedDate = dateAndtime.toLocaleString();
  const referral = null;
  const id = phoneNumb.slice(1) || null;
  const newEntry = { name, phoneNumb, date: formatedDate, referral, id };
  let entries = JSON.parse(localStorage.getItem("tableEntries")) || [];
  entries.push(newEntry);
  localStorage.setItem("tableEntries", JSON.stringify(entries));

  const tableRows = document.createElement("tr");
  const listName = document.createElement("td");
  const listPhone = document.createElement("td");
  const listDate = document.createElement("td");

  listName.textContent = name;
  listPhone.textContent = phoneNumb;
  listDate.textContent = formatedDate;

  tableRows.appendChild(listName);
  tableRows.appendChild(listPhone);
  tableRows.appendChild(listDate);
  tableBody.appendChild(tableRows);

  document.getElementById("name").value = "";
  document.getElementById("phoneNumb").value = "";
});

window.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementsByTagName("tbody")[0];
  const entries = JSON.parse(localStorage.getItem("tableEntries")) || [];

  entries.forEach((entry) => {
    const tableRows = document.createElement("tr");
    const listName = document.createElement("td");
    const listPhone = document.createElement("td");
    const listDate = document.createElement("td");

    listName.textContent = entry.name;
    listPhone.textContent = entry.phoneNumb;
    listDate.textContent = entry.date;

    tableRows.appendChild(listName);
    tableRows.appendChild(listPhone);
    tableRows.appendChild(listDate);
    tableBody.appendChild(tableRows);
  });
});
