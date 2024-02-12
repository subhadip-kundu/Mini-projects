const dayError = document.querySelector(".day-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");
const yearResult = document.querySelector(".year-result");
const monthResult = document.querySelector(".month-result");
const dayResult = document.querySelector(".day-result");
const submitBtn = document.querySelector(".btn");
const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");
const inputRequiredError = "This field is required";
const inputDayError = "Must be a valid day";
const inputMonthError = "Must be a valid month";
const inputYearError = "Must be in the past";
const canvas = document.querySelector(".can");

function validateInput(input, errorElement, errorMessage) {
  if (!input.value.trim()) {
    errorElement.innerHTML = inputRequiredError;
    return false;
  }
  errorElement.innerHTML = "";
  return true;
}

function calculateAge(birthday) {
  const birthdate = new Date(birthday);
  const today = new Date();
  const diff = today - birthdate;
  const ageDate = new Date(diff);

  const years = Math.abs(ageDate.getUTCFullYear() - 1970);
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  yearResult.innerHTML = years;
  monthResult.innerHTML = months;
  dayResult.innerHTML = days;
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const isDayValid = validateInput(inputDay, dayError, inputDayError);
  const isMonthValid = validateInput(inputMonth, monthError, inputMonthError);
  const isYearValid = validateInput(inputYear, yearError, inputYearError);

  if (isDayValid && isMonthValid && isYearValid) {
    const birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    calculateAge(birthday);
    canvas.style.display = "block";
    setTimeout(function () {
      canvas.style.display = "none";
    }, 8000);
  }
});
