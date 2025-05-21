
import { getInputValue, showError, clearError, isValidEmail } from './helpers.js';

export function initFormValidation(form, errorBox) {
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
