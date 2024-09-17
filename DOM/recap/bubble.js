document.getElementById('item-2').addEventListener('click', function(event){
    console.log('item-2');
    event.stopPropagation();
})
document.getElementById('item-2').addEventListener('click', function(event){
    console.log('item-3');
    event.stopImmediatePropagation();
})
document.getElementById('item-2').addEventListener('click', function(event){
    console.log('item-4');
})
document.getElementById('item-2').addEventListener('click', function(event){
    console.log('item-5');
})
document.getElementById('list-ul').addEventListener('click', function(){
    console.log('list-ul');
})
document.getElementById('list-container').addEventListener('click', function(){
    console.log('section container click');
})
document.getElementById('body').addEventListener('click', function(){
    console.log('body of the html click');
})