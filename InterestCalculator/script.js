// Display the saved results on page load
displaySavedResults();

function calculate() {
  var amount = document.getElementById("amount").value;
  var interest = document.getElementById("interest").value / 100 / 12;
  var years = document.getElementById("years").value * 12;
  var x = Math.pow(1 + interest, years);
  var monthly = (amount * x * interest) / (x - 1);
  var total = monthly * years;
  document.getElementById("total").innerHTML = "Total Amount Paid: $" + total.toFixed(2);
  document.getElementById("monthly").innerHTML = "Monthly Payment: $" + monthly.toFixed(2);
  saveResult(amount, interest, years, total, monthly);
}

function reset() {
  document.getElementById("amount").value = "";
  document.getElementById("interest").value = "";
  document.getElementById("years").value = "";
  document.getElementById("total").innerHTML = "";
  document.getElementById("monthly").innerHTML = "";
}

function saveResult(amount, interest, years, total, monthly) {
  var savedResults = JSON.parse(localStorage.getItem('results') || '[]');
  savedResults.push({
    amount: amount,
    interest: interest,
    years: years,
    total: total,
    monthly: monthly
  });
  localStorage.setItem('results', JSON.stringify(savedResults));
  displaySavedResults();
}

function displaySavedResults() {
  var savedResults = JSON.parse(localStorage.getItem('results') || '[]');
  if (savedResults.length > 0) {
    var tableRows = '';
    for (var i = 0; i < savedResults.length; i++) {
      tableRows += '<tr><td>' + (i + 1) + '</td><td>$' + savedResults[i].total.toFixed(2) + '</td><td>$' + savedResults[i].monthly.toFixed(2) + '</td></tr>';
    }
    $('#results-table tbody').html(tableRows);
  }
}

function clearResults() {
  localStorage.removeItem('results');
  displaySavedResults();
}
