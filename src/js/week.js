import globals from './globals';

export default function week() {
  function _changeSubtitle() {
    globals().week.addEventListener('click', () => {
      globals().subTitle.textContent = 'Week';
    });
  }

  function runChangeSubtitle() {
    _changeSubtitle();
  }

  return { runChangeSubtitle };
}
