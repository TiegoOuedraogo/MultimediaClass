// $(document).ready(function () {
//     // Load the initial values from cookies if available
//     var initialAmount = parseFloat(getCookie('initialAmount') || 0);
//     var interestRate = parseFloat(getCookie('interestRate') || 0);
//     var years = parseInt(getCookie('years') || 0);
//     $('#initial-amount').val(initialAmount);
//     $('#interest-rate').val(interestRate);
//     $('#years').val(years);

//     // Calculate and display the result
//     function calculateResult() {
//       var amount   = parseFloat($('#initial-amount').val());
//   var rate = parseFloat($('#interest-rate').val()) / 100;
//   var years = parseInt($('#years').val());
//   var result = amount * Math.pow(1 + rate, years);
//   $('#result').text('$' + result.toFixed(2));
//   // Save the values to cookies
//   setCookie('initialAmount', amount, 365);
//   setCookie('interestRate', rate, 365);
//   setCookie('years', years, 365);
//   // Save the result to cookies
//   var results = JSON.parse(getCookie('results') || '[]');
//   results.push(result);
//   setCookie('results', JSON.stringify(results), 365);
//   // Display the saved results
//   displaySavedResults(results);
// }

// // Calculate the result on form submission
// $('#interest-form').on('submit', function (event) {
//   event.preventDefault();
//   calculateResult();
// });

// // Reset the form and clear cookies on reset button click
// $('#interest-form').on('reset', function () {
//   deleteCookie('initialAmount');
//   deleteCookie('interestRate');
//   deleteCookie('years');
//   deleteCookie('results');
//   setTimeout(function () {
//     $('#initial-amount').val('');
//     $('#interest-rate').val('');
//     $('#years').val('');
//     $('#result').text('');
//     $('#results-table tbody').empty();
//   }, 0);
// });

// // Display the saved results on page load
// var results = JSON.parse(getCookie('results') || '[]');
// displaySavedResults(results);
// });

// // Helper functions to manage cookies
// function setCookie(name, value, days) {
// var expires = '';
// if (days) {
// var date = new Date();
// date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
// expires = '; expires=' + date.toUTCString();
// }
// document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/';
// }

// function getCookie(name) {
// var nameEQ = name + '=';
// var ca = document.cookie.split(';');
// for (var i = 0; i < ca.length; i++) {
// var c = ca[i];
// while (c.charAt(0) == ' ') c = c.substring(1, c.length);
// if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
// }
// return null;
// }

// function deleteCookie(name) {
// setCookie(name, '', -1);
// }

// function displaySavedResults(results) {
// if (results.length > 0) {
// var tableRows = '';
// for (var i = 0; i < results.length; i++) {
// tableRows += '<tr><td>' + (i + 1) + '</td><td>$' + results[i].toFixed(2) + '</td></tr>';
// }
// $('#results-table tbody').html(tableRows);
// }
// }

$(document).ready(function () {
  // Load the initial values from cookies if available
  var initialAmount = parseFloat(getCookie('initialAmount') || 0);
  var interestRate = parseFloat(getCookie('interestRate') || 0);
  var years = parseInt(getCookie('years') || 0);
  var monthlyPayment = parseFloat(getCookie('monthlyPayment') || 0);
  $('#initial-amount').val(initialAmount);
  $('#interest-rate').val(interestRate);
  $('#years').val(years);
  $('#monthly-payment').val(monthlyPayment);

  function calculateResult() {
    var amount = parseFloat($('#initial-amount').val());
    var rate = parseFloat($('#interest-rate').val()) / 100;
    var years = parseInt($('#years').val());
    var monthlyPayment = parseFloat($('#monthly-payment').val()) || 0;
  
    var result = amount * Math.pow(1 + rate / 12, years * 12);
    var totalInterest = result - amount;
    var monthlyInterest = totalInterest / (years * 12);
    var totalAmount = result + (monthlyPayment * 12 * years);
  
    $('#result').text('Total amount: $' + totalAmount.toFixed(2));
    $('#monthly-payment-result').text('Monthly payment with interest: $' + (monthlyPayment + monthlyInterest).toFixed(2));
  
    // Save the values to cookies
    setCookie('initialAmount', amount, 365);
    setCookie('interestRate', rate, 365);
    setCookie('years', years, 365);
    setCookie('monthlyPayment', monthlyPayment, 365);
  
    // Save the result to cookies
    var results = JSON.parse(getCookie('results') || '[]');
    results.push(result);
    setCookie('results', JSON.stringify(results), 365);
  
    // Display the saved results
    displaySavedResults(results);
  }
function calculateResult() {
  var amount = parseFloat($('#initial-amount').val());
  var rate = parseFloat($('#interest-rate').val()) / 100;
  var years = parseInt($('#years').val());
  var monthlyPayment = parseFloat($('#monthly-payment').val()) || 0;

  var result = amount * Math.pow(1 + rate / 12, years * 12);
  var totalInterest = result - amount;
  var monthlyInterest = totalInterest / (years * 12);
  var totalAmount = result + (monthlyPayment * 12 * years);

  $('#result').text('Total amount: $' + totalAmount.toFixed(2));
  $('#monthly-payment-result').text('Monthly payment with interest: $' + (monthlyPayment + monthlyInterest).toFixed(2));

  // Save the values to cookies
  setCookie('initialAmount', amount, 365);
  setCookie('interestRate', rate, 365);
  setCookie('years', years, 365);
  setCookie('monthlyPayment', monthlyPayment, 365);

  // Save the result to cookies
  var results = JSON.parse(getCookie('results') || '[]');
  results.push(result);
  setCookie('results', JSON.stringify(results), 365);

  // Display the saved results
  displaySavedResults(results);
}
  

  // Calculate the result on form submission
  $('#interest-form').on('submit', function (event) {
    event.preventDefault();
    calculateResult();
  });

  // Reset the form and clear cookies on reset button click
  $('#interest-form').on('reset', function () {
    deleteCookie('initialAmount');
    deleteCookie('interestRate');
    deleteCookie('years');
    deleteCookie('monthlyPayment');
    deleteCookie('results');
    setTimeout(function () {
      $('#initial-amount').val('');
      $('#interest-rate').val('');
      $('#years').val('');
      $('#monthly-payment').val('');
      $('#result').text('');
      $('#monthly-payment-result').text('');
      $('#results-table tbody').empty();
    }, 0);
  });

  // Display the saved results on page load
  var results = JSON.parse(getCookie('results') || '[]');
  displaySavedResults(results);
});

// Helper functions to manage cookies
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/';
}

function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
  }
  
  function deleteCookie(name) {
  setCookie(name, '', -1);
  }
  
  function displaySavedResults(results) {
  if (results.length > 0) {
  var tableRows = '';
  for (var i = 0; i < results.length; i++) {
  tableRows += '<tr><td>' + (i + 1) + '</td><td>$' + results[i].toFixed(2) + '</td></tr>';
  }
  $('#results-table tbody').html(tableRows);
  }
  }