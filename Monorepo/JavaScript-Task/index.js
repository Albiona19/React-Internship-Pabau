document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const shuffleButton = document.getElementById("shuffleButton");
  const changeButton = document.getElementById("changeButton");
  const showButton = document.getElementById("showButton");
  const selectedValuesDiv = document.getElementById("selectedValues");

  shuffleButton.addEventListener("click", shuffleLabels); 
  changeButton.addEventListener("click", changeValues);
  showButton.addEventListener("click", showSelectedValues);

  function shuffleLabels() { 
    const labelValues = Array.from(checkboxes).map((checkbox) => checkbox.value);
    const shuffledLabelValues = shuffleArray(labelValues);

    checkboxes.forEach((checkbox, index) => {
      checkbox.nextElementSibling.textContent = shuffledLabelValues[index];
    });
  }

  function shuffleArray(array) { 
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function changeValues() {
    checkboxes.forEach((checkbox) => {
      checkbox.value = "Value changed";
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
