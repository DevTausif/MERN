function makeRed(){
    document.body.style.backgroundColor = 'red';
}
function makeWhite(){
    document.body.style.backgroundColor = 'White';
}
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// brown color btn
const makeBrownBtn =document.getElementById('make-brown');

function makeBrown(){
    document.body.style.backgroundColor = 'brown';
}

makeBrownBtn.onclick = makeBrown;

// purple
const purpleBtn = document.getElementById('make-purple');

purpleBtn.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

// option 4 makePink
// step1
// const pinkBtn = document.getElementById('make-pink');
// pinkBtn.addEventListener('click', makePink)

// function makePink(){
//     document.body.style.backgroundColor = 'pink';
// }

// step2
const pinkBtn = document.getElementById('make-pink');
pinkBtn.addEventListener('click', function makePink(){
    document.body.style.backgroundColor = 'pink';
})

// option 4 final most will use
document.getElementById('make-green').addEventListener('click',function(){
    document.body.style.backgroundColor = 'green';
});


