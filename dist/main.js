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

/***/ "./src/js/day.js":
/*!***********************!*\
  !*** ./src/js/day.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ day)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./src/js/globals.js");


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

/***/ "./src/js/inbox.js":
/*!*************************!*\
  !*** ./src/js/inbox.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ inbox)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./src/js/globals.js");


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


/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ project)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./src/js/globals.js");


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


/***/ }),

/***/ "./src/js/week.js":
/*!************************!*\
  !*** ./src/js/week.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ week)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./src/js/globals.js");


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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./src/js/globals.js");
/* harmony import */ var _class_ToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/ToDo */ "./src/js/class/ToDo.js");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox */ "./src/js/inbox.js");
/* harmony import */ var _day__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./day */ "./src/js/day.js");
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./week */ "./src/js/week.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ "./src/js/project.js");







const ToDoList = (function () {
  let counter = 0;

  function _createToDoForm() {
    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].createBtn.addEventListener('click', () => {
      _globals__WEBPACK_IMPORTED_MODULE_0__["default"].toDoInput.classList.toggle('hidden');
    });
  }

  function _createToDoItem() {
    _createToDoForm();
    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const toDo = new _class_ToDo__WEBPACK_IMPORTED_MODULE_1__["default"](
        _globals__WEBPACK_IMPORTED_MODULE_0__["default"].title.value,
        _globals__WEBPACK_IMPORTED_MODULE_0__["default"].description.value,
        _globals__WEBPACK_IMPORTED_MODULE_0__["default"].dueDate.value,
        _globals__WEBPACK_IMPORTED_MODULE_0__["default"].priority.value,
        counter++
      );

      _globals__WEBPACK_IMPORTED_MODULE_0__["default"].toDoList.push(toDo);
      _setDisplayToDo();
      _globals__WEBPACK_IMPORTED_MODULE_0__["default"].addTask.classList.toggle('hidden');
    });
  }

  function _setDisplayToDo() {
    _cleanToDoDisplay();
    _populateDisplay();
    _removeBtn();
    _removeAllBtn();
    _modifyToDo();
  }

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
          <p class="priority priority${toDoItem.counter} bold">Priority</p><p>${
        toDoItem.priority
      }</p>
          <button class="modify modify${toDoItem.counter}">Modify</button>
          <button class="remove remove${toDoItem.counter}">Remove</button>`;

      _globals__WEBPACK_IMPORTED_MODULE_0__["default"].flexContainer.appendChild(div);
    });
  }

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

  function _cleanToDoDisplay() {
    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].flexContainer.innerHTML = '';
  }

  function _removeAllBtn() {
    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].removeAll.addEventListener('click', _removeToDoItems);
  }

  function _removeToDoItems() {
    const flexChildAll = document.querySelectorAll('.flex-child');
    const flexChildArray = [...flexChildAll];

    flexChildArray.forEach((div) => {
      _globals__WEBPACK_IMPORTED_MODULE_0__["default"].flexContainer.removeChild(div);
    });

    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].toDoList = [];
  }

  function createToDoItem() {
    return _createToDoItem();
  }

  return { createToDoItem };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoList);

ToDoList.createToDoItem();

_globals__WEBPACK_IMPORTED_MODULE_0__["default"].addTask.addEventListener('click', () => {
  _globals__WEBPACK_IMPORTED_MODULE_0__["default"].toDoContainer.classList.toggle('hidden');
  _globals__WEBPACK_IMPORTED_MODULE_0__["default"].addTask.classList.toggle('hidden');
});

_globals__WEBPACK_IMPORTED_MODULE_0__["default"].cancel.addEventListener('click', (e) => {
  e.preventDefault();
  _globals__WEBPACK_IMPORTED_MODULE_0__["default"].toDoContainer.classList.toggle('hidden');
  _globals__WEBPACK_IMPORTED_MODULE_0__["default"].addTask.classList.toggle('hidden');
});

(0,_inbox__WEBPACK_IMPORTED_MODULE_2__["default"])().runChangeSubtitle();
(0,_day__WEBPACK_IMPORTED_MODULE_3__["default"])().runChangeSubtitle();
(0,_week__WEBPACK_IMPORTED_MODULE_4__["default"])().runChangeSubtitle();
(0,_project__WEBPACK_IMPORTED_MODULE_5__["default"])().runChangeSubtitle();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NsYXNzL1RvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvZGF5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy93ZWVrLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XG4gIHRpdGxlID0gJ0xlYXJuIHRvIGNvZGUuJztcbiAgZGVzY3JpcHRpb24gPSAnTGVhcm4gdG8gY29kZSBqYXZhc2NyaXB0LCByZWFjdCBhbmQgbm9kZS5qcy4nO1xuICBkdWVEYXRlID0gJzMwLzAzLzIwMjEnO1xuICBwcmlvcml0eSA9IGZhbHNlO1xuICBjb3VudGVyID0gMDtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb3VudGVyKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvdW50ZXIgPSBjb3VudGVyO1xuICB9XG59XG4iLCJpbXBvcnQgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXkoKSB7XG4gIGZ1bmN0aW9uIF9jaGFuZ2VTdWJ0aXRsZSgpIHtcbiAgICBnbG9iYWxzLmRheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGdsb2JhbHMuc3ViVGl0bGUudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuQ2hhbmdlU3VidGl0bGUoKSB7XG4gICAgX2NoYW5nZVN1YnRpdGxlKCk7XG4gIH1cblxuICByZXR1cm4geyBydW5DaGFuZ2VTdWJ0aXRsZSB9O1xufVxuIiwiZnVuY3Rpb24gZ2xvYmFscygpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICBjb25zdCB0b0RvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVG9Eb0lucHV0Jyk7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcbiAgY29uc3Qgc3ViVGl0bGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViLXRpdGxlX19kaXYnKTtcbiAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTtcbiAgY29uc3QgZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyLWRheScpO1xuICBjb25zdCB3ZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyLXdlZWsnKTtcbiAgY29uc3QgY3JlYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZVRvRG8nKTtcbiAgY29uc3QgZ2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9JdGVtJyk7XG4gIGNvbnN0IGZsZXhDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxleC1jb250YWluZXInKTtcbiAgY29uc3QgcmVtb3ZlQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZUFsbCcpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuICBjb25zdCByaWdodEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtYXJlYScpO1xuICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJyk7XG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcbiAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViLXRpdGxlJyk7XG4gIGxldCB0b0RvTGlzdCA9IFtdO1xuICBsZXQgY291bnRlciA9IDA7XG5cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgdG9Eb0lucHV0LFxuICAgIHByb2plY3QsXG4gICAgc3ViVGl0bGVEaXYsXG4gICAgaW5ib3gsXG4gICAgZGF5LFxuICAgIHdlZWssXG4gICAgY3JlYXRlQnRuLFxuICAgIGdldEJ0bixcbiAgICBmbGV4Q29udGFpbmVyLFxuICAgIHJlbW92ZUFsbCxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIHRvRG9Db250YWluZXIsXG4gICAgcmlnaHRBcmVhLFxuICAgIGFkZFRhc2ssXG4gICAgY2FuY2VsLFxuICAgIHN1YlRpdGxlLFxuICAgIHRvRG9MaXN0LFxuICAgIGNvdW50ZXIsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbHMoKTtcbiIsImltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluYm94KCkge1xuICBmdW5jdGlvbiBfY2hhbmdlU3VidGl0bGUoKSB7XG4gICAgZ2xvYmFscy5pbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGdsb2JhbHMuc3ViVGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuQ2hhbmdlU3VidGl0bGUoKSB7XG4gICAgX2NoYW5nZVN1YnRpdGxlKCk7XG4gIH1cblxuICByZXR1cm4geyBydW5DaGFuZ2VTdWJ0aXRsZSB9O1xufVxuIiwiaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdCgpIHtcbiAgbGV0IHByb2plY3RUaXRsZXMgPSBbXTtcblxuICBmdW5jdGlvbiBfY2hhbmdlU3VidGl0bGUoKSB7XG4gICAgZ2xvYmFscy5jb3VudGVyKys7XG4gICAgZ2xvYmFscy5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZ2xvYmFscy5hZGRUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgZ2xvYmFscy5zdWJUaXRsZURpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm5ldy1wcm9qZWN0IG5ldy1wcm9qZWN0JHtnbG9iYWxzLmNvdW50ZXJ9XCI+XG4gICAgICA8YnI+PGlucHV0IGNsYXNzPVwicHJvamVjdCBwcm9qZWN0JHtnbG9iYWxzLmNvdW50ZXJ9XCIgdHlwZT1cInRleHRcIiBuYW1lPVwicHJvamVjdFwiIHBsYWNlaG9sZGVyPVwiUHJvamVjdCBuYW1lXCI+XG4gICAgICA8YnI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZC1wcm9qZWN0IGFkZC1wcm9qZWN0JHtnbG9iYWxzLmNvdW50ZXJ9XCI+QWRkIHByb2plY3Q8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gY2FuY2VsLXByb2plY3QgY2FuY2VsLXByb2plY3Qke2dsb2JhbHMuY291bnRlcn1cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgIDwvZGl2PmA7XG5cbiAgICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmFkZC1wcm9qZWN0JHtnbG9iYWxzLmNvdW50ZXJ9YFxuICAgICAgKTtcblxuICAgICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0JHtnbG9iYWxzLmNvdW50ZXJ9YCk7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHByb2plY3RUaXRsZXMucHVzaChwcm9qZWN0LnZhbHVlKTtcblxuICAgICAgICBwcm9qZWN0VGl0bGVzLmZvckVhY2goKHRpdGxlKSA9PiB7XG4gICAgICAgICAgZGl2LmlubmVySFRNTCA9IGA8aDIgY2xhc3M9XCJzdWJUaXRsZSBzdWJUaXRsZSR7Z2xvYmFscy5jb3VudGVyfVwiPiR7dGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXRhc2sgYWRkLXRhc2ske2dsb2JhbHMuY291bnRlcn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXBsdXMtc3F1YXJlLWZpbGxcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZGQtdGFza19fcGFyYWdyYWdoXCI+QWRkIHRhc2s8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuXG4gICAgICAgICAgZ2xvYmFscy5yaWdodEFyZWEuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICBnbG9iYWxzLmFkZFRhc2sucmVtb3ZlKCk7XG4gICAgICAgICAgZ2xvYmFscy5zdWJUaXRsZURpdi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuXG4gICAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIGFkZFRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgZ2xvYmFscy50b0RvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIC8vIGRpdi5pbm5lckhUTUwgPSBgYDtcblxuICAgICAgICAgIC8vIHRvLWRvOiBhZGQgZnVuY2l0b25hbGl0eSB0byB0aGUgYWRkIHRhc2sgYnV0dG9uXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuY2FuY2VsLXByb2plY3Qke2dsb2JhbHMuY291bnRlcn1gXG4gICAgICApO1xuXG4gICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIHRvLWRvOiByZXN0b3JlIHByZXZpb3VzIHN0YXRlIG9mIFByb2plY3RcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuQ2hhbmdlU3VidGl0bGUoKSB7XG4gICAgX2NoYW5nZVN1YnRpdGxlKCk7XG4gIH1cblxuICByZXR1cm4geyBydW5DaGFuZ2VTdWJ0aXRsZSwgcHJvamVjdFRpdGxlcyB9O1xufVxuIiwiaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2VlaygpIHtcbiAgZnVuY3Rpb24gX2NoYW5nZVN1YnRpdGxlKCkge1xuICAgIGdsb2JhbHMud2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGdsb2JhbHMuc3ViVGl0bGUudGV4dENvbnRlbnQgPSAnV2Vlayc7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBydW5DaGFuZ2VTdWJ0aXRsZSgpIHtcbiAgICBfY2hhbmdlU3VidGl0bGUoKTtcbiAgfVxuXG4gIHJldHVybiB7IHJ1bkNoYW5nZVN1YnRpdGxlIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscyc7XG5pbXBvcnQgVG9EbyBmcm9tICcuL2NsYXNzL1RvRG8nO1xuaW1wb3J0IGluYm94IGZyb20gJy4vaW5ib3gnO1xuaW1wb3J0IGRheSBmcm9tICcuL2RheSc7XG5pbXBvcnQgd2VlayBmcm9tICcuL3dlZWsnO1xuaW1wb3J0IHByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgVG9Eb0xpc3QgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgY291bnRlciA9IDA7XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZVRvRG9Gb3JtKCkge1xuICAgIGdsb2JhbHMuY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZ2xvYmFscy50b0RvSW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlVG9Eb0l0ZW0oKSB7XG4gICAgX2NyZWF0ZVRvRG9Gb3JtKCk7XG4gICAgZ2xvYmFscy5nZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCB0b0RvID0gbmV3IFRvRG8oXG4gICAgICAgIGdsb2JhbHMudGl0bGUudmFsdWUsXG4gICAgICAgIGdsb2JhbHMuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgIGdsb2JhbHMuZHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgZ2xvYmFscy5wcmlvcml0eS52YWx1ZSxcbiAgICAgICAgY291bnRlcisrXG4gICAgICApO1xuXG4gICAgICBnbG9iYWxzLnRvRG9MaXN0LnB1c2godG9Ebyk7XG4gICAgICBfc2V0RGlzcGxheVRvRG8oKTtcbiAgICAgIGdsb2JhbHMuYWRkVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zZXREaXNwbGF5VG9EbygpIHtcbiAgICBfY2xlYW5Ub0RvRGlzcGxheSgpO1xuICAgIF9wb3B1bGF0ZURpc3BsYXkoKTtcbiAgICBfcmVtb3ZlQnRuKCk7XG4gICAgX3JlbW92ZUFsbEJ0bigpO1xuICAgIF9tb2RpZnlUb0RvKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfcG9wdWxhdGVEaXNwbGF5KCkge1xuICAgIGdsb2JhbHMudG9Eb0xpc3QuZm9yRWFjaCgodG9Eb0l0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY2hpbGQnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGBmbGV4LWNoaWxkJHt0b0RvSXRlbS5jb3VudGVyfWApO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYHJlbW92YWJsZSR7dG9Eb0l0ZW0uY291bnRlcn1gKTtcbiAgICAgIGRpdi5pbm5lckhUTUwgKz0gYDxwIGNsYXNzPVwidGl0bGUgdGl0bGUke1xuICAgICAgICB0b0RvSXRlbS5jb3VudGVyXG4gICAgICB9IGJvbGRcIj5UaXRsZTwvcD48cD4ke3RvRG9JdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uJHtcbiAgICAgICAgICAgIHRvRG9JdGVtLmNvdW50ZXJcbiAgICAgICAgICB9IGJvbGRcIj5EZXNjcmlwdGlvbjwvcD48cD4ke3RvRG9JdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImR1ZURhdGUgZHVlRGF0ZSR7XG4gICAgICAgICAgICB0b0RvSXRlbS5jb3VudGVyXG4gICAgICAgICAgfSBib2xkXCI+RHVlIERhdGU8L3A+PHA+JHtwYXJzZUludCh0b0RvSXRlbS5kdWVEYXRlKX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJwcmlvcml0eSBwcmlvcml0eSR7dG9Eb0l0ZW0uY291bnRlcn0gYm9sZFwiPlByaW9yaXR5PC9wPjxwPiR7XG4gICAgICAgIHRvRG9JdGVtLnByaW9yaXR5XG4gICAgICB9PC9wPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RpZnkgbW9kaWZ5JHt0b0RvSXRlbS5jb3VudGVyfVwiPk1vZGlmeTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmUgcmVtb3ZlJHt0b0RvSXRlbS5jb3VudGVyfVwiPlJlbW92ZTwvYnV0dG9uPmA7XG5cbiAgICAgIGdsb2JhbHMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX21vZGlmeVRvRG8oKSB7XG4gICAgY29uc3QgdG9Nb2RpZnlFdmVudHVhbGx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGlmeScpO1xuICAgIGNvbnN0IHRvTW9kaWZ5ID0gWy4uLnRvTW9kaWZ5RXZlbnR1YWxseV07XG5cbiAgICB0b01vZGlmeS5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgdG9Eb0l0ZW0gb2YgZ2xvYmFscy50b0RvTGlzdCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdG9Eb0l0ZW0gIT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtb2RpZnlJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5tb2RpZnkke3RvRG9JdGVtLmNvdW50ZXJ9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChidG4gPT0gbW9kaWZ5SXRlbSkge1xuICAgICAgICAgICAgICBjb25zdCBmbGV4Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGAuZmxleC1jaGlsZCR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYC5tb2RpZnlGb3JtJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBpZiAoZm9ybURpdikge1xuICAgICAgICAgICAgICAgIGZvcm1EaXYuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21vZGlmeUZvcm0nKTtcbiAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYG1vZGlmeUZvcm0ke3RvRG9JdGVtLmNvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBgPGZvcm0+XG4gICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZSR7dG9Eb0l0ZW0uY291bnRlcn1cIiBwbGFjZWhvbGRlcj1cInRpdGxlXCI+XG4gICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbiR7dG9Eb0l0ZW0uY291bnRlcn1cIiBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZURhdGVcIiBpZD1cImR1ZURhdGUke3RvRG9JdGVtLmNvdW50ZXJ9XCIgcGxhY2Vob2xkZXI9XCJkdWUgRGF0ZVwiPlxuICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcmlvcml0eVwiIGlkPVwicHJpb3JpdHkke3RvRG9JdGVtLmNvdW50ZXJ9XCIgcGxhY2Vob2xkZXI9XCJwcmlvcml0eVwiPlxuICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1cGRhdGUgdG9Eb0l0ZW0ke3RvRG9JdGVtLmNvdW50ZXJ9XCI+VXBkYXRlIFRvRG8gaXRlbTwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5gO1xuXG4gICAgICAgICAgICAgIGZsZXhDaGlsZC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudXBkYXRlJyk7XG4gICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUJ0bnNBcnJheSA9IFsuLi51cGRhdGVCdG5zXTtcblxuICAgICAgICAgICAgICB1cGRhdGVCdG5zQXJyYXkuZm9yRWFjaCgodXBkYXRlQnRuKSA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYCN0aXRsZSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgI2Rlc2NyaXB0aW9uJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYCNkdWVEYXRlJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGAjcHJpb3JpdHkke3RvRG9JdGVtLmNvdW50ZXJ9YFxuICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgdG9Eb0l0ZW0udGl0bGUgPSB0aXRsZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIHRvRG9JdGVtLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgICAgICAgICAgICB0b0RvSXRlbS5kdWVEYXRlID0gZHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIHRvRG9JdGVtLnByaW9yaXR5ID0gcHJpb3JpdHkudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGAudGl0bGUke3RvRG9JdGVtLmNvdW50ZXJ9YFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGAuZGVzY3JpcHRpb24ke3RvRG9JdGVtLmNvdW50ZXJ9YFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYC5kdWVEYXRlJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgLnByaW9yaXR5JHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgIHBUaXRsZS50ZXh0Q29udGVudCA9IHRvRG9JdGVtLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgcERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9Eb0l0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICBwRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvRG9JdGVtLmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgICBwUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b0RvSXRlbS5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGAubW9kaWZ5Rm9ybSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcblxuICAgICAgICAgICAgICAgICAgaXNNb2RpZmllZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfcmVtb3ZlQnRuKCkge1xuICAgIGNvbnN0IHRvUmVtb3ZlRXZlbnR1YWxseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKTtcbiAgICBjb25zdCB0b1JlbW92ZUFycmF5ID0gWy4uLnRvUmVtb3ZlRXZlbnR1YWxseV07XG5cbiAgICB0b1JlbW92ZUFycmF5LmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyB0by1kbzogdXNlIGZpbHRlciBpbnN0ZWFkIG9mIGZvclxuICAgICAgICBmb3IgKGxldCB0b0RvSXRlbSBvZiBnbG9iYWxzLnRvRG9MaXN0KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0b0RvSXRlbSAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLnJlbW92ZSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGJ0biA9PSByZW1vdmVJdGVtKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZsZXhDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYC5mbGV4LWNoaWxkJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZmxleENoaWxkLnJlbW92ZSgpO1xuICAgICAgICAgICAgICBkZWxldGUgZ2xvYmFscy50b0RvTGlzdFt0b0RvSXRlbS5jb3VudGVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NsZWFuVG9Eb0Rpc3BsYXkoKSB7XG4gICAgZ2xvYmFscy5mbGV4Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgZnVuY3Rpb24gX3JlbW92ZUFsbEJ0bigpIHtcbiAgICBnbG9iYWxzLnJlbW92ZUFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9yZW1vdmVUb0RvSXRlbXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3JlbW92ZVRvRG9JdGVtcygpIHtcbiAgICBjb25zdCBmbGV4Q2hpbGRBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxleC1jaGlsZCcpO1xuICAgIGNvbnN0IGZsZXhDaGlsZEFycmF5ID0gWy4uLmZsZXhDaGlsZEFsbF07XG5cbiAgICBmbGV4Q2hpbGRBcnJheS5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgIGdsb2JhbHMuZmxleENvbnRhaW5lci5yZW1vdmVDaGlsZChkaXYpO1xuICAgIH0pO1xuXG4gICAgZ2xvYmFscy50b0RvTGlzdCA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVG9Eb0l0ZW0oKSB7XG4gICAgcmV0dXJuIF9jcmVhdGVUb0RvSXRlbSgpO1xuICB9XG5cbiAgcmV0dXJuIHsgY3JlYXRlVG9Eb0l0ZW0gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG9MaXN0O1xuXG5Ub0RvTGlzdC5jcmVhdGVUb0RvSXRlbSgpO1xuXG5nbG9iYWxzLmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGdsb2JhbHMudG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgZ2xvYmFscy5hZGRUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cbmdsb2JhbHMuY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBnbG9iYWxzLnRvRG9Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIGdsb2JhbHMuYWRkVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn0pO1xuXG5pbmJveCgpLnJ1bkNoYW5nZVN1YnRpdGxlKCk7XG5kYXkoKS5ydW5DaGFuZ2VTdWJ0aXRsZSgpO1xud2VlaygpLnJ1bkNoYW5nZVN1YnRpdGxlKCk7XG5wcm9qZWN0KCkucnVuQ2hhbmdlU3VidGl0bGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==