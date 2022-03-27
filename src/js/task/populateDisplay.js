import globals from '../globals';

export default function _populateDisplay() {
  globals.toDoList.forEach((toDoItem) => {
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
            <p class="priority priority${
              toDoItem.counter
            } bold">Priority</p><p>${toDoItem.priority}</p>
            <button class="modify modify${toDoItem.counter}">Modify</button>
            <button class="remove remove${toDoItem.counter}">Remove</button>`;

    globals.flexContainer.appendChild(div);
  });
}
