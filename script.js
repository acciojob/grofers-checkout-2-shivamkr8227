//your code here
function calculateTotal() {
    const prices = document.querySelectorAll("[data-ns-test='price']");
    let total = 0;

    prices.forEach((price) => {
        total += parseFloat(price.textContent);
    });

    const grandTotalCell = document.querySelector("[data-ns-test='grandTotal']");
    grandTotalCell.textContent = total.toFixed(2);
}

// Calculate the total initially
calculateTotal();

// Listen for changes in prices
const prices = document.querySelectorAll("[data-ns-test='price']");
prices.forEach((price) => {
    price.addEventListener("input", calculateTotal);
});
