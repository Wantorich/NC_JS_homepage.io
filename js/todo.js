const ToDoForm = document.querySelector("#todo-form");
const ToDoList = document.querySelector("#todo-list");
const TodoInput = ToDoForm.querySelector("input");

let todos = [];

function saveTodo() {
    localStorage.setItem("todo", JSON.stringify(todos));
    if (todos.length === 0) localStorage.removeItem("todo");
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    todos = todos.filter(item => item.id !== Number(li.id)); // type check
    saveTodo();
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    li.id = newTodo.id;
    const button = document.createElement("button");
    button.classList.add("material-symbols-outlined");
    button.innerText = "check";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    ToDoList.appendChild(li);
}


function HandleTodoForm(event) {
    event.preventDefault();
    const TodoValue = TodoInput.value;
    TodoInput.value = "";
    const newTodoObj = {
        text : TodoValue,
        id : Date.now()
    }
    paintTodo(newTodoObj);
    todos.push(newTodoObj);
    saveTodo();
}

ToDoForm.addEventListener("submit", HandleTodoForm);

const savedTodo = localStorage.getItem("todo");

if (savedTodo !== null) {
    const parsedTodo = JSON.parse(savedTodo); // localstorage에 저장된 todos를 불러옴
    console.log(parsedTodo.length);
    todos = parsedTodo;
    todos.forEach(paintTodo);
} else {
    console.log("savetodo is null");
}