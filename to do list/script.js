document.getElementById('add-task').addEventListener('click', function() {
        const taskInput = document.getElementById('new-task');
        const taskText = taskInput.value.trim();
        
        if (taskText) {
          addTask(taskText);
          taskInput.value = '';
        }
      });
      
      function addTask(text) {
        const taskList = document.getElementById('task-list');
        
        const li = document.createElement('li');
        li.textContent = text;
        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', function() {
          li.classList.toggle('completed');
        });
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
          taskList.removeChild(li);
        });
        
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        
        taskList.appendChild(li);
      }
      