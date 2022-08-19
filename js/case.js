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

function updateCaseTotalPrice(newCaseNumber) {
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById("case-total");
  caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  //   updateCaseNumber("case-number-field", "+");
  const newCaseNumber = updateCaseNumber(true);
  updateCaseTotalPrice(newCaseNumber);
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    // updateCaseNumber("case-number-field", "-");
    const newCaseNumber = updateCaseNumber(false);
    // updateCaseTotalPrice(); // NaN
    updateCaseTotalPrice(newCaseNumber);
  });
