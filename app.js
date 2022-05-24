const elTodoForm = document.querySelector('#form-todo');
const elTodoTitle = document.querySelector('#title');
const elTodoList = document.querySelector('.task-list');
const elClearBtn = document.querySelector('.clear-btn');
const elCheck = document.getElementsByClassName('checkBox');
const ffff = document.querySelector('.todo-title');
const elooo = document.querySelector('.ooo');

function addNewTodo (e) {
    e.preventDefault();


    let inpVal = elTodoTitle.value;
    if (inpVal === '') {
        alert('Todo title is empty!');
    }
    else {
        setToLS(inpVal);
        const newItem = document.createElement('div');
        newItem.className = 'task';

        newItem.innerHTML = `
        <div>
        <input class="checkBox" type="checkbox">
        <del  class="todo-title">${inpVal}</del>
        </div>
        <span class="fas fa-trash del-todo"></span>
        `;

        elTodoList.prepend(newItem);

        elTodoTitle.value = "";
    }
}

function removeTodo (e) {
    if(e.target.classList.contains('del-todo')){
        e.target.parentElement.remove();
    }
        let todos = JSON.parse(localStorage.getItem('todos'));
        let filterTodos = todos.filter( todo => todo.toLowerCase() !== e.target.previousElementSibling.textContent.toLowerCase());
        localStorage.setItem('todos',JSON.stringify(filterTodos));
    }

function getToFromLS (){
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos.forEach( todo => { 
        const newItem = document.createElement('div');
        newItem.className = 'task';
        newItem.innerHTML = `
        <div>
        <input class="checkBox" type="checkbox">
        <del clas="todo-title">${todo}</del>
        </div>
        <span class="fas fa-trash del-todo"></span>
        `;
        elTodoList.appendChild(newItem);
    });
}
function setToLS(todo){
    let todos;
    if(JSON.parse(localStorage.getItem('todos'))===null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.unshift(todo);
    localStorage.setItem('todos',JSON.stringify(todos))
}


fireAllEventListenners ();
function fireAllEventListenners(){

    elooo.addEventListener('checked',() => {
        console.log("salom");
    });

    elTodoList.addEventListener('click',removeTodo);

    elClearBtn.addEventListener('click', () => { 
        localStorage.clear();
        elTodoList.innerHTML = '';
    });
    document.addEventListener('DOMContentLoaded',getToFromLS);
    elTodoForm.addEventListener('submit',addNewTodo);
};

// let name = 'Bobur aka';
// Local Storage'ga ma'lumot saqlash
// localStorage.setItem('name', JSON.stringify(name));
// Local Storage'ga ma'lumotni olish
// console.log(localStorage.getItem('name'));
// Local Storage'ga ma'lumotni o'chirish
// localStorage.removeItem('name');
// Local Storage'ni tozalash
// localStorage.clear();