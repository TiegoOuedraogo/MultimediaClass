const valueInput = document.getElementById('value');
const kgToLbs = document.getElementById('kg-to-lbs');
const lbsToKg = document.getElementById('lbs-to-kg');
const cToF = document.getElementById('c-to-f');
const fToC = document.getElementById('f-to-c');
const convertBtn = document.getElementById('convert');
const resetBtn = document.getElementById('reset');
const historyBtn = document.getElementById('history');
const clearHistoryBtn = document.getElementById('clear-history');
const result = document.getElementById('result');
const historyList = document.getElementById('history-list');

let conversionType;
let enteredValue;
let history = [];

// Check if there is a saved value in local storage and set it as the input value
if (localStorage.getItem('enteredValue')) {
  enteredValue = localStorage.getItem('enteredValue');
  valueInput.value = enteredValue;
}

// Function to convert kilograms to pounds
function kgToLbsConversion(value) {
  return value * 2.20462;
}

// Function to convert pounds to kilograms
function lbsToKgConversion(value) {
  return value / 2.20462;
}

// Function to convert Celsius to Fahrenheit
function cToFConversion(value) {
  return (value * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fToCConversion(value) {
  return (value - 32) * 5/9;
}

// Function to perform the conversion
function convert() {
  enteredValue = parseFloat(valueInput.value);
  if (!isNaN(enteredValue)) {
    let conversionResult;
    switch (conversionType) {
      case 'kg-to-lbs':
        conversionResult = `${enteredValue} kilograms is ${kgToLbsConversion(enteredValue)} pounds.`;
        break;
      case 'lbs-to-kg':
        conversionResult = `${enteredValue} pounds is ${lbsToKgConversion(enteredValue)} kilograms.`;
        break;
      case 'c-to-f':
        conversionResult = `${enteredValue} degrees Celsius is ${cToFConversion(enteredValue)} degrees Fahrenheit.`;
        break;
      case 'f-to-c':
        conversionResult = `${enteredValue} degrees Fahrenheit is ${fToCConversion(enteredValue)} degrees Celsius.`;
        break;
      default:
        result.innerHTML = '';
    }
    if (conversionResult) {
      result.innerHTML = conversionResult;
      // Add the conversion result to the history array
      history.push(conversionResult);
      // Save the history array to local storage
      localStorage.setItem('history', JSON.stringify(history));
    }
  } else {
    result.innerHTML = 'Please enter a valid number.';
  }
}

// Function to display the history of entries
function displayHistory() {
  // Clear the history list before displaying the new entries
  historyList.innerHTML = '';
  // Loop through the history array and add each entry to the history list
  history.forEach(entry => {
    const li = document.createElement('li');
    li.innerHTML = entry;
    historyList.appendChild(li);
  });
}

// Function to clear the history of entries
function clearHistory() {
  // Clear the history array and the history list
  history = [];
  historyList.innerHTML = '';
  // Remove the history from local storage
  localStorage.removeItem('history');
}
// Event listeners
kgToLbs.addEventListener('click', () => {
    conversionType = 'kg-to-lbs';
  });
  
  lbsToKg.addEventListener('click', () => {
    conversionType = 'lbs-to-kg';
  });
  
  cToF.addEventListener('click', () => {
    conversionType = 'c-to-f';
  });
  
  fToC.addEventListener('click', () => {
    conversionType = 'f-to-c';
  });
  
  convertBtn.addEventListener('click', () => {
    convert();
  });
  
  resetBtn.addEventListener('click', () => {
    valueInput.value = '';
    result.innerHTML = '';
    localStorage.removeItem('enteredValue');
  });
  
  historyBtn.addEventListener('click', () => {
    displayHistory();
  });
  
  clearHistoryBtn.addEventListener('click', () => {
    clearHistory();
  });
  
  valueInput.addEventListener('input', () => {
    enteredValue = valueInput.value;
    // Save the entered value to local storage
    localStorage.setItem('enteredValue', enteredValue);
  });
  