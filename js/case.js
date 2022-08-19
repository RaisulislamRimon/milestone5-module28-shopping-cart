function updateCaseNumber(elementId, updateOption) {
  const caseNumberField = document.getElementById(elementId);
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);
  if (updateOption === "+") {
    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
  } else if (updateOption === "-") {
    const newCaseNumber = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;
  }
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  updateCaseNumber("case-number-field", "+");
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    updateCaseNumber("case-number-field", "-");
  });
