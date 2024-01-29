const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingsimg = document.querySelector("#greetingsimg");
const todobox = document.querySelector("#todo-box");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onloginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greetingsimg.classList.remove(HIDDEN_CLASSNAME);
    todobox.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = ` Welcome ${username}!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show loginform
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onloginSubmit);
}
else{
    //show greetings
    paintGreetings();
}
