// function updateCaseNumber(elementId, updateOption) {
function updateCaseNumber(isIncrease) {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);

  let newCaseNumber;

  //   if (updateOption === "+") {
  //     const newCaseNumber = previousCaseNumber + 1;
  //     caseNumberField.value = newCaseNumber;
  //   } else if (updateOption === "-") {
  //     const newCaseNumber = previousCaseNumber - 1;
  //     caseNumberField.value = newCaseNumber;
  //   }
  if (isIncrease) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }
  caseNumberField.value = newCaseNumber;
  return newCaseNumber;
}

function getTextElementValueById(elementId) {
  // calculate total
  const phoneTotalElement = document.getElementById(elementId);
  const currentPhoneTotalString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(currentPhoneTotalString);
  return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function calculateSubTotal() {
  const currentPhoneTotal = getTextElementValueById("phone-total");
  const currentCaseTotal = getTextElementValueById("case-total");
  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  setTextElementValueById("sub-total", currentSubTotal);
  const taxAmountString = (currentSubTotal * 0.13).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElementValueById("tax-amount", taxAmount);
  const finalTotal = currentSubTotal + taxAmount;
  setTextElementValueById("final-total", finalTotal);
}
