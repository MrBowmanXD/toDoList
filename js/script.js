const container = document.querySelector('.container');
const toDoInput = document.querySelector('.ToDoInput');
const createBtn = document.querySelector('.createToDo');
const getBtn = document.querySelector('.toDoItem');
const flexContainer = document.querySelector('.flex-container');
const removeAll = document.querySelector('.removeAll');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const dueDate = document.querySelector('#dueDate');
const priority = document.querySelector('#priority');
let toDoList = [];

class ToDo {
  title = 'Learn to code.';
  description = 'Learn to code javascript, react and node.js.';
  dueDate = '30/03/2021';
  priority = false;
  counter = 0;

  constructor(title, description, dueDate, priority, counter) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.counter = counter;
  }
}

const ToDoList = (function () {
  let counter = 0;

  function _createToDoForm() {
    createBtn.addEventListener('click', () => {
      toDoInput.classList.toggle('hidden');
    });
  }

  function _createToDoItem() {
    _createToDoForm();
    getBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const toDo = new ToDo(
        title.value,
        description.value,
        dueDate.value,
        priority.value,
        counter++
      );

      toDoList.push(toDo);
      _setDisplayToDo();
    });
  }

  function _setDisplayToDo() {
    _cleanToDoDisplay();
    _populateDisplay();
    _removeBtn();
    _removeAllBtn();
    _modifyToDo();
  }

  function _populateDisplay() {
    toDoList.forEach((toDoItem) => {
      const div = document.createElement('div');
      div.classList.add('flex-child');
      div.classList.add(`flex-child${toDoItem.counter}`);
      div.classList.add(`removable${toDoItem.counter}`);
      div.innerHTML += `<p class="bold">Title</p><p>${toDoItem.title}</p>
          <p class="bold">Description</p><p>${toDoItem.description}</p>
          <p class="bold">Due Date</p><p>${parseInt(toDoItem.dueDate)}</p>
          <p class="bold">Priority</p><p>${toDoItem.priority}</p>
          <button class="modify modify${toDoItem.counter}">Modify</button>
          <button class="remove remove${toDoItem.counter}">Remove</button>`;

      flexContainer.appendChild(div);
    });
  }

  function _modifyToDo() {
    const toModifyEventually = document.querySelectorAll('.modify');
    const toModify = [...toModifyEventually];

    toModify.forEach((btn) => {
      btn.addEventListener('click', () => {
        for (let toDoItem of toDoList) {
          if (typeof toDoItem != 'object') {
            continue;
          } else {
            const modifyItem = document.querySelector(
              `.modify${toDoItem.counter}`
            );
            if (btn == modifyItem) {
              const flexChild = document.querySelector(
                `.flex-child${toDoItem.counter}`
              );

              const div = document.createElement('div');
              div.classList.add('modifyForm');
              div.classList.add(`modifyForm${toDoItem.counter}`);
              div.innerHTML = `<form>
              <br>
              <input type="text" name="title" id="title${toDoItem.counter}" placeholder="title">
              <br>
              <input type="text" name="description" id="description${toDoItem.counter}" placeholder="description">
              <br>
              <input type="date" name="dueDate" id="dueDate${toDoItem.counter}" placeholder="due Date">
              <br>
              <input type="text" name="priority" id="priority${toDoItem.counter}" placeholder="priority">
              <br>
              <button class="update toDoItem${toDoItem.counter}">Update ToDo item</button>
          </form>`;

              flexChild.appendChild(div);

              const updateBtns = document.querySelectorAll('.update');
              const updateBtnsArray = [...updateBtns];

              updateBtnsArray.forEach((updateBtn) => {
                updateBtn.addEventListener('click', (e) => {
                  e.preventDefault();
                  // to do: Add unique class to p tags,
                  // Update current value of title,
                  // description, etc.. with the value of new form
                });
              });
            }
          }
        }
      });
    });
  }

  function _removeBtn() {
    const toRemoveEventually = document.querySelectorAll('.remove');
    const toRemoveArray = [...toRemoveEventually];

    toRemoveArray.forEach((btn) => {
      btn.addEventListener('click', () => {
        for (let toDoItem of toDoList) {
          if (typeof toDoItem != 'object') {
            continue;
          } else {
            const removeItem = document.querySelector(
              `.remove${toDoItem.counter}`
            );
            if (btn == removeItem) {
              const flexChild = document.querySelector(
                `.flex-child${toDoItem.counter}`
              );
              flexChild.remove();
              delete toDoList[toDoItem.counter];
            }
          }
        }
      });
    });
  }

  function _cleanToDoDisplay() {
    flexContainer.innerHTML = '';
  }

  function _removeAllBtn() {
    removeAll.addEventListener('click', _removeToDoItems);
  }

  function _removeToDoItems() {
    const flexChildAll = document.querySelectorAll('.flex-child');
    const flexChildArray = [...flexChildAll];

    flexChildArray.forEach((div) => {
      flexContainer.removeChild(div);
    });

    toDoList = [];
  }

  function createToDoItem() {
    return _createToDoItem();
  }

  return { createToDoItem };
})();

ToDoList.createToDoItem();
