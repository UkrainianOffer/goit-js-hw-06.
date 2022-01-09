const ul = document.querySelector('ul#categories');
const categories = ul.querySelectorAll('li.item');
console.log(`Number of  ${categories.length} categories.`);
for (const category of categories) {
  console.log('Category: ' + category.querySelector('h2').innerText);
  console.log('Elements: ' + category.querySelectorAll('li').length);
}
