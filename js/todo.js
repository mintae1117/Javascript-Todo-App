const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const todos_key = "todokey"

let toDoarr = [];

function saveToDos(){
    localStorage.setItem(todos_key, JSON.stringify(toDoarr));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDoarr = toDoarr.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDoarr.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(todos_key);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDoarr = parsedToDos;
    parsedToDos.forEach(paintToDo);
}