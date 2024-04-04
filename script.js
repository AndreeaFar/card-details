// Get input fields
const nameInput = document.getElementById('cardholder-name');
const numberInput = document.getElementById('number');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const cvcInput = document.getElementById('cvc');
// Get card details
const cardName = document.getElementById('card-name');
const cardNumber = document.getElementById('card-number');
const cardMonth = document.getElementById('card-month');
const cardYear = document.getElementById('card-year');
const cardCVC = document.getElementById('card-cvc');
// Get form
const form = document.getElementById('form');

// Format input as credit card number
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, '$& ');
}

// Update card number display
function setCardNumber() {
  cardNumber.textContent = format(numberInput.value);
}

// Update cardholder name display
function setCardName() {
  cardName.textContent = nameInput.value;
}

// Update card exp month display
function setCardMonth() {
  cardMonth.textContent = monthInput.value;
}

// Update card exp year display
function setCardYear() {
  cardYear.textContent = yearInput.value;
}

// Update card CVC display
function setCardCVC() {
  cardCVC.textContent = cvcInput.value;
}

// Form submission
function submitForm(e) {
  console.log(e);
  e.preventDefault();

  // Check if any required field is empty
  if (
    checkRequired([nameInput, numberInput, monthInput, yearInput, cvcInput])
  ) {
    return;
  }

  // If all fields are filled update card details display
  setCardName();
  setCardNumber();
  setCardMonth();
  setCardYear();
  setCardCVC();

  // Hide form and show completion message
  form.classList.add('hidden');
  document.querySelector('.thank').classList.remove('hidden');
}

// Check if any required field is empty
function checkRequired(inputArr) {
  let isEmptyInput = false;
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, 'This field is required');
      isEmptyInput = true;
    }
  });
  return isEmptyInput;
}

// Show error message
function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.classList.add('error');
  const small = formGroup.querySelector('small');
  small.innerText = message;
  small.style.visibility = 'visible';
}

// Event listeners to input fields
nameInput.addEventListener('keyup', setCardName);
numberInput.addEventListener('keyup', setCardNumber);
monthInput.addEventListener('keyup', setCardMonth);
yearInput.addEventListener('keyup', setCardYear);
cvcInput.addEventListener('keyup', setCardCVC);

// Event listener to submit btn
form.addEventListener('submit', submitForm);
