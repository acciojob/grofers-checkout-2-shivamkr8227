//your code here
let table = document.querySelector("table");
let priceList = document.querySelectorAll("[data-ns-test=price]");
// console.log(priceList)
let sum = 0;
for(let i=0; i<priceList.length; i++){
    sum += parseInt(priceList[i].innerText);
}
// console.log(sum)

let lastRow = document.createElement("tr");
let tableData = document.createElement("td");
tableData.setAttribute("data-ns-test", "grandTotal");
tableData.innerText = sum;
lastRow.appendChild(tableData);
table.appendChild(lastRow);