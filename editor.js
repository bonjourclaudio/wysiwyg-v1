const editorBtns = document.getElementsByClassName('editor-btn');
const editorContent = document.getElementById('content');
const setAttribute = (element) => {
    document.execCommand(element.dataset.attribute, false);
}

for(let i = 0; i < editorBtns.length; i++) {
    editorBtns[i].addEventListener('click', function() {
       setAttribute(this);
    });
}