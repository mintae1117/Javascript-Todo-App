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

function allClearList(e){
    if(confirm("정말 삭제하시겠습니까?")==true){   //취소메시지가 true(ok)일때
        if(toDoList.innerText==''){                      //목록칸이 비어있다면
            alert("삭제할 목록이 없습니다");              //삭제할 목록이 없다는 경고창뜨기
        }else{                                         //삭제할 목록이 있다면
            toDoList.innerText='';                       //전체 삭제
        }
    }else{                                      //취소메시지가 false(no)일때
        return false;                           //삭제 취소
    }
}
