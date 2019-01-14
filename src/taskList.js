let taskListId = 0

class TaskList {
  constructor() {
    this.id = ++taskListId;
    storeObj.taskLists.push(this);
  }

  handleFormSubmit(event){
    event.preventDefault();
    const newTaskEl = document.createElement('li')
    new Task(inputEl.value, this.id);
    const lastTaskDesc = storeObj.tasks[storeObj.tasks.length - 1].description
    newTaskEl.innerHTML = `${lastTaskDesc}<label><button type='button' name='X'/>X</label>` ;
    document.querySelector('#tasks').appendChild(newTaskEl);
    newTaskEl.addEventListener('click', () => newTaskEl.remove());
    formEl.reset()
  }
}
