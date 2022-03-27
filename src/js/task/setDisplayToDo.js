import _cleanToDoDisplay from './cleanToDoDisplay';
import _populateDisplay from './populateDisplay';
import _removeBtn from './removeBtn';
import _removeAllBtn from './removeAllBtn';
import _modifyToDo from './modifyToDo';

export default function _setDisplayToDo() {
  _cleanToDoDisplay();
  _populateDisplay();
  _removeBtn();
  _removeAllBtn();
  _modifyToDo();
}
