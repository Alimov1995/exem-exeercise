// let number = [1, -1, 2, 3, -5, 0];
// console.log(number);

// for (let i = 0; i < number.length; i++) {
//   const element = number[i];
//   if (element < 0) {
//     let res = [];
//     res.push(element)
//     console.log(res);
//   }
// }
const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input");
const elTitle = document.querySelector("#title");
const elClear = document.querySelector("button");
let res = "";

elForm.addEventListener("submit", function (e) {
  let res = [];
  e.preventDefault();
  let number = elInput.value.split(" ");
  for (let i = 0; i < number.length; i++) {
    let element = number[i];

    if (element < 0) {
      res.push(element);
      elTitle.textContent = `${res}`;
    }
  }
});
elClear.addEventListener("click", () => {
  elForm.reset();
  elTitle.textContent = "";
});
