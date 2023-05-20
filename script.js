// JavaScript code for the to-do list
function addTask() {
  var taskInput = document.getElementById('task-input');
  var taskList = document.getElementById('task-list');
  
  if (taskInput.value !== '') {
    var taskItem = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        taskItem.style.textDecoration = 'line-through';
      } else {
        taskItem.style.textDecoration = 'none';
      }
    });
    
    var taskText = document.createTextNode(taskInput.value);
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.addEventListener('click', function() {
      taskItem.remove();
    });
    
    taskItem.className = 'task-item';
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);
    
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function reset() {
  var taskList = document.getElementById('task-list');
  taskList.innerHTML = '';
}
