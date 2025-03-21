let tasks = [];
let completedTasks = [];
let completedTaskCount = 0;

function getTaskDescriptions() {
  return tasks.map((task) => task.description);
}

function getLongTasks() {
  return tasks.filter((task) => task.description.length > 10);
}

function getTasksByDateRange(startDate, endDate, isCompleted = false) {
  return tasks.filter((task) => {
    const taskDate = new Date(task.createdDate);
    return (
      taskDate >= startDate &&
      taskDate <= endDate &&
      task.isCompleted === isCompleted
    );
  });
}

function clearShortTasks() {
  tasks = tasks.filter((task) => task.description.length >= 5);
}

function showTasks() {
  if (tasks.length === 0) {
    console.log("Нет активных задач");
  } else {
    tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. ${task.title} - ${task.description} | статус: ${
          task.isCompleted ? "Завершена" : "Активна"
        } | Создана: ${task.createdDate}`
      );
    });
  }
}

function completeTask(index) {
  if (!tasks[index]) {
    console.log("Задача с таким индексом не найдена");
    return;
  }

  const [task] = tasks.splice(index, 1);
  if (task.isCompleted) {
    console.log(`Задача "${task.title}" уже завершена`);
    return;
  }

  task.isCompleted = true;
  task.completedDate = new Date().toLocaleString();

  completedTasks.push(task);

  completedTaskCount++;
  console.log(`Задача "${task.title}" была завершена.`);
}

function updateTaskTitle(index, newTitle) {
  const task = tasks.find((_, i) => i === index);
  if (!task) {
    console.log("Задача с таким индексом не найдена");
    return;
  }

  task.title = newTitle;
  console.log(`Заголовок задачи обновлён на "${newTitle}"`);
}
