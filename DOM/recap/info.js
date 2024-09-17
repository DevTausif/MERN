document.getElementById('dlt-field').addEventListener('keyup', function(event){
    const text = event.target.value;
    if(text === 'delete'){
        const deleteBtn = document.getElementById('btn-dlt');
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled',true);
    }
   
})

document.getElementById('btn-dlt').addEventListener('click', function(){
   const secret = document.getElementById('secret-info');
   secret.style.display = 'none';
})