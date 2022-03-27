import globals from './globals';
import ToDo from './class/ToDo';
import inbox from './inbox/inbox';
import day from './day/day';
import week from './week/week';
import project from './project/project';
import ToDoList from './task/task';

ToDoList();

globals.addTask.addEventListener('click', () => {
  globals.toDoContainer.classList.toggle('hidden');
  globals.addTask.classList.toggle('hidden');
});

globals.cancel.addEventListener('click', (e) => {
  e.preventDefault();
  globals.toDoContainer.classList.toggle('hidden');
  globals.addTask.classList.toggle('hidden');
});

inbox.runChangeSubtitle();
day.runChangeSubtitle();
week.runChangeSubtitle();
project.runChangeSubtitle();
