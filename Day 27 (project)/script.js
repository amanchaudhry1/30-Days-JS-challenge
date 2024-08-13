document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${taskInput.value}</span>
            <button class="delete-btn">Delete</button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';

        taskItem.querySelector('.delete-btn').addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });
    }
});
