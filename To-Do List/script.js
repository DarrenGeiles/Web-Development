document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const tasksRemaining = document.getElementById('tasksRemaining');
    const clearCompletedBtn = document.getElementById('clearCompleted');
    const filterButtons = {
        all: document.getElementById('showAll'),
        active: document.getElementById('showActive'),
        completed: document.getElementById('showCompleted')
    };
    
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let currentFilter = 'all';
    
    // Initialize the app
    function init() {
        renderTasks();
        updateTaskCount();
        setActiveFilterButton();
        
        // Set up event listeners
        addTaskBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') addTask();
        });
        
        clearCompletedBtn.addEventListener('click', clearCompletedTasks);
        
        // Filter button events
        filterButtons.all.addEventListener('click', () => setFilter('all'));
        filterButtons.active.addEventListener('click', () => setFilter('active'));
        filterButtons.completed.addEventListener('click', () => setFilter('completed'));
    }
    
    // Add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;
        
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };
        
        tasks.push(newTask);
        saveTasks();
        renderTasks();
        updateTaskCount();
        
        taskInput.value = '';
        taskInput.focus();
    }
    
    // Render tasks based on current filter
    function renderTasks() {
        taskList.innerHTML = '';
        
        const filteredTasks = tasks.filter(task => {
            if (currentFilter === 'active') return !task.completed;
            if (currentFilter === 'completed') return task.completed;
            return true; // 'all'
        });
        
        if (filteredTasks.length === 0) {
            const emptyMessage = document.createElement('li');
            emptyMessage.textContent = currentFilter === 'all' ? 'No tasks yet!' : 
                                       currentFilter === 'active' ? 'No active tasks!' : 
                                       'No completed tasks!';
            emptyMessage.classList.add('empty-message');
            taskList.appendChild(emptyMessage);
            return;
        }
        
        filteredTasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');
            taskItem.dataset.id = task.id;
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('task-checkbox');
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => toggleTaskComplete(task.id));
            
            const taskText = document.createElement('span');
            taskText.classList.add('task-text');
            if (task.completed) taskText.classList.add('completed');
            taskText.textContent = task.text;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                deleteTask(task.id);
            });
            
            taskItem.appendChild(checkbox);
            taskItem.appendChild(taskText);
            taskItem.appendChild(deleteBtn);
            
            taskList.appendChild(taskItem);
        });
    }
    
    // Toggle task completion status
    function toggleTaskComplete(taskId) {
        tasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        
        saveTasks();
        renderTasks();
        updateTaskCount();
    }
    
    // Delete a task
    function deleteTask(taskId) {
        tasks = tasks.filter(task => task.id !== taskId);
        saveTasks();
        renderTasks();
        updateTaskCount();
    }
    
    // Clear all completed tasks
    function clearCompletedTasks() {
        tasks = tasks.filter(task => !task.completed);
        saveTasks();
        renderTasks();
        updateTaskCount();
    }
    
    // Update the task counter
    function updateTaskCount() {
        const activeTasks = tasks.filter(task => !task.completed).length;
        tasksRemaining.textContent = `${activeTasks} ${activeTasks === 1 ? 'task' : 'tasks'} remaining`;
    }
    
    // Set the current filter
    function setFilter(filter) {
        currentFilter = filter;
        renderTasks();
        setActiveFilterButton();
    }
    
    // Update the active filter button style
    function setActiveFilterButton() {
        Object.keys(filterButtons).forEach(key => {
            if (key === currentFilter) {
                filterButtons[key].classList.add('active');
            } else {
                filterButtons[key].classList.remove('active');
            }
        });
    }
    
    // Save tasks to localStorage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    // Initialize the app
    init();
});