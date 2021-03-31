let todoInput;
let alertInfo;
let addBtn;
let ulList;
let newTask

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

//pobieranie elementów
const prepareDOMElements = () => {
    todoInput = document.querySelector('.todoInput')
    alertInfo = document.querySelector('.alertInfo')
    addBtn = document.querySelector('.addBtn')
    ulList = document.querySelector('.todoList ul')


}

//nasłuchiwania

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTask)
    ulList.addEventListener('click', checkClick)
}

const addNewTask = () => {
    if(todoInput.value !== ''){
        newTask = document.createElement('li')
        newTask.innerText = todoInput.value
        ulList.appendChild(newTask)

        todoInput.value = ''
        alertInfo.innerText = ''
        createToolsArea()
    } else {
        alertInfo.innerText = 'wpisz jakies zadanie'
    }
}
    const createToolsArea = () => {
        const toolsPanel = document.createElement('div')
        toolsPanel.classList.add('tools')
        newTask.appendChild(toolsPanel)
    
        const completeBtn = document.createElement('button')
        completeBtn.classList.add('complete')
        completeBtn.innerHTML = '<i class="fas fa-check"></i>'
        toolsPanel.appendChild(completeBtn)
    
        const editBtn = document.createElement('button')
        editBtn.classList.add('edit')
        editBtn.innerText = 'EDIT'
        toolsPanel.appendChild(editBtn)
    
    
        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete')
        deleteBtn.innerHTML = '<i class="fas fa-times"></i>'
        toolsPanel.appendChild(deleteBtn)
    
    }

const checkClick = (e) => {
    if(e.target.closest('button').classList.contains('complete'))
console.log(e.target);
}

document.addEventListener('DOMContentLoaded', main)