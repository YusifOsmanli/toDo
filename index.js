let taskForm=document.querySelector(".task-form")
let inputTask=document.querySelector(".input-task")
let addBtn=document.querySelector(".btn-task-add")
let taskList=document.querySelector(".task-list")
let clearBtn=document.querySelector(".clear-all")
let updateModal=document.querySelector(".update-modal")
let updateBtn=document.querySelector(".update-btn")
let cross=document.querySelector(".cross")
let overlay=document.querySelector(".overlay")
let id=0
let tasks = []

class Task {
    constructor(content){
        this.id = id,
        this.content = content,
        this.isCompleted = false,
        id++
    }
}

function addTask(content){
    if(inputTask.value=== ""){
        alert("Task daxil edin!!")
    }else{
        let newTask = new Task (content)
        tasks.push(newTask)
        console.log(tasks);
    }
}

addBtn.addEventListener("click",()=>{
    let content = inputTask.value
    addTask(content)
    inputTask.value = ""
    renderUI(tasks)
})

function clearAll(){
    tasks.splice(0)
    renderUI(tasks)
}

function deleteTask(id){
    let target = tasks.find(task=> task.id == id)
    let indexOfTarget = tasks.indexOf((target))
    tasks.splice(indexOfTarget,1)
    console.log(tasks);
    renderUI(tasks)
}

function completeTask(id){
    let target=tasks.find(task=>task.id == id)
    target.isCompleted=!target.isCompleted
    renderUI(tasks)
}
function updateTask(){
    updateModal.classList.add("open")
    overlay.classList.add("active")
}
cross.addEventListener("click",()=>{
    updateModal.classList.remove("open")
    overlay.classList.remove("active")
})

function renderUI(array){
    let innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        innerHTML += `<div class="task-item ${array[i].isCompleted ? "task-btn-complete" : ""}">
        <li class="task-description ${array[i].isCompleted ? "task-btn-complete" : ""}">${array[i].content}</li>
        <button class="task-btn complete-btn"onclick="completeTask(${array[i].id})" >
            <i class="far fa-check-square" ></i>
        </button>
        <button class="task-btn update-btn" onclick="updateTask(${array[i].id})">
        <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="task-btn task-btn-delete" onclick="deleteTask(${array[i].id})">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>`
        
    }
    taskList.innerHTML = innerHTML
}
