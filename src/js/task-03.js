// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];
// const gallery = document.querySelector(".gallery");
// gallery.classList.add("js-ul");
// // console.log(gallery);
// const imageGallery = images.map(({ url, alt }) => {
//   return `<li><img src=${url} alt=${alt} width = 300px/></li>`
// }).join("");
// gallery.insertAdjacentHTML("afterbegin", imageGallery);

// ============================================================================================================================
// let count = function (array) {
//   return array.forEach(el => el);
  
// }
// console.log(count([1, 2, 3]))
const arr1 = [2, 4, 6, 8];
const arr2 = arr1.forEach(el => {console.log(el*2)});
console.log(arr2)