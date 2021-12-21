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

// const refs = {
//   decrementBtn: document.querySelector('button[data-action="decrement"]'),
//   decrementBtn: document.querySelector('button[data-action="increment"]'),
// };
// let clickV = 0;

// let counterValue = document.querySelector('#value').innerHTML;

// refs.decrementBtn.addEventListener('click', () => {
//   console.log((counterValue -= 1));
// });

// refs.incrementBtn.addEventListener('click', () => {
//   console.log(counterValue++);
// });
