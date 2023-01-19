const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input");
const elTitle = document.querySelector("#title");
const elClear = document.querySelector("button");

let = s = 0;
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let number = elInput.value;
  let result = number;
  let sum = 0;

  while (number > 0) {
    residual = number % 10;
    number = Math.floor(number / 10);
    sum = sum * 10 + residual;
  }
  if (sum == result) {
    elTitle.textContent = "polindrom son";
  } else {
    elTitle.textContent = "polindrom son emas";
  }
});
elClear.addEventListener("click", () => {
  elForm.reset();
  elTitle.textContent = "";
});
