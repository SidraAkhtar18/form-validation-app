
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const emailError = document.querySelector("#emailError");
  const passwordError = document.querySelector("#passwordError");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/;

  // Email input event
  emailInput.addEventListener("input", function () {
    if (!emailRegex.test(emailInput.value.trim())) {
      emailError.style.display = "inline";
    } else {
      emailError.style.display = "none";
    }
  });

  // Password input event
  passwordInput.addEventListener("input", function () {
    if (!passwordRegex.test(passwordInput.value.trim())) {
      passwordError.style.display = "inline";
    } else {
      passwordError.style.display = "none";
    }
};
