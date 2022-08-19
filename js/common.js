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
