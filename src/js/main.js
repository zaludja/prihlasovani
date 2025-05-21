import { initFormValidation } from './formValidation.js';

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const errorBox = document.getElementById("formError");

  if (form && errorBox) {
    initFormValidation(form, errorBox);
  }
});
