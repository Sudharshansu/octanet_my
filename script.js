function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== '') {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
        
        // Add a delete button for each task
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            li.remove();
        };
        
        li.appendChild(deleteButton);
        
        taskList.appendChild(li);
        taskInput.value = '';
    }
}