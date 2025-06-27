document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText) {
        createTaskElement(taskText, false);
        saveTask(taskText, false);
        input.value = "";
    }
}

function createTaskElement(text, completed) {
    const li = document.createElement("li");
    if (completed) li.classList.add("completed");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed");
        updateStorage();
    });

    const label = document.createElement("label");
    label.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
        li.remove();
        updateStorage();
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
}

function saveTask(text, completed) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text, completed });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(t => createTaskElement(t.text, t.completed));
}

function updateStorage() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        const text = li.querySelector("label").textContent;
        const completed = li.classList.contains("completed");
        tasks.push({ text, completed });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function filterTasks(type) {
    const items = document.querySelectorAll("#taskList li");
    items.forEach(item => {
        const isCompleted = item.classList.contains("completed");
        item.style.display =
            type === "all" ? "flex" :
            type === "completed" && isCompleted ? "flex" :
            type === "active" && !isCompleted ? "flex" : "none";
    });
}
