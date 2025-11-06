console.log("Script started");

function addTask(event){
    //get user input from text box
    let textBox = document.getElementById("task-input");
    let task = textBox.value;

    createTaskDiv(task);

    //save task to local storage

    localStorage.setItem(taskDiv.id, task);

    console.log(localStorage.length);

}

function createTaskDiv(task){
    //create list item
    //get todo list container div
    let todoList = document.getElementById("todo-list")

    //create list item div
    let taskDiv = document.createElement("div");
    taskDiv.id = "task" + todoList.childElementCount;
    taskDiv.classList.add("list-item");

    // create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + todoList.childElementCount;
    //add event listener
    checkbox.addEventListener("change", removeTask);

    //create label
    let label = document.createElement("label");
    label.id = "label1" + todoList.childElementCount;
    label.innerText = task;

    //append checkbox to list item div
    taskDiv.appendChild(checkbox);

    //append label to div
    taskDiv.appendChild(label);

    //append list item item div to list
    todoList.appendChild(taskDiv);

    

}

function removeTask(event){
    //getting the checkboxes id
    let checkboxID = event.target.id;

    //get numbers id from the checkboxes id
    let idNum = checkboxID.substring(8);


    //get the task by id
    let taskDiv = document.getElementById("task"+ idNum)

    //apply animation
    taskDiv.classList.add("remove-task");

    //remove the task div from layout
    setTimeout(function() {
        taskDiv.remove();
    },1000);

}

function loadTasks(){
    console.log("loading");
    //get each task from local storage
    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let task =localStorage.getItem(key);
        
    }

    //create the task divs again

}
loadTasks();
