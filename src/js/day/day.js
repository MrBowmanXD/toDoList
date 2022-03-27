import globals from '../globals';

function day() {
  function _changeSubtitle() {
    globals.day.addEventListener('click', () => {
      globals.subTitle.textContent = 'Today';
    });
  }

  function runChangeSubtitle() {
    _changeSubtitle();
  }

  return { runChangeSubtitle };
}

export default day();
