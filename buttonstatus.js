document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("submit-button");
    const checkbox = document.getElementById("form-not-functional-check");

    if (!button || !checkbox) {
        return;
    }

    function syncButtonState() {
        button.disabled = !checkbox.checked;
    }

    checkbox.addEventListener("change", syncButtonState);
    syncButtonState();
});
