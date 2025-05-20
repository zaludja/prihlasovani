document.getElementById("loginForm").addEventListener("submit", function (e) {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorBox = document.getElementById("formError");

    // Skryjeme starou chybu
    errorBox.style.display = "none";
    errorBox.textContent = "";

    if (!isValidEmail(email)) {
        e.preventDefault();
        showError("Zadejte platnou e-mailovou adresu.");
        return;
    }

    if (password === "") {
        e.preventDefault();
        showError("Zadejte heslo.");
        return;
    }
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(msg) {
    const errorBox = document.getElementById("formError");
    errorBox.textContent = msg;
    errorBox.style.display = "block";
}
