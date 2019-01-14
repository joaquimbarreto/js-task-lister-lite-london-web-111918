
const storeObj = {taskLists: [], tasks: []};
const inputEl = document.querySelector('#new-task-description')
const formEl = document.querySelector('#create-task-form');

document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  formEl.addEventListener('submit', taskList.handleFormSubmit)
});
