const form = document.querySelector(".wrapper");
const showsnow = document.querySelector(".snowform");
const myswitch = document.getElementById("switch");

const getsnow = document.getElementById("snowbox");
for(let i = 0; i < 200; i++){
    const newdiv = document.createElement('div');
    newdiv.className = "snow";
    getsnow.appendChild(newdiv);
};// create snow div

function checked(){
    const checking = myswitch.checked;
    localStorage.setItem("snowoff", checking);
    if(checking === true){
        showsnow.classList.add(HIDDEN_CLASSNAME);
    }
    else{
        showsnow.classList.remove(HIDDEN_CLASSNAME);
    }
}
let a = localStorage.getItem("snowoff");
if(a == "true"){
    showsnow.classList.add(HIDDEN_CLASSNAME);
    myswitch.checked = true;
}

form.addEventListener("click",checked);