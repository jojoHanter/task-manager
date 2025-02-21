let tasks = [];
let completedTasks = [];
let completedTaskCount = 0;

function showTasks() {
  if (tasks.length === 0) {
    console.log("Нет активных задач");
  } else {
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      console.log(
        `${i + 1}.${task.title}-${task.descriprion} | статус: ${
          task.isComplited ? "Завершена" : "Активна"
        } | Создана: ${task.createdDate}`
      );
    }
  }
}

function setTask(title, description) {
  if (tasks.some((task) => !task, isComplited)) {
    if (
      prompt(
        "Не все задачи заверешены , хотите добавит задачу ? (да/нет)"
      ).toLowerCase() !== "да"
    ) {
      console.log("задача не была добавлена");
      return;
    }
  }
  tasks.push({
    title,
    description,
    isCompleted: false,
    createdDate: new Date().toLocaleString(),
    completedDate: null,
  });
  console.log(`Задача "${title}" была успешно добавлена.`);
}

function completeTask(index) {
  if (index < 0 || index >= tasks.length) {
    console.log("Задача с таким индексом не найдена");
    return;
  }
  const task = tasks[index];
  if (task.isCompleted) {
    console.log(`Задача "${task.title}" уже завершена`);
    return;
  }
  task.isCompleted = true;
  task.completedDate = new Date().toLocaleString();

  completedTasks.push(task);

  tasks.splice(index, 1);

  completedTaskCount++;
  console.log(`Задача "${task.title}" была завершена.`);
}
function deleteTask() {
  if (index < 0 || index >= tasks.length) {
    console.log("Задача с таким индексом не найдена");
    return;
  }
  const task = tasks[index];
  const userRespons =
    task.isCompleted ||
    confirm(`Таска "${task.title}" еще не выполнена, удалить? (да/нет)`);

  if (userRespons) {
    tasks.splice(index, 1);
    console.log(`Задача "${task.title}" была удалена.`);
  } else {
    console.log("Задача не была удалена.");
  }
}

function clearTasks() {
  while (tasks.length > 0) {
    tasks.pop();
  }
  console.log("Задачи удалены");
}
