import globals from '../globals';
import _removeToDoItems from './removeToDoItems';

export default function _removeAllBtn() {
  globals.removeAll.addEventListener('click', _removeToDoItems);
}
