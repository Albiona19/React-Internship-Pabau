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
        const checkboxesArray = Array.from(checkboxContainer.getElementsByTagName("input"));
        for (let i = checkboxesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [checkboxesArray[i], checkboxesArray[j]] = [checkboxesArray[j], checkboxesArray[i]];
        }
        checkboxesArray.forEach((checkbox, index) => {
            checkboxContainer.appendChild(checkbox);
        });
    }