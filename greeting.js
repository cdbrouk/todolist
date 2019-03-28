const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    logOut = document.querySelector(".js-logout");

const USER_LS = "currentUser",
 SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,  text);
}

function delName(){
    localStorage.clear();
    window.location.reload();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function loadLogOut(){
    const logOutImg = new Image();
    logOutImg.src = `images/logout.jpg`;
    logOutImg.className = "logOutImage";

    logOut.appendChild(logOutImg);
    logOut.addEventListener("click",delName);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}`;    
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    loadLogOut();
    if(!currentUser){
        askForName();
    } else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();