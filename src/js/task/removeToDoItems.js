import globals from '../globals';

export default function _removeToDoItems() {
  const flexChildAll = document.querySelectorAll('.flex-child');
  const flexChildArray = [...flexChildAll];

  flexChildArray.forEach((div) => {
    globals.flexContainer.removeChild(div);
  });

  globals.toDoList = [];
}
