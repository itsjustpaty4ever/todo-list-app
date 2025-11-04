console.log("Script started");

function addTask(event){
    //get user input from text box
    let textBox = document.getElementById("task-input");
    let task = textBox.value;
    
    //create list item
    //get todo list container div
    let todoList = document.getElementById("todo-list")

    //create list item div
    let listDiv = document.createElement("div");
    listDiv.id = "task" + todoList.childElementCount;
    listDiv.classList.add("list-item");

    // create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + todoList.childElementCount;

    //create label
    let label = document.createElement("label");
    label.id = "label1" + todoList.childElementCount;
    label.innerText = task;

    //append checkbox to list item div
    listDiv.appendChild(checkbox);

    //append label to div
    listDiv.appendChild(label);

    //append list item item div to list
    todoList.appendChild(listDiv);

    //add event listener
    checkbox.addEventListener('change', removeTask);

    
}

function removeTask(event){
    //getting the checkboxes id
    let checkboxID = event.target.id;
}