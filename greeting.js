const secret = ["h", "e", "l", "l", "o"];
let input = [];

const easterModal = document.getElementById("easter-modal");
const closeButton = document.getElementById("easter-close");

document.addEventListener("keydown", (keyPressed) => {
    if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") {
        return; // Ignore key presses when typing in input fields or textareas
    }
    
    input.push(keyPressed.key.toLowerCase());

    if (input.length > secret.length) {
        input.shift();
    }

    if (input.join("") === secret.join("")) {
        showEasterModal();
        input = [];
    }
});

function showEasterModal() {
    easterModal.classList.add("show");  
}

function hideEasterModal() {
    easterModal.classList.remove("show");  
}

closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    hideEasterModal();
});
