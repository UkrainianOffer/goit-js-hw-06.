const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('keydown', event => {
  console.log('Keydown: ', event);
  if (input === '') {
    return 'Anonymous';
  } else input === 'keydown';
});
