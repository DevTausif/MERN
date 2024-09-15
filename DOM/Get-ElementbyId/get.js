// const list = document.getElementsByClassName('important-places');
// for(const imp  of list){
//     console.log(imp.innerText)
// }

// const fruitsTitle =document.getElementById('#fruits-title');
// fruitsTitle.innerText = 'Fruits Description';

// query selector
// const fruits = document.querySelectorAll('.fruits li');
// console.log(fruits.innerText);
// // for(const li of fruits){
// //     console.log(li.innerHTML);
// // }


// Dynamic Style
const sections = document.querySelectorAll('section');
for(const section of sections){
   section.style.border = '2px solid steelblue';
   section.style.marginBottom = '10px';
   section.style.padding = '10px';
   section.style.borderRadius = '10px';
   section.style.background = 'coral';
   section.style.boxShadow = '50px';
}

const placesContainer = document.getElementById('places')
placesContainer.style.background = 'lightgray';
placesContainer.classList.add('important-places');