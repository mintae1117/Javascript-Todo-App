const form = document.querySelector(".wrapper");
const showsnow = document.querySelector(".snowform");
const myswitch = document.getElementById("switch");

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