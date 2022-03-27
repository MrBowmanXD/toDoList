import globals from '../globals';

function project() {
  let projectTitles = [];

  function _changeSubtitle() {
    globals.counter++;
    globals.project.addEventListener('click', () => {
      globals.addTask.classList.toggle('hidden');
      globals.subTitleDiv.innerHTML = `<div class="new-project new-project${globals.counter}">
      <br><input class="project project${globals.counter}" type="text" name="project" placeholder="Project name">
      <br>
      <button class="btn add-project add-project${globals.counter}">Add project</button>
      <button class="btn cancel-project cancel-project${globals.counter}">Cancel</button>
      </div>`;

      const addProjectBtn = document.querySelector(
        `.add-project${globals.counter}`
      );

      addProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const project = document.querySelector(`.project${globals.counter}`);
        const div = document.createElement('div');

        projectTitles.push(project.value);

        projectTitles.forEach((title) => {
          div.innerHTML = `<h2 class="subTitle subTitle${globals.counter}">${title}</h2>
                            <div class="add-task add-task${globals.counter}">
                            <i class="bi bi-plus-square-fill"></i>
                            <p class="add-task__paragragh">Add task</p>
                        </div>`;

          globals.rightArea.appendChild(div);
          globals.addTask.remove();
          globals.subTitleDiv.classList.toggle('hidden');
        });

        const addTask = document.querySelector('.add-task');

        addTask.addEventListener('click', (e) => {
          e.preventDefault();

          addTask.classList.toggle('hidden');
          globals.toDoContainer.classList.toggle('hidden');
          const div = document.createElement('div');
          // div.innerHTML = ``;

          // to-do: add funcitonality to the add task button
        });
      });

      const cancelBtn = document.querySelector(
        `.cancel-project${globals.counter}`
      );

      cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // to-do: restore previous state of Project
      });
    });
  }

  function runChangeSubtitle() {
    _changeSubtitle();
  }

  return { runChangeSubtitle, projectTitles };
}

export default project();
