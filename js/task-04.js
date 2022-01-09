const buttonF = document.querySelector('button[data-action="decrement"]');
const buttonS = document.querySelector('button[data-action="increment"]');
// console.log(buttonS);

const value = document.querySelector('#value');
// console.log(value.textContent);

buttonF.addEventListener('click', () => {
  value.textContent -= 1;
});

buttonS.addEventListener('click', () => {
  value.textContent++;
});

// let counterValue;

// function increment() {
//   counterValue += 1;
//   updateSpan();
// }

// function decrement() {
//   counterValue -= 1;
//   updateSpan();
// }

// const spanValue = document.querySelector('#value');
// counterValue = parseInt(spanValue.innerHTML);

// function updateSpan() {
//   spanValue.innerHTML = counterValue;
// }

// document
//   .querySelector('[data-action="decrement"]')
//   .addEventListener('click', decrement);
// document
//   .querySelector('[data-action="increment"]')
//   .addEventListener('click', increment);
