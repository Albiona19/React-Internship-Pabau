document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const shuffleButton = document.getElementById("shuffleButton");
  const changeButton = document.getElementById("changeButton");
  const showButton = document.getElementById("showButton");
  const selectedValuesDiv = document.getElementById("selectedValues");

  shuffleButton.addEventListener("click", shuffleValues);
  changeButton.addEventListener("click", changeValues);
  showButton.addEventListener("click", showSelectedValues);

  function shuffleValues() {
    const checkboxContainer = document.getElementById("checkboxForm");
    const checkboxesArray = Array.from(
      checkboxContainer.getElementsByTagName("input")
    );
    for (let i = checkboxesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [checkboxesArray[i], checkboxesArray[j]] = [
        checkboxesArray[j],
        checkboxesArray[i],
      ];
    }
    checkboxesArray.forEach((checkbox, index) => {
      checkboxContainer.appendChild(checkbox);
    });
  }

  function changeValues() {
    checkboxes.forEach((checkbox) => {
      // Change the values to something of your choice
      checkbox.value = "NewValue" + (Math.random() * 100).toFixed(0);
    });
  }

  function showSelectedValues() {
    const selectedValues = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    selectedValuesDiv.textContent =
      "Selected Values: " + selectedValues.join(", ");
  }
});
