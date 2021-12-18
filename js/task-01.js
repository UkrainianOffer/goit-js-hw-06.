const navEl = document.querySelectorAll('li.item');
console.log(navEl);

function sum(...args) {
  let total = 0;
  args.forEach(arg => {
    total += arg;
  });
  console.log(total);
}
