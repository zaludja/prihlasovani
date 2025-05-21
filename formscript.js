document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const errorBox = document.getElementById("formError");

    // Inicializace událostí
    initFormValidation(form, errorBox);
});

// Hlavní funkce pro nastavení validace
function initFormValidation(form, errorBox) {
    form.addEventListener("submit", (e) => {
        const email = getInputValue("email");
        const password = getInputValue("password");

        clearError(errorBox);

        if (!isValidEmail(email)) {
            e.preventDefault();
            showError(errorBox, "Zadejte platnou e-mailovou adresu.");
            return;
        }

        if (password === "") {
            e.preventDefault();
            showError(errorBox, "Zadejte heslo.");
            return;
        }
    });
}

// Vrací ořezanou hodnotu vstupního pole podle ID
function getInputValue(id) {
    return document.getElementById(id).value.trim();
}

// Zobrazí chybovou zprávu
function showError(box, message) {
    box.textContent = message;
    box.style.display = "block";
}

// Skryje chybovou hlášku
function clearError(box) {
    box.textContent = "";
    box.style.display = "none";
}

// Validuje formát e-mailu
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
