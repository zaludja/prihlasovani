export function getInputValue(id) {
  return document.getElementById(id).value.trim();
}

export function showError(box, message) {
  box.textContent = message;
  box.style.display = "block";
}

export function clearError(box) {
  box.textContent = "";
  box.style.display = "none";
}

export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
