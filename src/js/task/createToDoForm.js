import globals from '../globals';

export default function _createToDoForm() {
  globals.createBtn.addEventListener('click', () => {
    globals.toDoInput.classList.toggle('hidden');
  });
}
