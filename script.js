document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("addTaskBtn").addEventListener("click", function () {
  const title = document.getElementById("taskTitle").value;
  const desc = document.getElementById("taskDesc").value;
  const date = document.getElementById("taskDueDate").value;
  const time = document.getElementById("taskTime").value;
  const priority = document.getElementById("taskPriority").value;

  if (!title || !date || !time) return alert("Please fill all required fields");

  const taskCard = document.createElement("div");
  taskCard.className = "sidebar-task";

  taskCard.innerHTML = `
    <h3>${title}</h3>
    <p>${desc}</p>
    <p><strong>Due:</strong> ${date} @ ${time}</p>
    <p><strong>Priority:</strong> ${priority}</p>
    <div class="task-buttons">
      <button class="complete">✅</button>
      <button class="update">✏️</button>
      <button class="delete">🗑️</button>
    </div>
  `;

  // Buttons functionality
  const completeBtn = taskCard.querySelector(".complete");
  const updateBtn = taskCard.querySelector(".update");
  const deleteBtn = taskCard.querySelector(".delete");

  completeBtn.addEventListener("click", function () {
    const completedCard = document.createElement("div");
    completedCard.className = "completed-task";
    completedCard.innerHTML = `
      <h3>${title}</h3>
      <p>${desc}</p>
      <p><strong>Completed:</strong> ${new Date().toLocaleString()}</p>
    `;
    document.getElementById("completedTasks").appendChild(completedCard);
    taskCard.remove();
  });

  updateBtn.addEventListener("click", function () {
    document.getElementById("taskTitle").value = title;
    document.getElementById("taskDesc").value = desc;
    document.getElementById("taskDueDate").value = date;
    document.getElementById("taskTime").value = time;
    document.getElementById("taskPriority").value = priority;
    taskCard.remove();
  });

  deleteBtn.addEventListener("click", function () {
    taskCard.remove();
  });

  document.getElementById("sidebarTasks").appendChild(taskCard);

  // Clear form
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDesc").value = "";
  document.getElementById("taskDueDate").value = "";
  document.getElementById("taskTime").value = "";
  document.getElementById("taskPriority").value = "low";
});
