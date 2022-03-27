function globals() {
  const container = document.querySelector('.container');
  const toDoInput = document.querySelector('.ToDoInput');
  const project = document.querySelector('.add-project');
  const subTitleDiv = document.querySelector('.sub-title__div');
  const inbox = document.querySelector('.inbox');
  const day = document.querySelector('.calendar-day');
  const week = document.querySelector('.calendar-week');
  const createBtn = document.querySelector('.createToDo');
  const getBtn = document.querySelector('.toDoItem');
  const flexContainer = document.querySelector('.flex-container');
  const removeAll = document.querySelector('.removeAll');
  const title = document.querySelector('#title');
  const description = document.querySelector('#description');
  const dueDate = document.querySelector('#dueDate');
  const priority = document.querySelector('#priority');
  const toDoContainer = document.querySelector('.todo-container');
  const rightArea = document.querySelector('.right-area');
  const addTask = document.querySelector('.add-task');
  const cancel = document.querySelector('.cancel');
  const subTitle = document.querySelector('.sub-title');
  let toDoList = [];
  let counter = 0;

  return {
    container,
    toDoInput,
    project,
    subTitleDiv,
    inbox,
    day,
    week,
    createBtn,
    getBtn,
    flexContainer,
    removeAll,
    title,
    description,
    dueDate,
    priority,
    toDoContainer,
    rightArea,
    addTask,
    cancel,
    subTitle,
    toDoList,
    counter,
  };
}

export default globals();
