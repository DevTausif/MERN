const list = document.getElementsByClassName('important-places');
for(const imp  of list){
    console.log(imp.innerText)
}

const fruitsTitle =document.getElementById('fruits-title');
fruitsTitle.innerText = 'Fruits Description';

// query selector
const fruits = document.querySelector('.fruits li');
console.log(fruits);
for(const li of fruits){
    console.log(li.innerText);
}