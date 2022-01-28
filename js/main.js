const addBtn =  document.querySelector('.add');
const saveBtn =  document.querySelector('.save');
const cancelBtn =  document.querySelector('.cancel');

const deleteAllBtn =  document.getElementsByClassName('delete-note');


const noteArea =  document.querySelector('.note-area');
const notePanel =  document.querySelector('.note-panel');
const errorInfo =  document.querySelector('.error');
const textArea = document.querySelector('#text')
const category = document.querySelector('#category');
let selectedValue;

let cardID = 0;

const openPanel = () => {
    notePanel.style.display = 'flex'; 
}

const closePanel = () => {
    notePanel.style.display = 'none';
    errorInfo.style.visibility = 'hidden';
    textArea.value = '';
    category.selectedIndex = 0;
}

const addNote = () => {
    
    if(textArea.value !== '' && category.options[category.selectedIndex].value !== '0') {
        createNote();
        errorInfo.style.visibility = 'hidden'
    } else {
        errorInfo.style.visibility = 'visible'
    }
}

const createNote = () => {
    const newNotes = document.createElement('div')
    newNotes.classList.add('note')
    newNotes.setAttribute('id', cardID)

    newNotes.innerHTML = `
    <div class="note">
                <div class="note-header">
                    <h3 class="note-title">${selectValue}</h3>
                    <button class="delete-note">
                        <i class="fas fa-times icon"></i>
                    </button>
                </div>
                <div class="note-body">
                    ${textArea.value}
                </div>
    </div>
            `

    noteArea.appendChild(newNotes)
    textArea.value = ''
    category.selectedIndex = 0;
    notePanel.style.display = 'none'
}

const selectValue = () => {
    selectValue = category.options[category.selectedIndex].text;

}


addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click',  addNote)



