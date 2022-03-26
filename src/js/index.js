import globals from './globals';
import ToDo from './class/ToDo';

const ToDoList = (function () {
  let counter = 0;

  function _createToDoForm() {
    globals().createBtn.addEventListener('click', () => {
      globals().toDoInput.classList.toggle('hidden');
    });
  }

  function _createToDoItem() {
    _createToDoForm();
    globals().getBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const toDo = new ToDo(
        title.value,
        description.value,
        dueDate.value,
        priority.value,
        counter++
      );

      globals().toDoList.push(toDo);
      _setDisplayToDo();
      globals().addTask.classList.toggle('hidden');
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
    globals().toDoList.forEach((toDoItem) => {
      const div = document.createElement('div');
      div.classList.add('flex-child');
      div.classList.add(`flex-child${toDoItem.counter}`);
      div.classList.add(`removable${toDoItem.counter}`);
      div.innerHTML += `<p class="title title${
        toDoItem.counter
      } bold">Title</p><p>${toDoItem.title}</p>
          <p class="description description${
            toDoItem.counter
          } bold">Description</p><p>${toDoItem.description}</p>
          <p class="dueDate dueDate${
            toDoItem.counter
          } bold">Due Date</p><p>${parseInt(toDoItem.dueDate)}</p>
          <p class="priority priority${toDoItem.counter} bold">Priority</p><p>${
        toDoItem.priority
      }</p>
          <button class="modify modify${toDoItem.counter}">Modify</button>
          <button class="remove remove${toDoItem.counter}">Remove</button>`;

      globals().flexContainer.appendChild(div);
    });
  }

  function _modifyToDo() {
    const toModifyEventually = document.querySelectorAll('.modify');
    const toModify = [...toModifyEventually];

    toModify.forEach((btn) => {
      btn.addEventListener('click', () => {
        for (let toDoItem of globals().toDoList) {
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

              const formDiv = document.querySelector(
                `.modifyForm${toDoItem.counter}`
              );

              if (formDiv) {
                formDiv.classList.toggle('hidden');
                continue;
              }

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
                  const title = document.querySelector(
                    `#title${toDoItem.counter}`
                  );
                  const description = document.querySelector(
                    `#description${toDoItem.counter}`
                  );
                  const dueDate = document.querySelector(
                    `#dueDate${toDoItem.counter}`
                  );
                  const priority = document.querySelector(
                    `#priority${toDoItem.counter}`
                  );

                  toDoItem.title = title.value;
                  toDoItem.description = description.value;
                  toDoItem.dueDate = dueDate.value;
                  toDoItem.priority = priority.value;

                  const pTitle = document.querySelector(
                    `.title${toDoItem.counter}`
                  );
                  const pDescription = document.querySelector(
                    `.description${toDoItem.counter}`
                  );
                  const pDueDate = document.querySelector(
                    `.dueDate${toDoItem.counter}`
                  );
                  const pPriority = document.querySelector(
                    `.priority${toDoItem.counter}`
                  );

                  pTitle.textContent = toDoItem.title;
                  pDescription.textContent = toDoItem.description;
                  pDueDate.textContent = toDoItem.dueDate;
                  pPriority.textContent = toDoItem.priority;

                  const form = document.querySelector(
                    `.modifyForm${toDoItem.counter}`
                  );
                  form.classList.toggle('hidden');

                  isModified = true;
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
        for (let toDoItem of globals().toDoList) {
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
              delete globals().toDoList[toDoItem.counter];
            }
          }
        }
      });
    });
  }

  function _cleanToDoDisplay() {
    globals().flexContainer.innerHTML = '';
  }

  function _removeAllBtn() {
    globals().removeAll.addEventListener('click', _removeToDoItems);
  }

  function _removeToDoItems() {
    const flexChildAll = document.querySelectorAll('.flex-child');
    const flexChildArray = [...flexChildAll];

    flexChildArray.forEach((div) => {
      globals().flexContainer.removeChild(div);
    });

    globals().toDoList = [];
  }

  function createToDoItem() {
    return _createToDoItem();
  }

  return { createToDoItem };
})();

ToDoList.createToDoItem();

globals().addTask.addEventListener('click', () => {
  globals().toDoContainer.classList.toggle('hidden');
  globals().addTask.classList.toggle('hidden');
});

globals().cancel.addEventListener('click', (e) => {
  e.preventDefault();
  globals().toDoContainer.classList.toggle('hidden');
  globals().addTask.classList.toggle('hidden');
});
