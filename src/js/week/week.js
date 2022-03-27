import globals from '../globals';

function week() {
  function _changeSubtitle() {
    globals.week.addEventListener('click', () => {
      globals.subTitle.textContent = 'Week';
    });
  }

  function runChangeSubtitle() {
    _changeSubtitle();
  }

  return { runChangeSubtitle };
}

export default week();
