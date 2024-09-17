document.getElementById('add-new').addEventListener('click',function(){
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = 'Brand New Item Added';
    li.classList.add('item')
    listContainer.appendChild(li);
})

 document.getElementById('list-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
 })

// const items = document.getElementsByClassName('item');
// for(const item of items){
//    item.addEventListener('click', function(event){
//     event.target.parentNode.removeChild(event.target);
//    })
// }
