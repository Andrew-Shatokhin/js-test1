const numberOfCategories = document.querySelectorAll('.item');
console.log('Number of categories:', numberOfCategories.length);

const contentOfCategories = document.querySelectorAll('.item');

contentOfCategories.forEach(elem => {
    console.log('Category:', elem.firstElementChild.textContent);
       console.log('Elements:', elem.lastElementChild.children.length);

});

