let task = ""; // описание задачи
let comltetedTaskCount = 0; //

function showTask() {
  if (task === "") {
    console.log("Задача отсутствует");
  } else {
    console.log(task);
  }
}

// showTask();

function setTask(taskDescription) {
  if (task) {
    console.log("Сначала завершите или удалите задачу");
  } else {
    task = taskDescription;
    console.log(`Задача установлена : ${task}`);
  }
}

function completeTask() {
  if (task) {
    console.log(`Задача завершена : ${task}`);
    comltetedTaskCount++;
    task = "";
  } else {
    console.log("Нет задачи на удаление");
  }
}
function deleteTask(taskDescription) {
  if (task) {
    console.log(`Задача ${task} удалена`);
    task = "";
  } else {
    console.log("нет задачи на удаление");
  }
}
