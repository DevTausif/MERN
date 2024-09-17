document.getElementById('btn-more').addEventListener('mousemove',function(){
    console.log('event trigger');
})

// document.getElementById('text-field').addEventListener('focus',function(){
//     console.log('event triggered inside the field')
// })
// document.getElementById('text-field').addEventListener('blur',function(){
//     console.log('event triggered outside the field')

// })
// document.getElementById('text-field').addEventListener('keydown',function(event){
//         console.log(event.target.value);
// })
// document.getElementById('text-field').addEventListener('keypress',function(event){
//         console.log(event.target.value);
// })
document.getElementById('text-field').addEventListener('keyup',function(event){
        console.log(event.target.value);
})