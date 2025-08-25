import { nanoid } from "nanoid";


let taskInput = document.querySelector("#taskInput");
let addTaskBtn = document.querySelector("#addTaskBtn");
let taskList = document.querySelector("#taskList");

const id = nanoid(3);

let addedTask = (event) => {
    event.preventDefault();
    const li = document.createElement("li");
    let text = taskInput.value;
    li.innerHTML = `<input type="checkbox" class="check"> <p>${text}</p> <button class="delete">Delete</button>`;
    
    
    taskList.appendChild(li);

    newTask.value = ' ';
}

addTaskBtn.addEventListener("click", addedTask);

let deleteTask = (event) => {
    const target = event.target;
    if (target.classList.contains("delete")) {
        let thiuse = event.target.closest("li");
        thiuse.remove();
    }
}

taskList.addEventListener("click", deleteTask);

let completeTask = (event) => {
    const target = event.target;
    if (target.classList.contains("check")) {
        let addCross = event.target.closest("li");

        if (target.checked) {
            addCross.classList.add("done");
        } else {
            addCross.classList.remove("done");
        }
    }
}

taskList.addEventListener("click", completeTask);

