const addBtn =  document.querySelector('.add');
const deleteAllBtn =  document.querySelector('.delete-all');
const noteArea =  document.querySelector('.note-area');

const notePanel =  document.querySelector('.note-panel');
const errorInfo =  document.querySelector('.error');
const textArea = document.querySelector('#text')
const category = document.querySelector('#category');
const saveBtn =  document.querySelector('.save');
const cancelBtn =  document.querySelector('.cancel');

const showErorr = e => {

    if(e.target.value === '0' || textArea.value === '') {
        errorInfo.style.visibility = 'visible'
    } else {
        errorInfo.style.visibility = 'hidden'
        addNote();
        notePanel.style.display = 'none'
    } 
}



const showNotePanel = () => {

    if(!(notePanel.style.display === 'block')) {
        notePanel.style.display = 'block'
    } else {
        notePanel.style.display = 'none'
    }
}

const addNote = () => {

    const num = 0;

    const newNote = document.createElement('div')
    newNote.classList.add('note')

    const noteHeader = document.createElement('div')
    noteHeader.classList.add('note-header')

    const noteTitle = document.createElement('h3')
    noteTitle.classList.add('note-title')
    noteTitle.textContent = 'Notatka#1'

    const deleteBtn = document.createElement('button')
    const iconDelete = document.createElement('i')
    iconDelete.classList.add('fas')
    deleteBtn.classList.add('delete-note')
    deleteBtn.append(iconDelete)
    
    noteHeader.append(noteTitle, deleteBtn)

    const noteBody = document.createElement('div')
    noteBody.classList.add('note-body')
    noteBody.textContent = textArea.value

    newNote.append(noteHeader, noteBody)
    noteArea.append(newNote)
    

}




addBtn.addEventListener('click', showNotePanel)
cancelBtn.addEventListener('click', showNotePanel)
saveBtn.addEventListener('click', showErorr)

category.addEventListener('click', e => {
    console.log(e.target.value);

    console.log(textArea.value);
})