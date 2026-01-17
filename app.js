const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

let total = 0;
let completed = 0;

function updateCounter() {
    totalTasks.textContent = total;
    completedTasks.textContent = completed;
}

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return alert("Harap masukkan tugas!");

    const li = document.createElement("li");
    li.className = "task-item";

    const span = document.createElement("span");
    span.textContent = taskText;

    const checkBtn = document.createElement("button");
    checkBtn.textContent = "✔";
    checkBtn.className = "check-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.className = "delete-btn";

    checkBtn.addEventListener("click", () => {
        if (!li.classList.contains("done")) {
            li.classList.add("done");
            completed++;
        } else {
            li.classList.remove("done");
            completed--;
        }
        updateCounter();
    });

    deleteBtn.addEventListener("click", () => {
        if (li.classList.contains("done")) completed--;
        taskList.removeChild(li);
        total--;
        updateCounter();
    });

    li.appendChild(span);
    li.appendChild(checkBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    total++;
    updateCounter();
    taskInput.value = "";
});
