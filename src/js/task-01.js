const numberOfCategories = document.querySelectorAll('.item');
console.log('Number of categories:', numberOfCategories.length);
// console.log(numberOfCategories);

const contentOfCategories = document.querySelectorAll('.item');
// console.log(contentOfCategories);
// console.dir(contentOfCategories.);


const el = contentOfCategories.forEach(elem => {
    console.log('Category:', elem.firstElementChild.textContent);
    // console.log('Elements:', elem.childNodes[3].children.length);
    console.log('Elements:', elem.lastElementChild.children.length);


    // console.log(elem.children)
});
// const contentOfCategories = document.querySelectorAll('.item');




// const valueEl = contentOfCategories.forEach(value => {
//     console.log(value.textContent)
//     // return value.textContent
// });
// // console.log(valueEl);