import _createToDoForm from './createToDoForm';
import _createToDoItem from './createToDoItem';
import _setDisplayToDo from './setDisplayToDo';
import _populateDisplay from './populateDisplay';
import _modifyToDo from './modifyToDo';
import _removeBtn from './removeBtn';
import _cleanToDoDisplay from './cleanToDoDisplay';
import _removeToDoItems from './removeToDoItems';
import globals from '../globals';

function ToDoList() {
  let counter = 0;

  _createToDoForm();
  _createToDoItem();
  _setDisplayToDo();
}

export default ToDoList;
