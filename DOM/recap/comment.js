document.getElementById('post-btn').addEventListener('click', function(){
    const inputFiled = document.getElementById('new-comment');
    const commentUpdate = inputFiled.value;
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = commentUpdate;
    commentContainer.appendChild(p);
    inputFiled.value = '';
})