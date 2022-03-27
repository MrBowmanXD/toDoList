import globals from '../globals';

export default function _modifyToDo() {
  const toModifyEventually = document.querySelectorAll('.modify');
  const toModify = [...toModifyEventually];

  toModify.forEach((btn) => {
    btn.addEventListener('click', () => {
      for (let toDoItem of globals.toDoList) {
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
