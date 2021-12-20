const navEl = document.querySelector('#categories');
const items = navEl.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

[...items].forEach(item => {
  // console.log(item);
  console.log(item.querySelector('h2').textContent);
  console.log(item.querySelectorAll('li').length);
});

// function sum(...items) {
//   let total = 0;
//   items.forEach(item => {
//     total += item;
//   });
//   console.log(total);
// }
