let table = document.createElement("table");

for (let tr, i = 0; i < 10; i++) {
  tr = table.insertRow();

  for (let td, value, y = 1; y <= 10; y++) {
    td = tr.insertCell();
    value = i * 10 + y;
    td.textContent = value;
    td.style.padding = "7px";
    td.style.border = "2px solid green";
  }
}
table.style.margin = "0 auto";
table.style.width = "600px";
table.style.height = "600px";
table.style.borderCollapse = "collapse";
table.style.textAlign = "center";
document.body.appendChild(table);
