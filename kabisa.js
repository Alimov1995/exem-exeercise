const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input");
const elTitle = document.querySelector("#title");
const elClear = document.querySelector("button");
elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  number = elInput.value;
  if (number > 0) {
    if (0 == number % 4 && 0 == number % 400) {
      elTitle.textContent = `${number}-yil Kabisa yili`;
    } else {
      elTitle.textContent = `${number}-yil Kabisa yili emas`;
    }
  } else {
    elTitle.textContent = `Bunday yil mavjud emas`;
  }
});
elClear.addEventListener("click", () => {
  elForm.reset();
  elTitle.textContent = "";
});
