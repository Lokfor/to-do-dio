var box = document.getElementById("nova-tarefa-i");
box.addEventListener("click", clear);

function clear(){
    document.getElementById("nova-tarefa-i").value = "";
}

let button = document.getElementById("button");
button.addEventListener("click", add);

const list_task = document.getElementById("checkbox1");

var id = 0;

function add(){
    if(box.value == ""){
        alert ("Campo de tarefa se encontra vazio");
    }else {
        const txt = document.getElementById("nova-tarefa-i").value;
        const text = document.createTextNode(txt);

        
        const TaskContainer = document.createElement("div");
        const check = document.createElement("input");
        const label = document.createElement("label");


        TaskContainer.classList.add(id);
        id++;

        label.classList.add("msg");

        check.setAttribute("type", "checkbox");
        check.setAttribute("name",txt);
        check.setAttribute("id", txt);
        
        label.setAttribute("for",txt);
        label.appendChild(text);
        
        TaskContainer.appendChild(check);
        TaskContainer.appendChild(label);
        
        list_task.appendChild(TaskContainer);
        console.log(text);
    }
}