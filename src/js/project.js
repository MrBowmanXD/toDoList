import globals from './globals';

export default function project() {
  let projectTitles = [];

  function _changeSubtitle() {
    globals().counter++;
    globals().project.addEventListener('click', () => {
      globals().addTask.classList.toggle('hidden');
      globals().subTitleDiv.innerHTML = `<div class="new-project new-project${
        globals().counter
      }">
      <br><input class="project project${
        globals().counter
      }" type="text" name="project" placeholder="Project name">
      <br>
      <button class="add-project add-project${
        globals().counter
      }">Add project</button>
      <button class="cancel-project cancel-project${
        globals().counter
      }">Cancel</button>
      </div>`;

      const addProjectBtn = document.querySelector(
        `.add-project${globals().counter}`
      );

      addProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const project = document.querySelector(`.project${globals().counter}`);
        const div = document.createElement('div');

        projectTitles.push(project.value);

        div.innerHTML = `<h2 class="subTitle">${project.value}</h2>
        <div class="add-task">
                            <i class="bi bi-plus-square-fill"></i>
                            <p class="add-task__paragragh">Add task</p>
                        </div>`;
        globals().rightArea.appendChild(div);
        globals().addTask.remove();
        const addTask = document.querySelector('.add-task');
        globals().subTitleDiv.classList.toggle('hidden');

        addTask.addEventListener('click', (e) => {
          e.preventDefault();

          addTask.classList.toggle('hidden');
          // to-do: add funcitonality to the add task button
        });
      });
    });
  }

  function runChangeSubtitle() {
    _changeSubtitle();
  }

  return { runChangeSubtitle };
}
