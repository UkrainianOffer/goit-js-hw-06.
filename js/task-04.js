const valueEl = document.querySelector('#value');
const counterEl = document.querySelector('#counter');

let counterValue = 0;

counterEl.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.tagName === 'BUTTON') {
    if (event.target.attributes['data-action'].value === 'increment') {
      counterValue += 1;
    } else {
      counterValue -= 1;
    }
    valueEl.innerHTML = counterValue;
  }
}

// const buttonF = document.querySelector('button[data-action="decrement"]');
// const buttonS = document.querySelector('button[data-action="increment"]');
// // console.log(buttonS);

// const value = document.querySelector('#value');
// // console.log(value.textContent);

// buttonF.addEventListener('click', () => {
//   value.textContent -= 1;
// });

// buttonS.addEventListener('click', () => {
//   value.textContent++;
// });
