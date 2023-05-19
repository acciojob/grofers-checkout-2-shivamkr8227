//your code here

function calculateTotalPrice() {
      var prices = document.querySelectorAll('[data-ns-test="price"]');
      var total = 0;

      // Iterate through each price element and sum the values
      prices.forEach(function(priceElement) {
        var price = parseInt(priceElement.innerText);
        if(price){
			total += price;
		}
          
        
      });

      // Create a new row for displaying the total price
      var table = document.getElementById('groceryTable');
      var newRow = document.createElement('tr');
      var totalCell = document.createElement('td');
      totalCell.setAttribute('colspan', '2');
      totalCell.textContent = 'Total Price: ' + total;
      newRow.appendChild(totalCell);

      // Set the data attribute for identifying the total element
      totalCell.setAttribute('data-ns-test', 'grandTotal');

      // Append the new row to the table
      table.appendChild(newRow);
    }

    // Calculate the total price initially
    calculateTotalPrice();