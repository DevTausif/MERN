// option 1
function handleOnClick(){
    const handleText = document.getElementById('handler-text');

    handleText.innerText='Handled by function attached onclick attribute'
}

// option 2
document.getElementById('event-click').addEventListener('click',function(){
    const handleStatus = document.getElementById('handler-text');
    handleStatus.innerHTML = 'Text Updated By AddEventListener Button';
});

// option 2  recap most important
document.getElementById('update-text');
addEventListener('click',function(){
    const inputText = document.getElementById('input-text');
    const inputFiled = inputText.value;
    const p = this.document.getElementById('default-text');
    p.innerHTML = inputFiled;
    inputText.value = '';
})
