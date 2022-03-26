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
    (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().day.addEventListener('click', () => {
      (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().subTitle.textContent = 'Today';
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
/* harmony export */   "default": () => (/* binding */ globals)
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
    (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().inbox.addEventListener('click', () => {
      (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().subTitle.textContent = 'Inbox';
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
    (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().counter++;
    (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().project.addEventListener('click', () => {
      (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().addTask.classList.toggle('hidden');
      (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().subTitleDiv.innerHTML = `<div class="new-project new-project${
        (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().counter
      }">
      <br><input class="project project${
        (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().counter
      }" type="text" name="project" placeholder="Project name">
      <br>
      <h2 class="add-project add-project${(0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().counter}">Add project</h2>
      <h2 class="cancel-project cancel-project${(0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().counter}">Cancel</h2>
      </div>`;

      const addProjectBtn = document.querySelector(
        `.add-project${(0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().counter}`
      );

      addProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const project = document.querySelector(`.project${(0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().counter}`);
        const div = document.createElement('div');

        projectTitles.push(project.value);

        projectTitles.forEach((title) => {
          div.innerHTML = `<h2 class="subTitle subTitle${
            (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().counter
          }">${title}</h2>
                            <div class="add-task add-task${(0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().counter}">
                            <i class="bi bi-plus-square-fill"></i>
                            <p class="add-task__paragragh">Add task</p>
                        </div>`;

          (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().rightArea.appendChild(div);
          (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().addTask.remove();
          (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().subTitleDiv.classList.toggle('hidden');
        });

        const addTask = document.querySelector('.add-task');

        addTask.addEventListener('click', (e) => {
          e.preventDefault();

          addTask.classList.toggle('hidden');
          (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().toDoContainer.classList.toggle('hidden');
          const div = document.createElement('div');
          // div.innerHTML = ``;

          // to-do: add funcitonality to the add task button
        });
      });

      const cancelBtn = document.querySelector(
        `.cancel-project${(0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().counter}`
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
    (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().week.addEventListener('click', () => {
      (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().subTitle.textContent = 'Week';
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
    (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().createBtn.addEventListener('click', () => {
      (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().toDoInput.classList.toggle('hidden');
    });
  }

  function _createToDoItem() {
    _createToDoForm();
    (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().getBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const toDo = new _class_ToDo__WEBPACK_IMPORTED_MODULE_1__["default"](
        title.value,
        description.value,
        dueDate.value,
        priority.value,
        counter++
      );

      (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().toDoList.push(toDo);
      _setDisplayToDo();
      (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().addTask.classList.toggle('hidden');
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
    (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().toDoList.forEach((toDoItem) => {
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

      (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().flexContainer.appendChild(div);
    });
  }

  function _modifyToDo() {
    const toModifyEventually = document.querySelectorAll('.modify');
    const toModify = [...toModifyEventually];

    toModify.forEach((btn) => {
      btn.addEventListener('click', () => {
        for (let toDoItem of (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().toDoList) {
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
        for (let toDoItem of (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().toDoList) {
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
              delete (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().toDoList[toDoItem.counter];
            }
          }
        }
      });
    });
  }

  function _cleanToDoDisplay() {
    (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().flexContainer.innerHTML = '';
  }

  function _removeAllBtn() {
    (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().removeAll.addEventListener('click', _removeToDoItems);
  }

  function _removeToDoItems() {
    const flexChildAll = document.querySelectorAll('.flex-child');
    const flexChildArray = [...flexChildAll];

    flexChildArray.forEach((div) => {
      (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().flexContainer.removeChild(div);
    });

    (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().toDoList = [];
  }

  function createToDoItem() {
    return _createToDoItem();
  }

  return { createToDoItem };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoList);

ToDoList.createToDoItem();

(0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().addTask.addEventListener('click', () => {
  (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().toDoContainer.classList.toggle('hidden');
  (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().addTask.classList.toggle('hidden');
});

(0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().cancel.addEventListener('click', (e) => {
  e.preventDefault();
  (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().toDoContainer.classList.toggle('hidden');
  (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().addTask.classList.toggle('hidden');
});

(0,_inbox__WEBPACK_IMPORTED_MODULE_2__["default"])().runChangeSubtitle();
(0,_day__WEBPACK_IMPORTED_MODULE_3__["default"])().runChangeSubtitle();
(0,_week__WEBPACK_IMPORTED_MODULE_4__["default"])().runChangeSubtitle();
(0,_project__WEBPACK_IMPORTED_MODULE_5__["default"])().runChangeSubtitle();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkJBQTZCLGlCQUFpQjtBQUM5QztBQUNBO0FBQ0EsbUNBQW1DLGlCQUFpQjtBQUNwRDtBQUNBO0FBQ0EsK0JBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0EsZ0NBQWdDLGlCQUFpQjtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixvREFBTztBQUNwQztBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBLElBQUksb0RBQU87QUFDWDs7QUFFQTtBQUNBLElBQUksb0RBQU87QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLG9EQUFPO0FBQ2IsS0FBSzs7QUFFTCxJQUFJLG9EQUFPO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVELGlFQUFlLFFBQVEsRUFBQzs7QUFFeEI7O0FBRUEsb0RBQU87QUFDUCxFQUFFLG9EQUFPO0FBQ1QsRUFBRSxvREFBTztBQUNULENBQUM7O0FBRUQsb0RBQU87QUFDUDtBQUNBLEVBQUUsb0RBQU87QUFDVCxFQUFFLG9EQUFPO0FBQ1QsQ0FBQzs7QUFFRCxrREFBSztBQUNMLGdEQUFHO0FBQ0gsaURBQUk7QUFDSixvREFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NsYXNzL1RvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvZGF5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy93ZWVrLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XG4gIHRpdGxlID0gJ0xlYXJuIHRvIGNvZGUuJztcbiAgZGVzY3JpcHRpb24gPSAnTGVhcm4gdG8gY29kZSBqYXZhc2NyaXB0LCByZWFjdCBhbmQgbm9kZS5qcy4nO1xuICBkdWVEYXRlID0gJzMwLzAzLzIwMjEnO1xuICBwcmlvcml0eSA9IGZhbHNlO1xuICBjb3VudGVyID0gMDtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb3VudGVyKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvdW50ZXIgPSBjb3VudGVyO1xuICB9XG59XG4iLCJpbXBvcnQgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXkoKSB7XG4gIGZ1bmN0aW9uIF9jaGFuZ2VTdWJ0aXRsZSgpIHtcbiAgICBnbG9iYWxzKCkuZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZ2xvYmFscygpLnN1YlRpdGxlLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJ1bkNoYW5nZVN1YnRpdGxlKCkge1xuICAgIF9jaGFuZ2VTdWJ0aXRsZSgpO1xuICB9XG5cbiAgcmV0dXJuIHsgcnVuQ2hhbmdlU3VidGl0bGUgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdsb2JhbHMoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgY29uc3QgdG9Eb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRvRG9JbnB1dCcpO1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG4gIGNvbnN0IHN1YlRpdGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Yi10aXRsZV9fZGl2Jyk7XG4gIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Jyk7XG4gIGNvbnN0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhci1kYXknKTtcbiAgY29uc3Qgd2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhci13ZWVrJyk7XG4gIGNvbnN0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVUb0RvJyk7XG4gIGNvbnN0IGdldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvSXRlbScpO1xuICBjb25zdCBmbGV4Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsZXgtY29udGFpbmVyJyk7XG4gIGNvbnN0IHJlbW92ZUFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmVBbGwnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbiAgY29uc3QgcmlnaHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWFyZWEnKTtcbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsJyk7XG4gIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Yi10aXRsZScpO1xuICBsZXQgdG9Eb0xpc3QgPSBbXTtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICAgIHRvRG9JbnB1dCxcbiAgICBwcm9qZWN0LFxuICAgIHN1YlRpdGxlRGl2LFxuICAgIGluYm94LFxuICAgIGRheSxcbiAgICB3ZWVrLFxuICAgIGNyZWF0ZUJ0bixcbiAgICBnZXRCdG4sXG4gICAgZmxleENvbnRhaW5lcixcbiAgICByZW1vdmVBbGwsXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICB0b0RvQ29udGFpbmVyLFxuICAgIHJpZ2h0QXJlYSxcbiAgICBhZGRUYXNrLFxuICAgIGNhbmNlbCxcbiAgICBzdWJUaXRsZSxcbiAgICB0b0RvTGlzdCxcbiAgICBjb3VudGVyLFxuICB9O1xufVxuIiwiaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5ib3goKSB7XG4gIGZ1bmN0aW9uIF9jaGFuZ2VTdWJ0aXRsZSgpIHtcbiAgICBnbG9iYWxzKCkuaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBnbG9iYWxzKCkuc3ViVGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuQ2hhbmdlU3VidGl0bGUoKSB7XG4gICAgX2NoYW5nZVN1YnRpdGxlKCk7XG4gIH1cblxuICByZXR1cm4geyBydW5DaGFuZ2VTdWJ0aXRsZSB9O1xufVxuIiwiaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdCgpIHtcbiAgbGV0IHByb2plY3RUaXRsZXMgPSBbXTtcblxuICBmdW5jdGlvbiBfY2hhbmdlU3VidGl0bGUoKSB7XG4gICAgZ2xvYmFscygpLmNvdW50ZXIrKztcbiAgICBnbG9iYWxzKCkucHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGdsb2JhbHMoKS5hZGRUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgZ2xvYmFscygpLnN1YlRpdGxlRGl2LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibmV3LXByb2plY3QgbmV3LXByb2plY3Qke1xuICAgICAgICBnbG9iYWxzKCkuY291bnRlclxuICAgICAgfVwiPlxuICAgICAgPGJyPjxpbnB1dCBjbGFzcz1cInByb2plY3QgcHJvamVjdCR7XG4gICAgICAgIGdsb2JhbHMoKS5jb3VudGVyXG4gICAgICB9XCIgdHlwZT1cInRleHRcIiBuYW1lPVwicHJvamVjdFwiIHBsYWNlaG9sZGVyPVwiUHJvamVjdCBuYW1lXCI+XG4gICAgICA8YnI+XG4gICAgICA8aDIgY2xhc3M9XCJhZGQtcHJvamVjdCBhZGQtcHJvamVjdCR7Z2xvYmFscygpLmNvdW50ZXJ9XCI+QWRkIHByb2plY3Q8L2gyPlxuICAgICAgPGgyIGNsYXNzPVwiY2FuY2VsLXByb2plY3QgY2FuY2VsLXByb2plY3Qke2dsb2JhbHMoKS5jb3VudGVyfVwiPkNhbmNlbDwvaDI+XG4gICAgICA8L2Rpdj5gO1xuXG4gICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5hZGQtcHJvamVjdCR7Z2xvYmFscygpLmNvdW50ZXJ9YFxuICAgICAgKTtcblxuICAgICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0JHtnbG9iYWxzKCkuY291bnRlcn1gKTtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgcHJvamVjdFRpdGxlcy5wdXNoKHByb2plY3QudmFsdWUpO1xuXG4gICAgICAgIHByb2plY3RUaXRsZXMuZm9yRWFjaCgodGl0bGUpID0+IHtcbiAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYDxoMiBjbGFzcz1cInN1YlRpdGxlIHN1YlRpdGxlJHtcbiAgICAgICAgICAgIGdsb2JhbHMoKS5jb3VudGVyXG4gICAgICAgICAgfVwiPiR7dGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXRhc2sgYWRkLXRhc2ske2dsb2JhbHMoKS5jb3VudGVyfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktcGx1cy1zcXVhcmUtZmlsbFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkZC10YXNrX19wYXJhZ3JhZ2hcIj5BZGQgdGFzazwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgICBnbG9iYWxzKCkucmlnaHRBcmVhLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgZ2xvYmFscygpLmFkZFRhc2sucmVtb3ZlKCk7XG4gICAgICAgICAgZ2xvYmFscygpLnN1YlRpdGxlRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJyk7XG5cbiAgICAgICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgYWRkVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICBnbG9iYWxzKCkudG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAvLyBkaXYuaW5uZXJIVE1MID0gYGA7XG5cbiAgICAgICAgICAvLyB0by1kbzogYWRkIGZ1bmNpdG9uYWxpdHkgdG8gdGhlIGFkZCB0YXNrIGJ1dHRvblxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmNhbmNlbC1wcm9qZWN0JHtnbG9iYWxzKCkuY291bnRlcn1gXG4gICAgICApO1xuXG4gICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIHRvLWRvOiByZXN0b3JlIHByZXZpb3VzIHN0YXRlIG9mIFByb2plY3RcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuQ2hhbmdlU3VidGl0bGUoKSB7XG4gICAgX2NoYW5nZVN1YnRpdGxlKCk7XG4gIH1cblxuICByZXR1cm4geyBydW5DaGFuZ2VTdWJ0aXRsZSwgcHJvamVjdFRpdGxlcyB9O1xufVxuIiwiaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2VlaygpIHtcbiAgZnVuY3Rpb24gX2NoYW5nZVN1YnRpdGxlKCkge1xuICAgIGdsb2JhbHMoKS53ZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZ2xvYmFscygpLnN1YlRpdGxlLnRleHRDb250ZW50ID0gJ1dlZWsnO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuQ2hhbmdlU3VidGl0bGUoKSB7XG4gICAgX2NoYW5nZVN1YnRpdGxlKCk7XG4gIH1cblxuICByZXR1cm4geyBydW5DaGFuZ2VTdWJ0aXRsZSB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMnO1xuaW1wb3J0IFRvRG8gZnJvbSAnLi9jbGFzcy9Ub0RvJztcbmltcG9ydCBpbmJveCBmcm9tICcuL2luYm94JztcbmltcG9ydCBkYXkgZnJvbSAnLi9kYXknO1xuaW1wb3J0IHdlZWsgZnJvbSAnLi93ZWVrJztcbmltcG9ydCBwcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IFRvRG9MaXN0ID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gIGZ1bmN0aW9uIF9jcmVhdGVUb0RvRm9ybSgpIHtcbiAgICBnbG9iYWxzKCkuY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZ2xvYmFscygpLnRvRG9JbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVUb0RvSXRlbSgpIHtcbiAgICBfY3JlYXRlVG9Eb0Zvcm0oKTtcbiAgICBnbG9iYWxzKCkuZ2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgdG9EbyA9IG5ldyBUb0RvKFxuICAgICAgICB0aXRsZS52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICAgIHByaW9yaXR5LnZhbHVlLFxuICAgICAgICBjb3VudGVyKytcbiAgICAgICk7XG5cbiAgICAgIGdsb2JhbHMoKS50b0RvTGlzdC5wdXNoKHRvRG8pO1xuICAgICAgX3NldERpc3BsYXlUb0RvKCk7XG4gICAgICBnbG9iYWxzKCkuYWRkVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zZXREaXNwbGF5VG9EbygpIHtcbiAgICBfY2xlYW5Ub0RvRGlzcGxheSgpO1xuICAgIF9wb3B1bGF0ZURpc3BsYXkoKTtcbiAgICBfcmVtb3ZlQnRuKCk7XG4gICAgX3JlbW92ZUFsbEJ0bigpO1xuICAgIF9tb2RpZnlUb0RvKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfcG9wdWxhdGVEaXNwbGF5KCkge1xuICAgIGdsb2JhbHMoKS50b0RvTGlzdC5mb3JFYWNoKCh0b0RvSXRlbSkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZmxleC1jaGlsZCcpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYGZsZXgtY2hpbGQke3RvRG9JdGVtLmNvdW50ZXJ9YCk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChgcmVtb3ZhYmxlJHt0b0RvSXRlbS5jb3VudGVyfWApO1xuICAgICAgZGl2LmlubmVySFRNTCArPSBgPHAgY2xhc3M9XCJ0aXRsZSB0aXRsZSR7XG4gICAgICAgIHRvRG9JdGVtLmNvdW50ZXJcbiAgICAgIH0gYm9sZFwiPlRpdGxlPC9wPjxwPiR7dG9Eb0l0ZW0udGl0bGV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb24ke1xuICAgICAgICAgICAgdG9Eb0l0ZW0uY291bnRlclxuICAgICAgICAgIH0gYm9sZFwiPkRlc2NyaXB0aW9uPC9wPjxwPiR7dG9Eb0l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZHVlRGF0ZSBkdWVEYXRlJHtcbiAgICAgICAgICAgIHRvRG9JdGVtLmNvdW50ZXJcbiAgICAgICAgICB9IGJvbGRcIj5EdWUgRGF0ZTwvcD48cD4ke3BhcnNlSW50KHRvRG9JdGVtLmR1ZURhdGUpfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInByaW9yaXR5IHByaW9yaXR5JHt0b0RvSXRlbS5jb3VudGVyfSBib2xkXCI+UHJpb3JpdHk8L3A+PHA+JHtcbiAgICAgICAgdG9Eb0l0ZW0ucHJpb3JpdHlcbiAgICAgIH08L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGlmeSBtb2RpZnkke3RvRG9JdGVtLmNvdW50ZXJ9XCI+TW9kaWZ5PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZSByZW1vdmUke3RvRG9JdGVtLmNvdW50ZXJ9XCI+UmVtb3ZlPC9idXR0b24+YDtcblxuICAgICAgZ2xvYmFscygpLmZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9tb2RpZnlUb0RvKCkge1xuICAgIGNvbnN0IHRvTW9kaWZ5RXZlbnR1YWxseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RpZnknKTtcbiAgICBjb25zdCB0b01vZGlmeSA9IFsuLi50b01vZGlmeUV2ZW50dWFsbHldO1xuXG4gICAgdG9Nb2RpZnkuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IHRvRG9JdGVtIG9mIGdsb2JhbHMoKS50b0RvTGlzdCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdG9Eb0l0ZW0gIT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtb2RpZnlJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5tb2RpZnkke3RvRG9JdGVtLmNvdW50ZXJ9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChidG4gPT0gbW9kaWZ5SXRlbSkge1xuICAgICAgICAgICAgICBjb25zdCBmbGV4Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGAuZmxleC1jaGlsZCR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYC5tb2RpZnlGb3JtJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBpZiAoZm9ybURpdikge1xuICAgICAgICAgICAgICAgIGZvcm1EaXYuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21vZGlmeUZvcm0nKTtcbiAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYG1vZGlmeUZvcm0ke3RvRG9JdGVtLmNvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBgPGZvcm0+XG4gICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZSR7dG9Eb0l0ZW0uY291bnRlcn1cIiBwbGFjZWhvbGRlcj1cInRpdGxlXCI+XG4gICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbiR7dG9Eb0l0ZW0uY291bnRlcn1cIiBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZURhdGVcIiBpZD1cImR1ZURhdGUke3RvRG9JdGVtLmNvdW50ZXJ9XCIgcGxhY2Vob2xkZXI9XCJkdWUgRGF0ZVwiPlxuICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcmlvcml0eVwiIGlkPVwicHJpb3JpdHkke3RvRG9JdGVtLmNvdW50ZXJ9XCIgcGxhY2Vob2xkZXI9XCJwcmlvcml0eVwiPlxuICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1cGRhdGUgdG9Eb0l0ZW0ke3RvRG9JdGVtLmNvdW50ZXJ9XCI+VXBkYXRlIFRvRG8gaXRlbTwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5gO1xuXG4gICAgICAgICAgICAgIGZsZXhDaGlsZC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudXBkYXRlJyk7XG4gICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUJ0bnNBcnJheSA9IFsuLi51cGRhdGVCdG5zXTtcblxuICAgICAgICAgICAgICB1cGRhdGVCdG5zQXJyYXkuZm9yRWFjaCgodXBkYXRlQnRuKSA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYCN0aXRsZSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgI2Rlc2NyaXB0aW9uJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYCNkdWVEYXRlJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGAjcHJpb3JpdHkke3RvRG9JdGVtLmNvdW50ZXJ9YFxuICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgdG9Eb0l0ZW0udGl0bGUgPSB0aXRsZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIHRvRG9JdGVtLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgICAgICAgICAgICB0b0RvSXRlbS5kdWVEYXRlID0gZHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIHRvRG9JdGVtLnByaW9yaXR5ID0gcHJpb3JpdHkudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGAudGl0bGUke3RvRG9JdGVtLmNvdW50ZXJ9YFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGAuZGVzY3JpcHRpb24ke3RvRG9JdGVtLmNvdW50ZXJ9YFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYC5kdWVEYXRlJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgLnByaW9yaXR5JHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgIHBUaXRsZS50ZXh0Q29udGVudCA9IHRvRG9JdGVtLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgcERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9Eb0l0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICBwRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvRG9JdGVtLmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgICBwUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b0RvSXRlbS5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGAubW9kaWZ5Rm9ybSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcblxuICAgICAgICAgICAgICAgICAgaXNNb2RpZmllZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfcmVtb3ZlQnRuKCkge1xuICAgIGNvbnN0IHRvUmVtb3ZlRXZlbnR1YWxseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKTtcbiAgICBjb25zdCB0b1JlbW92ZUFycmF5ID0gWy4uLnRvUmVtb3ZlRXZlbnR1YWxseV07XG5cbiAgICB0b1JlbW92ZUFycmF5LmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCB0b0RvSXRlbSBvZiBnbG9iYWxzKCkudG9Eb0xpc3QpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRvRG9JdGVtICE9ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAucmVtb3ZlJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoYnRuID09IHJlbW92ZUl0ZW0pIHtcbiAgICAgICAgICAgICAgY29uc3QgZmxleENoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgLmZsZXgtY2hpbGQke3RvRG9JdGVtLmNvdW50ZXJ9YFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBmbGV4Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIGRlbGV0ZSBnbG9iYWxzKCkudG9Eb0xpc3RbdG9Eb0l0ZW0uY291bnRlcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jbGVhblRvRG9EaXNwbGF5KCkge1xuICAgIGdsb2JhbHMoKS5mbGV4Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgZnVuY3Rpb24gX3JlbW92ZUFsbEJ0bigpIHtcbiAgICBnbG9iYWxzKCkucmVtb3ZlQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3JlbW92ZVRvRG9JdGVtcyk7XG4gIH1cblxuICBmdW5jdGlvbiBfcmVtb3ZlVG9Eb0l0ZW1zKCkge1xuICAgIGNvbnN0IGZsZXhDaGlsZEFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbGV4LWNoaWxkJyk7XG4gICAgY29uc3QgZmxleENoaWxkQXJyYXkgPSBbLi4uZmxleENoaWxkQWxsXTtcblxuICAgIGZsZXhDaGlsZEFycmF5LmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgZ2xvYmFscygpLmZsZXhDb250YWluZXIucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICB9KTtcblxuICAgIGdsb2JhbHMoKS50b0RvTGlzdCA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVG9Eb0l0ZW0oKSB7XG4gICAgcmV0dXJuIF9jcmVhdGVUb0RvSXRlbSgpO1xuICB9XG5cbiAgcmV0dXJuIHsgY3JlYXRlVG9Eb0l0ZW0gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG9MaXN0O1xuXG5Ub0RvTGlzdC5jcmVhdGVUb0RvSXRlbSgpO1xuXG5nbG9iYWxzKCkuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZ2xvYmFscygpLnRvRG9Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIGdsb2JhbHMoKS5hZGRUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cbmdsb2JhbHMoKS5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGdsb2JhbHMoKS50b0RvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICBnbG9iYWxzKCkuYWRkVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn0pO1xuXG5pbmJveCgpLnJ1bkNoYW5nZVN1YnRpdGxlKCk7XG5kYXkoKS5ydW5DaGFuZ2VTdWJ0aXRsZSgpO1xud2VlaygpLnJ1bkNoYW5nZVN1YnRpdGxlKCk7XG5wcm9qZWN0KCkucnVuQ2hhbmdlU3VidGl0bGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==