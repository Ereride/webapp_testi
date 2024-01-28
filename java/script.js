const inputBox = document.getElementById("input-box");
const listasisalto = document.getElementById("lista-sisalto");

function lisaatehtava(){
    if(inputBox.value === ''){
        alert("Kirjoita jotakin!")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listasisalto.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listasisalto.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listasisalto.innerHTML);
}

function showTask(){
    listasisalto.innerHTML = localStorage.getItem("data");
}

showTask();