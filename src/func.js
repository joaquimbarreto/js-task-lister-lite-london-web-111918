const inputEl = document.querySelector('#new-task-description');
const formEl = document.querySelector('#create-task-form');
const tasksEl = document.querySelector('#tasks');
const listEl = document.querySelector('#list');

function handleFormSubmit(event) {
  event.preventDefault();
  const newTaskEl = document.createElement('li')
  const taskButton = document.createElement('button');
  taskButton.innerText = 'X'
  newTaskEl.innerHTML = `${inputEl.value}`;
  newTaskEl.appendChild(taskButton);
  tasksEl.appendChild(newTaskEl);
  taskButton.addEventListener('click', () => newTaskEl.remove());
  formEl.reset()
}

document.addEventListener("DOMContentLoaded", () => {
  formEl.addEventListener('submit', handleFormSubmit)
});
