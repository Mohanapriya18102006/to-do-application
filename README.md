# Ex03 To-Do List using JavaScript
## Date:16-11-2026

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM

index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Todo Application</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <header>
            <div>
                <h1>My Todo List</h1>
                <p>Organize your day, achieve your goals!</p>
            </div>
            <button id="themeBtn">🌙</button>
        </header>

        <div class="stats">
            <div class="stat">
                <h2 id="totalTasks">0</h2>
                <p>Total Tasks</p>
            </div>
            <div class="stat">
                <h2 id="pendingTasks">0</h2>
                <p>Pending</p>
            </div>
            <div class="stat">
                <h2 id="completedTasks">0</h2>
                <p>Completed</p>
            </div>
        </div>

        <form id="todoForm">
            <input type="text" id="taskInput"
                placeholder="Enter your task..." required>

            <select id="priority">
                <option value="Low">Low Priority</option>
                <option value="Medium" selected>Medium Priority</option>
                <option value="High">High Priority</option>
            </select>

            <input type="date" id="dueDate">

            <button type="submit" id="addBtn">Add Task</button>
        </form>

        <input type="text" id="searchInput"
            placeholder="🔍 Search tasks...">

        <div class="filters">
            <button class="filter active" data-filter="all">All</button>
            <button class="filter" data-filter="pending">Pending</button>
            <button class="filter" data-filter="completed">Completed</button>
            <button class="filter" data-filter="high">High Priority</button>
        </div>

        <ul id="taskList"></ul>

        <div class="footer">
            <span id="taskCount">0 tasks left</span>
            <button id="clearBtn">Clear Completed</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```
style.css

```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #eef2ff;
    min-height: 100vh;
    padding: 40px 15px;
    transition: 0.3s;
}

.container {
    max-width: 750px;
    margin: auto;
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 25px #00000015;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}

header h1 {
    color: #4f46e5;
    margin-bottom: 8px;
}

header p {
    color: #777;
}

button {
    border: none;
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 7px;
    background: #4f46e5;
    color: white;
    transition: 0.2s;
}

button:hover {
    opacity: 0.8;
    transform: translateY(-1px);
}

#themeBtn {
    font-size: 20px;
}

.stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 25px;
}

.stat {
    background: #eef2ff;
    text-align: center;
    padding: 18px 8px;
    border-radius: 10px;
}

.stat h2 {
    color: #4f46e5;
    margin-bottom: 5px;
}

.stat p {
    color: #555;
    font-size: 13px;
}

#todoForm {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 10px;
    margin-bottom: 18px;
}

input, select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 7px;
    outline: none;
    font-size: 14px;
}

input:focus, select:focus {
    border-color: #4f46e5;
}

#addBtn {
    grid-column: span 2;
}

#searchInput {
    margin-bottom: 18px;
}

.filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
}

.filter {
    background: #e5e7eb;
    color: #333;
}

.filter.active {
    background: #4f46e5;
    color: white;
}

#taskList {
    list-style: none;
}

.task {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    background: #f8fafc;
    padding: 15px;
    border-radius: 9px;
    margin-bottom: 10px;
    border-left: 4px solid #4f46e5;
}

.task-info {
    flex: 1;
    min-width: 0;
}

.task-info h3 {
    font-size: 16px;
    overflow-wrap: anywhere;
}

.task-info p {
    font-size: 12px;
    color: #777;
    margin-top: 6px;
}

.task.completed {
    opacity: 0.6;
}

.task.completed h3 {
    text-decoration: line-through;
}

.priority-High {
    border-left-color: #ef4444;
}

.priority-Medium {
    border-left-color: #f59e0b;
}

.priority-Low {
    border-left-color: #22c55e;
}

.actions {
    display: flex;
    gap: 5px;
    flex-shrink: 0;
}

.actions button {
    padding: 8px;
}

.edit {
    background: #2563eb;
}

.delete {
    background: #dc2626;
}

.complete {
    background: #16a34a;
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    color: #666;
    gap: 10px;
}

#clearBtn {
    background: #dc2626;
}

.empty {
    text-align: center;
    color: #888;
    padding: 25px;
}

/* Dark Mode */

body.dark {
    background: #111827;
}

body.dark .container {
    background: #1f2937;
    color: white;
}

body.dark .stat,
body.dark .task {
    background: #374151;
}

body.dark .stat p,
body.dark .task-info p,
body.dark .footer,
body.dark header p {
    color: #d1d5db;
}

body.dark input,
body.dark select {
    background: #374151;
    color: white;
    border-color: #555;
}

body.dark .filter {
    background: #4b5563;
    color: white;
}

body.dark .filter.active {
    background: #4f46e5;
}

@media (max-width: 550px) {
    .container {
        padding: 18px;
    }

    #todoForm {
        grid-template-columns: 1fr;
    }

    #addBtn {
        grid-column: span 1;
    }

    .task {
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .actions {
        margin-left: auto;
    }
}
```
script.js

```
// Get HTML elements
const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const priority = document.getElementById("priority");
const dueDate = document.getElementById("dueDate");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";
let editId = null;

// Save tasks in Local Storage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add or Update Task
todoForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const text = taskInput.value.trim();

    if (!text) {
        alert("Please enter a task!");
        return;
    }

    if (editId !== null) {
        tasks = tasks.map(task => {
            if (task.id === editId) {
                return {
                    ...task,
                    text: text,
                    priority: priority.value,
                    dueDate: dueDate.value
                };
            }
            return task;
        });

        editId = null;
        document.getElementById("addBtn").textContent = "Add Task";

    } else {
        const task = {
            id: Date.now(),
            text: text,
            priority: priority.value,
            dueDate: dueDate.value,
            completed: false
        };

        tasks.push(task);
    }

    saveTasks();
    todoForm.reset();
    priority.value = "Medium";
    renderTasks();
});

// Display Tasks
function renderTasks() {
    taskList.innerHTML = "";

    const searchText = searchInput.value.toLowerCase();

    const filteredTasks = tasks.filter(task => {
        const matchesSearch =
            task.text.toLowerCase().includes(searchText);

        const matchesFilter =
            currentFilter === "all" ||
            (currentFilter === "pending" && !task.completed) ||
            (currentFilter === "completed" && task.completed) ||
            (currentFilter === "high" && task.priority === "High");

        return matchesSearch && matchesFilter;
    });

    if (filteredTasks.length === 0) {
        taskList.innerHTML =
            '<li class="empty">No tasks found! Add a new task.</li>';
    }

    filteredTasks.forEach(task => {
        const li = document.createElement("li");

        li.className = `task priority-${task.priority}
            ${task.completed ? "completed" : ""}`;

        const info = document.createElement("div");
        info.className = "task-info";

        const heading = document.createElement("h3");
        heading.textContent = task.text;

        const details = document.createElement("p");
        details.textContent =
            `Priority: ${task.priority} | Due: ${task.dueDate || "No date"}`;

        info.appendChild(heading);
        info.appendChild(details);

        const actions = document.createElement("div");
        actions.className = "actions";

        const completeBtn = document.createElement("button");
        completeBtn.className = "complete";
        completeBtn.textContent = task.completed ? "↩" : "✓";
        completeBtn.title = "Complete / Undo";
        completeBtn.addEventListener("click", () => toggleTask(task.id));

        const editBtn = document.createElement("button");
        editBtn.className = "edit";
        editBtn.textContent = "✎";
        editBtn.title = "Edit Task";
        editBtn.addEventListener("click", () => editTask(task.id));

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.textContent = "✕";
        deleteBtn.title = "Delete Task";
        deleteBtn.addEventListener("click", () => deleteTask(task.id));

        actions.append(completeBtn, editBtn, deleteBtn);
        li.append(info, actions);
        taskList.appendChild(li);
    });

    updateStats();
}

// Mark Task Completed
function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id
            ? { ...task, completed: !task.completed }
            : task
    );

    saveTasks();
    renderTasks();
}

// Edit Task
function editTask(id) {
    const task = tasks.find(task => task.id === id);

    taskInput.value = task.text;
    priority.value = task.priority;
    dueDate.value = task.dueDate;

    editId = id;

    document.getElementById("addBtn").textContent = "Update Task";
    taskInput.focus();
}

// Delete Task
function deleteTask(id) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
    }
}

// Search Tasks
searchInput.addEventListener("input", renderTasks);

// Filter Tasks
document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelectorAll(".filter").forEach(btn =>
            btn.classList.remove("active")
        );

        this.classList.add("active");
        currentFilter = this.dataset.filter;

        renderTasks();
    });
});

// Clear Completed Tasks
document.getElementById("clearBtn").addEventListener("click", function() {
    if (confirm("Delete all completed tasks?")) {
        tasks = tasks.filter(task => !task.completed);
        saveTasks();
        renderTasks();
    }
});

// Update Statistics
function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    document.getElementById("totalTasks").textContent = total;
    document.getElementById("pendingTasks").textContent = pending;
    document.getElementById("completedTasks").textContent = completed;

    document.getElementById("taskCount").textContent =
        `${pending} tasks left`;
}

// Dark Mode
const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem("darkMode", isDark);
    themeBtn.textContent = isDark ? "☀️" : "🌙";
});

// Initial Display
renderTasks();
```

## OUTPUT

![alt text](<Screenshot 2026-11-16 212048.png>)



## RESULT
The program for creating To-do list using JavaScript is executed successfully.