let taskId = 0

class Task {
  
  constructor(description, taskListId) {
    this.description = description;
    this.taskListId = taskListId
    this.id = ++taskId;
    storeObj.tasks.push(this);
  }

}
