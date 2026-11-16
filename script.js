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