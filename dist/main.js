/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/class/ToDo.js":
/*!******************************!*\
  !*** ./src/js/class/ToDo.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
class ToDo {
  title = 'Learn to code.';
  description = 'Learn to code javascript, react and node.js.';
  dueDate = '30/03/2021';
  priority = false;
  counter = 0;

  constructor(title, description, dueDate, priority, counter) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.counter = counter;
  }
}


/***/ }),

/***/ "./src/js/day/day.js":
/*!***************************!*\
  !*** ./src/js/day/day.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./src/js/globals.js");


function day() {
  function _changeSubtitle() {
    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].day.addEventListener('click', () => {
      _globals__WEBPACK_IMPORTED_MODULE_0__["default"].subTitle.textContent = 'Today';
    });
  }

  function runChangeSubtitle() {
    _changeSubtitle();
  }

  return { runChangeSubtitle };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (day());


/***/ }),

/***/ "./src/js/globals.js":
/*!***************************!*\
  !*** ./src/js/globals.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function globals() {
  const container = document.querySelector('.container');
  const toDoInput = document.querySelector('.ToDoInput');
  const project = document.querySelector('.add-project');
  const subTitleDiv = document.querySelector('.sub-title__div');
  const inbox = document.querySelector('.inbox');
  const day = document.querySelector('.calendar-day');
  const week = document.querySelector('.calendar-week');
  const createBtn = document.querySelector('.createToDo');
  const getBtn = document.querySelector('.toDoItem');
  const flexContainer = document.querySelector('.flex-container');
  const removeAll = document.querySelector('.removeAll');
  const title = document.querySelector('#title');
  const description = document.querySelector('#description');
  const dueDate = document.querySelector('#dueDate');
  const priority = document.querySelector('#priority');
  const toDoContainer = document.querySelector('.todo-container');
  const rightArea = document.querySelector('.right-area');
  const addTask = document.querySelector('.add-task');
  const cancel = document.querySelector('.cancel');
  const subTitle = document.querySelector('.sub-title');
  let toDoList = [];
  let counter = 0;

  return {
    container,
    toDoInput,
    project,
    subTitleDiv,
    inbox,
    day,
    week,
    createBtn,
    getBtn,
    flexContainer,
    removeAll,
    title,
    description,
    dueDate,
    priority,
    toDoContainer,
    rightArea,
    addTask,
    cancel,
    subTitle,
    toDoList,
    counter,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globals());


/***/ }),

/***/ "./src/js/inbox/inbox.js":
/*!*******************************!*\
  !*** ./src/js/inbox/inbox.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./src/js/globals.js");


function inbox() {
  function _changeSubtitle() {
    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].inbox.addEventListener('click', () => {
      _globals__WEBPACK_IMPORTED_MODULE_0__["default"].subTitle.textContent = 'Inbox';
    });
  }

  function runChangeSubtitle() {
    _changeSubtitle();
  }

  return { runChangeSubtitle };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inbox());


/***/ }),

/***/ "./src/js/project/project.js":
/*!***********************************!*\
  !*** ./src/js/project/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./src/js/globals.js");


function project() {
  let projectTitles = [];

  function _changeSubtitle() {
    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].counter++;
    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].project.addEventListener('click', () => {
      _globals__WEBPACK_IMPORTED_MODULE_0__["default"].addTask.classList.toggle('hidden');
      _globals__WEBPACK_IMPORTED_MODULE_0__["default"].subTitleDiv.innerHTML = `<div class="new-project new-project${_globals__WEBPACK_IMPORTED_MODULE_0__["default"].counter}">
      <br><input class="project project${_globals__WEBPACK_IMPORTED_MODULE_0__["default"].counter}" type="text" name="project" placeholder="Project name">
      <br>
      <button class="btn add-project add-project${_globals__WEBPACK_IMPORTED_MODULE_0__["default"].counter}">Add project</button>
      <button class="btn cancel-project cancel-project${_globals__WEBPACK_IMPORTED_MODULE_0__["default"].counter}">Cancel</button>
      </div>`;

      const addProjectBtn = document.querySelector(
        `.add-project${_globals__WEBPACK_IMPORTED_MODULE_0__["default"].counter}`
      );

      addProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const project = document.querySelector(`.project${_globals__WEBPACK_IMPORTED_MODULE_0__["default"].counter}`);
        const div = document.createElement('div');

        projectTitles.push(project.value);

        projectTitles.forEach((title) => {
          div.innerHTML = `<h2 class="subTitle subTitle${_globals__WEBPACK_IMPORTED_MODULE_0__["default"].counter}">${title}</h2>
                            <div class="add-task add-task${_globals__WEBPACK_IMPORTED_MODULE_0__["default"].counter}">
                            <i class="bi bi-plus-square-fill"></i>
                            <p class="add-task__paragragh">Add task</p>
                        </div>`;

          _globals__WEBPACK_IMPORTED_MODULE_0__["default"].rightArea.appendChild(div);
          _globals__WEBPACK_IMPORTED_MODULE_0__["default"].addTask.remove();
          _globals__WEBPACK_IMPORTED_MODULE_0__["default"].subTitleDiv.classList.toggle('hidden');
        });

        const addTask = document.querySelector('.add-task');

        addTask.addEventListener('click', (e) => {
          e.preventDefault();

          addTask.classList.toggle('hidden');
          _globals__WEBPACK_IMPORTED_MODULE_0__["default"].toDoContainer.classList.toggle('hidden');
          const div = document.createElement('div');
          // div.innerHTML = ``;

          // to-do: add funcitonality to the add task button
        });
      });

      const cancelBtn = document.querySelector(
        `.cancel-project${_globals__WEBPACK_IMPORTED_MODULE_0__["default"].counter}`
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project());


/***/ }),

/***/ "./src/js/task/cleanToDoDisplay.js":
/*!*****************************************!*\
  !*** ./src/js/task/cleanToDoDisplay.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _cleanToDoDisplay)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./src/js/globals.js");


function _cleanToDoDisplay() {
  _globals__WEBPACK_IMPORTED_MODULE_0__["default"].flexContainer.innerHTML = '';
}


/***/ }),

/***/ "./src/js/task/createToDoForm.js":
/*!***************************************!*\
  !*** ./src/js/task/createToDoForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createToDoForm)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./src/js/globals.js");


function _createToDoForm() {
  _globals__WEBPACK_IMPORTED_MODULE_0__["default"].createBtn.addEventListener('click', () => {
    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].toDoInput.classList.toggle('hidden');
  });
}


/***/ }),

/***/ "./src/js/task/createToDoItem.js":
/*!***************************************!*\
  !*** ./src/js/task/createToDoItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createToDoItem)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./src/js/globals.js");
/* harmony import */ var _createToDoForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDoForm */ "./src/js/task/createToDoForm.js");
/* harmony import */ var _setDisplayToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setDisplayToDo */ "./src/js/task/setDisplayToDo.js");




function _createToDoItem() {
  (0,_createToDoForm__WEBPACK_IMPORTED_MODULE_1__["default"])();
  _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const toDo = new ToDo(
      _globals__WEBPACK_IMPORTED_MODULE_0__["default"].title.value,
      _globals__WEBPACK_IMPORTED_MODULE_0__["default"].description.value,
      _globals__WEBPACK_IMPORTED_MODULE_0__["default"].dueDate.value,
      _globals__WEBPACK_IMPORTED_MODULE_0__["default"].priority.value,
      counter++
    );

    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].toDoList.push(toDo);
    (0,_setDisplayToDo__WEBPACK_IMPORTED_MODULE_2__["default"])();
    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].addTask.classList.toggle('hidden');
  });
}


/***/ }),

/***/ "./src/js/task/modifyToDo.js":
/*!***********************************!*\
  !*** ./src/js/task/modifyToDo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _modifyToDo)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./src/js/globals.js");


function _modifyToDo() {
  const toModifyEventually = document.querySelectorAll('.modify');
  const toModify = [...toModifyEventually];

  toModify.forEach((btn) => {
    btn.addEventListener('click', () => {
      for (let toDoItem of _globals__WEBPACK_IMPORTED_MODULE_0__["default"].toDoList) {
        if (typeof toDoItem != 'object') {
          continue;
        } else {
          const modifyItem = document.querySelector(
            `.modify${toDoItem.counter}`
          );
          if (btn == modifyItem) {
            const flexChild = document.querySelector(
              `.flex-child${toDoItem.counter}`
            );

            const formDiv = document.querySelector(
              `.modifyForm${toDoItem.counter}`
            );

            if (formDiv) {
              formDiv.classList.toggle('hidden');
              continue;
            }

            const div = document.createElement('div');
            div.classList.add('modifyForm');
            div.classList.add(`modifyForm${toDoItem.counter}`);
            div.innerHTML = `<form>
                <br>
                <input type="text" name="title" id="title${toDoItem.counter}" placeholder="title">
                <br>
                <input type="text" name="description" id="description${toDoItem.counter}" placeholder="description">
                <br>
                <input type="date" name="dueDate" id="dueDate${toDoItem.counter}" placeholder="due Date">
                <br>
                <input type="text" name="priority" id="priority${toDoItem.counter}" placeholder="priority">
                <br>
                <button class="update toDoItem${toDoItem.counter}">Update ToDo item</button>
            </form>`;

            flexChild.appendChild(div);

            const updateBtns = document.querySelectorAll('.update');
            const updateBtnsArray = [...updateBtns];

            updateBtnsArray.forEach((updateBtn) => {
              updateBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const title = document.querySelector(
                  `#title${toDoItem.counter}`
                );
                const description = document.querySelector(
                  `#description${toDoItem.counter}`
                );
                const dueDate = document.querySelector(
                  `#dueDate${toDoItem.counter}`
                );
                const priority = document.querySelector(
                  `#priority${toDoItem.counter}`
                );

                toDoItem.title = title.value;
                toDoItem.description = description.value;
                toDoItem.dueDate = dueDate.value;
                toDoItem.priority = priority.value;

                const pTitle = document.querySelector(
                  `.title${toDoItem.counter}`
                );
                const pDescription = document.querySelector(
                  `.description${toDoItem.counter}`
                );
                const pDueDate = document.querySelector(
                  `.dueDate${toDoItem.counter}`
                );
                const pPriority = document.querySelector(
                  `.priority${toDoItem.counter}`
                );

                pTitle.textContent = toDoItem.title;
                pDescription.textContent = toDoItem.description;
                pDueDate.textContent = toDoItem.dueDate;
                pPriority.textContent = toDoItem.priority;

                const form = document.querySelector(
                  `.modifyForm${toDoItem.counter}`
                );
                form.classList.toggle('hidden');

                isModified = true;
              });
            });
          }
        }
      }
    });
  });
}


/***/ }),

/***/ "./src/js/task/populateDisplay.js":
/*!****************************************!*\
  !*** ./src/js/task/populateDisplay.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _populateDisplay)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./src/js/globals.js");


function _populateDisplay() {
  _globals__WEBPACK_IMPORTED_MODULE_0__["default"].toDoList.forEach((toDoItem) => {
    const div = document.createElement('div');
    div.classList.add('flex-child');
    div.classList.add(`flex-child${toDoItem.counter}`);
    div.classList.add(`removable${toDoItem.counter}`);
    div.innerHTML += `<p class="title title${
      toDoItem.counter
    } bold">Title</p><p>${toDoItem.title}</p>
            <p class="description description${
              toDoItem.counter
            } bold">Description</p><p>${toDoItem.description}</p>
            <p class="dueDate dueDate${
              toDoItem.counter
            } bold">Due Date</p><p>${parseInt(toDoItem.dueDate)}</p>
            <p class="priority priority${
              toDoItem.counter
            } bold">Priority</p><p>${toDoItem.priority}</p>
            <button class="modify modify${toDoItem.counter}">Modify</button>
            <button class="remove remove${toDoItem.counter}">Remove</button>`;

    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].flexContainer.appendChild(div);
  });
}


/***/ }),

/***/ "./src/js/task/removeAllBtn.js":
/*!*************************************!*\
  !*** ./src/js/task/removeAllBtn.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _removeAllBtn)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./src/js/globals.js");
/* harmony import */ var _removeToDoItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeToDoItems */ "./src/js/task/removeToDoItems.js");



function _removeAllBtn() {
  _globals__WEBPACK_IMPORTED_MODULE_0__["default"].removeAll.addEventListener('click', _removeToDoItems__WEBPACK_IMPORTED_MODULE_1__["default"]);
}


/***/ }),

/***/ "./src/js/task/removeBtn.js":
/*!**********************************!*\
  !*** ./src/js/task/removeBtn.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _removeBtn)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./src/js/globals.js");


function _removeBtn() {
  const toRemoveEventually = document.querySelectorAll('.remove');
  const toRemoveArray = [...toRemoveEventually];

  toRemoveArray.forEach((btn) => {
    btn.addEventListener('click', () => {
      // to-do: use filter instead of for
      for (let toDoItem of _globals__WEBPACK_IMPORTED_MODULE_0__["default"].toDoList) {
        if (typeof toDoItem != 'object') {
          continue;
        } else {
          const removeItem = document.querySelector(
            `.remove${toDoItem.counter}`
          );
          if (btn == removeItem) {
            const flexChild = document.querySelector(
              `.flex-child${toDoItem.counter}`
            );
            flexChild.remove();
            delete _globals__WEBPACK_IMPORTED_MODULE_0__["default"].toDoList[toDoItem.counter];
          }
        }
      }
    });
  });
}


/***/ }),

/***/ "./src/js/task/removeToDoItems.js":
/*!****************************************!*\
  !*** ./src/js/task/removeToDoItems.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _removeToDoItems)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./src/js/globals.js");


function _removeToDoItems() {
  const flexChildAll = document.querySelectorAll('.flex-child');
  const flexChildArray = [...flexChildAll];

  flexChildArray.forEach((div) => {
    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].flexContainer.removeChild(div);
  });

  _globals__WEBPACK_IMPORTED_MODULE_0__["default"].toDoList = [];
}


/***/ }),

/***/ "./src/js/task/setDisplayToDo.js":
/*!***************************************!*\
  !*** ./src/js/task/setDisplayToDo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setDisplayToDo)
/* harmony export */ });
/* harmony import */ var _cleanToDoDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanToDoDisplay */ "./src/js/task/cleanToDoDisplay.js");
/* harmony import */ var _populateDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateDisplay */ "./src/js/task/populateDisplay.js");
/* harmony import */ var _removeBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeBtn */ "./src/js/task/removeBtn.js");
/* harmony import */ var _removeAllBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeAllBtn */ "./src/js/task/removeAllBtn.js");
/* harmony import */ var _modifyToDo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifyToDo */ "./src/js/task/modifyToDo.js");






function _setDisplayToDo() {
  (0,_cleanToDoDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_populateDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_removeBtn__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_removeAllBtn__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modifyToDo__WEBPACK_IMPORTED_MODULE_4__["default"])();
}


/***/ }),

/***/ "./src/js/task/task.js":
/*!*****************************!*\
  !*** ./src/js/task/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createToDoForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDoForm */ "./src/js/task/createToDoForm.js");
/* harmony import */ var _createToDoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDoItem */ "./src/js/task/createToDoItem.js");
/* harmony import */ var _setDisplayToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setDisplayToDo */ "./src/js/task/setDisplayToDo.js");
/* harmony import */ var _populateDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./populateDisplay */ "./src/js/task/populateDisplay.js");
/* harmony import */ var _modifyToDo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifyToDo */ "./src/js/task/modifyToDo.js");
/* harmony import */ var _removeBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./removeBtn */ "./src/js/task/removeBtn.js");
/* harmony import */ var _cleanToDoDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cleanToDoDisplay */ "./src/js/task/cleanToDoDisplay.js");
/* harmony import */ var _removeToDoItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./removeToDoItems */ "./src/js/task/removeToDoItems.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../globals */ "./src/js/globals.js");










function ToDoList() {
  let counter = 0;

  (0,_createToDoForm__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_createToDoItem__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_setDisplayToDo__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoList);


/***/ }),

/***/ "./src/js/week/week.js":
/*!*****************************!*\
  !*** ./src/js/week/week.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./src/js/globals.js");


function week() {
  function _changeSubtitle() {
    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].week.addEventListener('click', () => {
      _globals__WEBPACK_IMPORTED_MODULE_0__["default"].subTitle.textContent = 'Week';
    });
  }

  function runChangeSubtitle() {
    _changeSubtitle();
  }

  return { runChangeSubtitle };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (week());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./src/js/globals.js");
/* harmony import */ var _class_ToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/ToDo */ "./src/js/class/ToDo.js");
/* harmony import */ var _inbox_inbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox/inbox */ "./src/js/inbox/inbox.js");
/* harmony import */ var _day_day__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./day/day */ "./src/js/day/day.js");
/* harmony import */ var _week_week__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./week/week */ "./src/js/week/week.js");
/* harmony import */ var _project_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/project */ "./src/js/project/project.js");
/* harmony import */ var _task_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task/task */ "./src/js/task/task.js");








(0,_task_task__WEBPACK_IMPORTED_MODULE_6__["default"])();

_globals__WEBPACK_IMPORTED_MODULE_0__["default"].addTask.addEventListener('click', () => {
  _globals__WEBPACK_IMPORTED_MODULE_0__["default"].toDoContainer.classList.toggle('hidden');
  _globals__WEBPACK_IMPORTED_MODULE_0__["default"].addTask.classList.toggle('hidden');
});

_globals__WEBPACK_IMPORTED_MODULE_0__["default"].cancel.addEventListener('click', (e) => {
  e.preventDefault();
  _globals__WEBPACK_IMPORTED_MODULE_0__["default"].toDoContainer.classList.toggle('hidden');
  _globals__WEBPACK_IMPORTED_MODULE_0__["default"].addTask.classList.toggle('hidden');
});

_inbox_inbox__WEBPACK_IMPORTED_MODULE_2__["default"].runChangeSubtitle();
_day_day__WEBPACK_IMPORTED_MODULE_3__["default"].runChangeSubtitle();
_week_week__WEBPACK_IMPORTED_MODULE_4__["default"].runChangeSubtitle();
_project_project__WEBPACK_IMPORTED_MODULE_5__["default"].runChangeSubtitle();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7OztVQ2hCdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNBO0FBQ0U7QUFDTjtBQUNHO0FBQ1M7QUFDTDs7QUFFbkMsc0RBQVE7O0FBRVIseUVBQWdDO0FBQ2hDLEVBQUUsK0VBQXNDO0FBQ3hDLEVBQUUseUVBQWdDO0FBQ2xDLENBQUM7O0FBRUQsd0VBQStCO0FBQy9CO0FBQ0EsRUFBRSwrRUFBc0M7QUFDeEMsRUFBRSx5RUFBZ0M7QUFDbEMsQ0FBQzs7QUFFRCxzRUFBdUI7QUFDdkIsa0VBQXFCO0FBQ3JCLG9FQUFzQjtBQUN0QiwwRUFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jbGFzcy9Ub0RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2RheS9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9pbmJveC9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9wcm9qZWN0L3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvdGFzay9jbGVhblRvRG9EaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL3Rhc2svY3JlYXRlVG9Eb0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvdGFzay9jcmVhdGVUb0RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy90YXNrL21vZGlmeVRvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvdGFzay9wb3B1bGF0ZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvdGFzay9yZW1vdmVBbGxCdG4uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvdGFzay9yZW1vdmVCdG4uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvdGFzay9yZW1vdmVUb0RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvdGFzay9zZXREaXNwbGF5VG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy90YXNrL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvd2Vlay93ZWVrLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XG4gIHRpdGxlID0gJ0xlYXJuIHRvIGNvZGUuJztcbiAgZGVzY3JpcHRpb24gPSAnTGVhcm4gdG8gY29kZSBqYXZhc2NyaXB0LCByZWFjdCBhbmQgbm9kZS5qcy4nO1xuICBkdWVEYXRlID0gJzMwLzAzLzIwMjEnO1xuICBwcmlvcml0eSA9IGZhbHNlO1xuICBjb3VudGVyID0gMDtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb3VudGVyKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvdW50ZXIgPSBjb3VudGVyO1xuICB9XG59XG4iLCJpbXBvcnQgZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcblxuZnVuY3Rpb24gZGF5KCkge1xuICBmdW5jdGlvbiBfY2hhbmdlU3VidGl0bGUoKSB7XG4gICAgZ2xvYmFscy5kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBnbG9iYWxzLnN1YlRpdGxlLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJ1bkNoYW5nZVN1YnRpdGxlKCkge1xuICAgIF9jaGFuZ2VTdWJ0aXRsZSgpO1xuICB9XG5cbiAgcmV0dXJuIHsgcnVuQ2hhbmdlU3VidGl0bGUgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGF5KCk7XG4iLCJmdW5jdGlvbiBnbG9iYWxzKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIGNvbnN0IHRvRG9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Ub0RvSW5wdXQnKTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICBjb25zdCBzdWJUaXRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWItdGl0bGVfX2RpdicpO1xuICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpO1xuICBjb25zdCBkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXItZGF5Jyk7XG4gIGNvbnN0IHdlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXItd2VlaycpO1xuICBjb25zdCBjcmVhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlVG9EbycpO1xuICBjb25zdCBnZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb0l0ZW0nKTtcbiAgY29uc3QgZmxleENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGV4LWNvbnRhaW5lcicpO1xuICBjb25zdCByZW1vdmVBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlQWxsJyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XG4gIGNvbnN0IHJpZ2h0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1hcmVhJyk7XG4gIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbiAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xuICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWItdGl0bGUnKTtcbiAgbGV0IHRvRG9MaXN0ID0gW107XG4gIGxldCBjb3VudGVyID0gMDtcblxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICB0b0RvSW5wdXQsXG4gICAgcHJvamVjdCxcbiAgICBzdWJUaXRsZURpdixcbiAgICBpbmJveCxcbiAgICBkYXksXG4gICAgd2VlayxcbiAgICBjcmVhdGVCdG4sXG4gICAgZ2V0QnRuLFxuICAgIGZsZXhDb250YWluZXIsXG4gICAgcmVtb3ZlQWxsLFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgdG9Eb0NvbnRhaW5lcixcbiAgICByaWdodEFyZWEsXG4gICAgYWRkVGFzayxcbiAgICBjYW5jZWwsXG4gICAgc3ViVGl0bGUsXG4gICAgdG9Eb0xpc3QsXG4gICAgY291bnRlcixcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFscygpO1xuIiwiaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscyc7XG5cbmZ1bmN0aW9uIGluYm94KCkge1xuICBmdW5jdGlvbiBfY2hhbmdlU3VidGl0bGUoKSB7XG4gICAgZ2xvYmFscy5pbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGdsb2JhbHMuc3ViVGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuQ2hhbmdlU3VidGl0bGUoKSB7XG4gICAgX2NoYW5nZVN1YnRpdGxlKCk7XG4gIH1cblxuICByZXR1cm4geyBydW5DaGFuZ2VTdWJ0aXRsZSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmJveCgpO1xuIiwiaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscyc7XG5cbmZ1bmN0aW9uIHByb2plY3QoKSB7XG4gIGxldCBwcm9qZWN0VGl0bGVzID0gW107XG5cbiAgZnVuY3Rpb24gX2NoYW5nZVN1YnRpdGxlKCkge1xuICAgIGdsb2JhbHMuY291bnRlcisrO1xuICAgIGdsb2JhbHMucHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGdsb2JhbHMuYWRkVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgIGdsb2JhbHMuc3ViVGl0bGVEaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJuZXctcHJvamVjdCBuZXctcHJvamVjdCR7Z2xvYmFscy5jb3VudGVyfVwiPlxuICAgICAgPGJyPjxpbnB1dCBjbGFzcz1cInByb2plY3QgcHJvamVjdCR7Z2xvYmFscy5jb3VudGVyfVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb2plY3RcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgbmFtZVwiPlxuICAgICAgPGJyPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhZGQtcHJvamVjdCBhZGQtcHJvamVjdCR7Z2xvYmFscy5jb3VudGVyfVwiPkFkZCBwcm9qZWN0PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGNhbmNlbC1wcm9qZWN0IGNhbmNlbC1wcm9qZWN0JHtnbG9iYWxzLmNvdW50ZXJ9XCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICA8L2Rpdj5gO1xuXG4gICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5hZGQtcHJvamVjdCR7Z2xvYmFscy5jb3VudGVyfWBcbiAgICAgICk7XG5cbiAgICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdCR7Z2xvYmFscy5jb3VudGVyfWApO1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBwcm9qZWN0VGl0bGVzLnB1c2gocHJvamVjdC52YWx1ZSk7XG5cbiAgICAgICAgcHJvamVjdFRpdGxlcy5mb3JFYWNoKCh0aXRsZSkgPT4ge1xuICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBgPGgyIGNsYXNzPVwic3ViVGl0bGUgc3ViVGl0bGUke2dsb2JhbHMuY291bnRlcn1cIj4ke3RpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10YXNrIGFkZC10YXNrJHtnbG9iYWxzLmNvdW50ZXJ9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1wbHVzLXNxdWFyZS1maWxsXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWRkLXRhc2tfX3BhcmFncmFnaFwiPkFkZCB0YXNrPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcblxuICAgICAgICAgIGdsb2JhbHMucmlnaHRBcmVhLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgZ2xvYmFscy5hZGRUYXNrLnJlbW92ZSgpO1xuICAgICAgICAgIGdsb2JhbHMuc3ViVGl0bGVEaXYuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcblxuICAgICAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBhZGRUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgIGdsb2JhbHMudG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAvLyBkaXYuaW5uZXJIVE1MID0gYGA7XG5cbiAgICAgICAgICAvLyB0by1kbzogYWRkIGZ1bmNpdG9uYWxpdHkgdG8gdGhlIGFkZCB0YXNrIGJ1dHRvblxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmNhbmNlbC1wcm9qZWN0JHtnbG9iYWxzLmNvdW50ZXJ9YFxuICAgICAgKTtcblxuICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyB0by1kbzogcmVzdG9yZSBwcmV2aW91cyBzdGF0ZSBvZiBQcm9qZWN0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJ1bkNoYW5nZVN1YnRpdGxlKCkge1xuICAgIF9jaGFuZ2VTdWJ0aXRsZSgpO1xuICB9XG5cbiAgcmV0dXJuIHsgcnVuQ2hhbmdlU3VidGl0bGUsIHByb2plY3RUaXRsZXMgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdCgpO1xuIiwiaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGVhblRvRG9EaXNwbGF5KCkge1xuICBnbG9iYWxzLmZsZXhDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG59XG4iLCJpbXBvcnQgZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZVRvRG9Gb3JtKCkge1xuICBnbG9iYWxzLmNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBnbG9iYWxzLnRvRG9JbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcbmltcG9ydCBfY3JlYXRlVG9Eb0Zvcm0gZnJvbSAnLi9jcmVhdGVUb0RvRm9ybSc7XG5pbXBvcnQgX3NldERpc3BsYXlUb0RvIGZyb20gJy4vc2V0RGlzcGxheVRvRG8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlVG9Eb0l0ZW0oKSB7XG4gIF9jcmVhdGVUb0RvRm9ybSgpO1xuICBnbG9iYWxzLmdldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdG9EbyA9IG5ldyBUb0RvKFxuICAgICAgZ2xvYmFscy50aXRsZS52YWx1ZSxcbiAgICAgIGdsb2JhbHMuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICBnbG9iYWxzLmR1ZURhdGUudmFsdWUsXG4gICAgICBnbG9iYWxzLnByaW9yaXR5LnZhbHVlLFxuICAgICAgY291bnRlcisrXG4gICAgKTtcblxuICAgIGdsb2JhbHMudG9Eb0xpc3QucHVzaCh0b0RvKTtcbiAgICBfc2V0RGlzcGxheVRvRG8oKTtcbiAgICBnbG9iYWxzLmFkZFRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9tb2RpZnlUb0RvKCkge1xuICBjb25zdCB0b01vZGlmeUV2ZW50dWFsbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kaWZ5Jyk7XG4gIGNvbnN0IHRvTW9kaWZ5ID0gWy4uLnRvTW9kaWZ5RXZlbnR1YWxseV07XG5cbiAgdG9Nb2RpZnkuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZm9yIChsZXQgdG9Eb0l0ZW0gb2YgZ2xvYmFscy50b0RvTGlzdCkge1xuICAgICAgICBpZiAodHlwZW9mIHRvRG9JdGVtICE9ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbW9kaWZ5SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLm1vZGlmeSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoYnRuID09IG1vZGlmeUl0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGZsZXhDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAuZmxleC1jaGlsZCR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5tb2RpZnlGb3JtJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmIChmb3JtRGl2KSB7XG4gICAgICAgICAgICAgIGZvcm1EaXYuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtb2RpZnlGb3JtJyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChgbW9kaWZ5Rm9ybSR7dG9Eb0l0ZW0uY291bnRlcn1gKTtcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGUke3RvRG9JdGVtLmNvdW50ZXJ9XCIgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uJHt0b0RvSXRlbS5jb3VudGVyfVwiIHBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZURhdGVcIiBpZD1cImR1ZURhdGUke3RvRG9JdGVtLmNvdW50ZXJ9XCIgcGxhY2Vob2xkZXI9XCJkdWUgRGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5JHt0b0RvSXRlbS5jb3VudGVyfVwiIHBsYWNlaG9sZGVyPVwicHJpb3JpdHlcIj5cbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVwZGF0ZSB0b0RvSXRlbSR7dG9Eb0l0ZW0uY291bnRlcn1cIj5VcGRhdGUgVG9EbyBpdGVtPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+YDtcblxuICAgICAgICAgICAgZmxleENoaWxkLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudXBkYXRlJyk7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVCdG5zQXJyYXkgPSBbLi4udXBkYXRlQnRuc107XG5cbiAgICAgICAgICAgIHVwZGF0ZUJ0bnNBcnJheS5mb3JFYWNoKCh1cGRhdGVCdG4pID0+IHtcbiAgICAgICAgICAgICAgdXBkYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgYCN0aXRsZSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICBgI2Rlc2NyaXB0aW9uJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgYCNkdWVEYXRlJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgIGAjcHJpb3JpdHkke3RvRG9JdGVtLmNvdW50ZXJ9YFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICB0b0RvSXRlbS50aXRsZSA9IHRpdGxlLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRvRG9JdGVtLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgICAgICAgICAgdG9Eb0l0ZW0uZHVlRGF0ZSA9IGR1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgdG9Eb0l0ZW0ucHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICBgLnRpdGxlJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICBgLmRlc2NyaXB0aW9uJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgIGAuZHVlRGF0ZSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgYC5wcmlvcml0eSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHBUaXRsZS50ZXh0Q29udGVudCA9IHRvRG9JdGVtLnRpdGxlO1xuICAgICAgICAgICAgICAgIHBEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvRG9JdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIHBEdWVEYXRlLnRleHRDb250ZW50ID0gdG9Eb0l0ZW0uZHVlRGF0ZTtcbiAgICAgICAgICAgICAgICBwUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b0RvSXRlbS5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgYC5tb2RpZnlGb3JtJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgICAgICAgICBpc01vZGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3BvcHVsYXRlRGlzcGxheSgpIHtcbiAgZ2xvYmFscy50b0RvTGlzdC5mb3JFYWNoKCh0b0RvSXRlbSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdmbGV4LWNoaWxkJyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoYGZsZXgtY2hpbGQke3RvRG9JdGVtLmNvdW50ZXJ9YCk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoYHJlbW92YWJsZSR7dG9Eb0l0ZW0uY291bnRlcn1gKTtcbiAgICBkaXYuaW5uZXJIVE1MICs9IGA8cCBjbGFzcz1cInRpdGxlIHRpdGxlJHtcbiAgICAgIHRvRG9JdGVtLmNvdW50ZXJcbiAgICB9IGJvbGRcIj5UaXRsZTwvcD48cD4ke3RvRG9JdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb24ke1xuICAgICAgICAgICAgICB0b0RvSXRlbS5jb3VudGVyXG4gICAgICAgICAgICB9IGJvbGRcIj5EZXNjcmlwdGlvbjwvcD48cD4ke3RvRG9JdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZHVlRGF0ZSBkdWVEYXRlJHtcbiAgICAgICAgICAgICAgdG9Eb0l0ZW0uY291bnRlclxuICAgICAgICAgICAgfSBib2xkXCI+RHVlIERhdGU8L3A+PHA+JHtwYXJzZUludCh0b0RvSXRlbS5kdWVEYXRlKX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByaW9yaXR5IHByaW9yaXR5JHtcbiAgICAgICAgICAgICAgdG9Eb0l0ZW0uY291bnRlclxuICAgICAgICAgICAgfSBib2xkXCI+UHJpb3JpdHk8L3A+PHA+JHt0b0RvSXRlbS5wcmlvcml0eX08L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kaWZ5IG1vZGlmeSR7dG9Eb0l0ZW0uY291bnRlcn1cIj5Nb2RpZnk8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmUgcmVtb3ZlJHt0b0RvSXRlbS5jb3VudGVyfVwiPlJlbW92ZTwvYnV0dG9uPmA7XG5cbiAgICBnbG9iYWxzLmZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcbmltcG9ydCBfcmVtb3ZlVG9Eb0l0ZW1zIGZyb20gJy4vcmVtb3ZlVG9Eb0l0ZW1zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3JlbW92ZUFsbEJ0bigpIHtcbiAgZ2xvYmFscy5yZW1vdmVBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfcmVtb3ZlVG9Eb0l0ZW1zKTtcbn1cbiIsImltcG9ydCBnbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVtb3ZlQnRuKCkge1xuICBjb25zdCB0b1JlbW92ZUV2ZW50dWFsbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJyk7XG4gIGNvbnN0IHRvUmVtb3ZlQXJyYXkgPSBbLi4udG9SZW1vdmVFdmVudHVhbGx5XTtcblxuICB0b1JlbW92ZUFycmF5LmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIHRvLWRvOiB1c2UgZmlsdGVyIGluc3RlYWQgb2YgZm9yXG4gICAgICBmb3IgKGxldCB0b0RvSXRlbSBvZiBnbG9iYWxzLnRvRG9MaXN0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9Eb0l0ZW0gIT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCByZW1vdmVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAucmVtb3ZlJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChidG4gPT0gcmVtb3ZlSXRlbSkge1xuICAgICAgICAgICAgY29uc3QgZmxleENoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5mbGV4LWNoaWxkJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmbGV4Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgICAgICBkZWxldGUgZ2xvYmFscy50b0RvTGlzdFt0b0RvSXRlbS5jb3VudGVyXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3JlbW92ZVRvRG9JdGVtcygpIHtcbiAgY29uc3QgZmxleENoaWxkQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsZXgtY2hpbGQnKTtcbiAgY29uc3QgZmxleENoaWxkQXJyYXkgPSBbLi4uZmxleENoaWxkQWxsXTtcblxuICBmbGV4Q2hpbGRBcnJheS5mb3JFYWNoKChkaXYpID0+IHtcbiAgICBnbG9iYWxzLmZsZXhDb250YWluZXIucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgfSk7XG5cbiAgZ2xvYmFscy50b0RvTGlzdCA9IFtdO1xufVxuIiwiaW1wb3J0IF9jbGVhblRvRG9EaXNwbGF5IGZyb20gJy4vY2xlYW5Ub0RvRGlzcGxheSc7XG5pbXBvcnQgX3BvcHVsYXRlRGlzcGxheSBmcm9tICcuL3BvcHVsYXRlRGlzcGxheSc7XG5pbXBvcnQgX3JlbW92ZUJ0biBmcm9tICcuL3JlbW92ZUJ0bic7XG5pbXBvcnQgX3JlbW92ZUFsbEJ0biBmcm9tICcuL3JlbW92ZUFsbEJ0bic7XG5pbXBvcnQgX21vZGlmeVRvRG8gZnJvbSAnLi9tb2RpZnlUb0RvJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldERpc3BsYXlUb0RvKCkge1xuICBfY2xlYW5Ub0RvRGlzcGxheSgpO1xuICBfcG9wdWxhdGVEaXNwbGF5KCk7XG4gIF9yZW1vdmVCdG4oKTtcbiAgX3JlbW92ZUFsbEJ0bigpO1xuICBfbW9kaWZ5VG9EbygpO1xufVxuIiwiaW1wb3J0IF9jcmVhdGVUb0RvRm9ybSBmcm9tICcuL2NyZWF0ZVRvRG9Gb3JtJztcbmltcG9ydCBfY3JlYXRlVG9Eb0l0ZW0gZnJvbSAnLi9jcmVhdGVUb0RvSXRlbSc7XG5pbXBvcnQgX3NldERpc3BsYXlUb0RvIGZyb20gJy4vc2V0RGlzcGxheVRvRG8nO1xuaW1wb3J0IF9wb3B1bGF0ZURpc3BsYXkgZnJvbSAnLi9wb3B1bGF0ZURpc3BsYXknO1xuaW1wb3J0IF9tb2RpZnlUb0RvIGZyb20gJy4vbW9kaWZ5VG9Ebyc7XG5pbXBvcnQgX3JlbW92ZUJ0biBmcm9tICcuL3JlbW92ZUJ0bic7XG5pbXBvcnQgX2NsZWFuVG9Eb0Rpc3BsYXkgZnJvbSAnLi9jbGVhblRvRG9EaXNwbGF5JztcbmltcG9ydCBfcmVtb3ZlVG9Eb0l0ZW1zIGZyb20gJy4vcmVtb3ZlVG9Eb0l0ZW1zJztcbmltcG9ydCBnbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMnO1xuXG5mdW5jdGlvbiBUb0RvTGlzdCgpIHtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gIF9jcmVhdGVUb0RvRm9ybSgpO1xuICBfY3JlYXRlVG9Eb0l0ZW0oKTtcbiAgX3NldERpc3BsYXlUb0RvKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG9MaXN0O1xuIiwiaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscyc7XG5cbmZ1bmN0aW9uIHdlZWsoKSB7XG4gIGZ1bmN0aW9uIF9jaGFuZ2VTdWJ0aXRsZSgpIHtcbiAgICBnbG9iYWxzLndlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBnbG9iYWxzLnN1YlRpdGxlLnRleHRDb250ZW50ID0gJ1dlZWsnO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuQ2hhbmdlU3VidGl0bGUoKSB7XG4gICAgX2NoYW5nZVN1YnRpdGxlKCk7XG4gIH1cblxuICByZXR1cm4geyBydW5DaGFuZ2VTdWJ0aXRsZSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWVrKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscyc7XG5pbXBvcnQgVG9EbyBmcm9tICcuL2NsYXNzL1RvRG8nO1xuaW1wb3J0IGluYm94IGZyb20gJy4vaW5ib3gvaW5ib3gnO1xuaW1wb3J0IGRheSBmcm9tICcuL2RheS9kYXknO1xuaW1wb3J0IHdlZWsgZnJvbSAnLi93ZWVrL3dlZWsnO1xuaW1wb3J0IHByb2plY3QgZnJvbSAnLi9wcm9qZWN0L3Byb2plY3QnO1xuaW1wb3J0IFRvRG9MaXN0IGZyb20gJy4vdGFzay90YXNrJztcblxuVG9Eb0xpc3QoKTtcblxuZ2xvYmFscy5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBnbG9iYWxzLnRvRG9Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIGdsb2JhbHMuYWRkVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn0pO1xuXG5nbG9iYWxzLmNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZ2xvYmFscy50b0RvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICBnbG9iYWxzLmFkZFRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59KTtcblxuaW5ib3gucnVuQ2hhbmdlU3VidGl0bGUoKTtcbmRheS5ydW5DaGFuZ2VTdWJ0aXRsZSgpO1xud2Vlay5ydW5DaGFuZ2VTdWJ0aXRsZSgpO1xucHJvamVjdC5ydW5DaGFuZ2VTdWJ0aXRsZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9