const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const element = document.querySelector('ul');

// ================Плохой метод - добавляет по одному элементу=====================
// ingredients.forEach(el => {
//   const newItem = document.createElement('li');
//   newItem.textContent = el;
//   newItem.classList.add('item');
//   element.append(newItem);
//   return element;
// })

//   // element.append(...createOneItem);
// console.log(element);




// ================Хороший метод - добавляет сразу весь массив=====================

const createOneItem = ingredients.map(el => {
  const newItem = document.createElement('li');
  newItem.textContent = el;
  newItem.classList.add('item');
  // element.append(newItem);
  return newItem;
})
console.log(createOneItem);
  element.append(...createOneItem);
console.log(element);
