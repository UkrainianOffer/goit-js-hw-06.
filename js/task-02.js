const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('ul#ingredients');

const liList = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.innerText = ingredient;
  return li;
});

ul.append(...liList);

// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const markup = ingredients.map(item => {
//   const li = document.createElement('li');

//   console.log(li);
//   li.classList.add('item');
//   li.textContent = item;
//   return li;
// });
