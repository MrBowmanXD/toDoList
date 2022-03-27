import globals from './globals';

export default function day() {
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
