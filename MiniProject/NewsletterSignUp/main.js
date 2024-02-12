const containerEl = document.getElementById("container");
const leftEl = document.getElementById("left");
const rightEl = document.getElementById("right");

const userEmailEl = document.getElementById("user-email");
const invalidEmailEl = document.getElementById("invalid-email");
const emailInput = document.getElementById("email");
const submitBtnEl = document.getElementById("submit-btn");

const confirmedMessageEl = document.getElementById("confirmed-message");
const dismissMessageEl = document.getElementById("dismiss-message");

function displaySuccessMessage(email) {
  confirmedMessageEl.classList.add("active");
  containerEl.classList.add("success");
  leftEl.style.display = "none";
  rightEl.style.display = "none";
  userEmailEl.textContent = email;
}

function displayErrorMessage() {
  invalidEmailEl.classList.add("active");
  emailInput.classList.add("active");
}

function resetForm() {
  leftEl.style.display = "block";
  rightEl.style.display = "block";
  containerEl.classList.remove("success");
  confirmedMessageEl.classList.remove("active");
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

submitBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    displaySuccessMessage(email);
    emailInput.value = "";
    invalidEmailEl.classList.remove("active");
    emailInput.classList.remove("active");
  } else {
    displayErrorMessage();
  }
});

dismissMessageEl.addEventListener("click", resetForm);
