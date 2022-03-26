import globals from './globals';

export default function inbox() {
  function _changeSubtitle() {
    globals().inbox.addEventListener('click', () => {
      globals().subTitle.textContent = 'Inbox';
    });
  }

  function runChangeSubtitle() {
    _changeSubtitle();
  }

  return { runChangeSubtitle };
}
