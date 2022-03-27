import globals from '../globals';
import _createToDoForm from './createToDoForm';
import _setDisplayToDo from './setDisplayToDo';

export default function _createToDoItem() {
  _createToDoForm();
  globals.getBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const toDo = new ToDo(
      globals.title.value,
      globals.description.value,
      globals.dueDate.value,
      globals.priority.value,
      counter++
    );

    globals.toDoList.push(toDo);
    _setDisplayToDo();
    globals.addTask.classList.toggle('hidden');
  });
}
