import globals from '../globals';

export default function _removeBtn() {
  const toRemoveEventually = document.querySelectorAll('.remove');
  const toRemoveArray = [...toRemoveEventually];

  toRemoveArray.forEach((btn) => {
    btn.addEventListener('click', () => {
      // to-do: use filter instead of for
      for (let toDoItem of globals.toDoList) {
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
            delete globals.toDoList[toDoItem.counter];
          }
        }
      }
    });
  });
}
