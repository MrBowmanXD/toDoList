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
      <button class="add-project add-project${
        (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().counter
      }">Add project</button>
      <button class="cancel-project cancel-project${
        (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().counter
      }">Cancel</button>
      </div>`;

      const addProjectBtn = document.querySelector(
        `.add-project${(0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().counter}`
      );

      addProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const project = document.querySelector(`.project${(0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().counter}`);
        const div = document.createElement('div');

        div.innerHTML = `<h2 class="subTitle">${project.value}</h2>
        <div class="add-task">
                            <i class="bi bi-plus-square-fill"></i>
                            <p class="add-task__paragragh">Add task</p>
                        </div>`;
        (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().rightArea.appendChild(div);
        (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().addTask.remove();
        const addTask = document.querySelector('.add-task');
        (0,_globals__WEBPACK_IMPORTED_MODULE_0__["default"])().subTitleDiv.classList.toggle('hidden');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNuRDtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLG9EQUFPO0FBQ3BDO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpQkFBaUI7QUFDL0M7QUFDQTtBQUNBLHFCQUFxQixvREFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSxvREFBTztBQUNYOztBQUVBO0FBQ0EsSUFBSSxvREFBTztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sb0RBQU87QUFDYixLQUFLOztBQUVMLElBQUksb0RBQU87QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQ7O0FBRUEsb0RBQU87QUFDUCxFQUFFLG9EQUFPO0FBQ1QsRUFBRSxvREFBTztBQUNULENBQUM7O0FBRUQsb0RBQU87QUFDUDtBQUNBLEVBQUUsb0RBQU87QUFDVCxFQUFFLG9EQUFPO0FBQ1QsQ0FBQzs7QUFFRCxrREFBSztBQUNMLGdEQUFHO0FBQ0gsaURBQUk7QUFDSixvREFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NsYXNzL1RvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvZGF5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy93ZWVrLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XG4gIHRpdGxlID0gJ0xlYXJuIHRvIGNvZGUuJztcbiAgZGVzY3JpcHRpb24gPSAnTGVhcm4gdG8gY29kZSBqYXZhc2NyaXB0LCByZWFjdCBhbmQgbm9kZS5qcy4nO1xuICBkdWVEYXRlID0gJzMwLzAzLzIwMjEnO1xuICBwcmlvcml0eSA9IGZhbHNlO1xuICBjb3VudGVyID0gMDtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb3VudGVyKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvdW50ZXIgPSBjb3VudGVyO1xuICB9XG59XG4iLCJpbXBvcnQgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXkoKSB7XG4gIGZ1bmN0aW9uIF9jaGFuZ2VTdWJ0aXRsZSgpIHtcbiAgICBnbG9iYWxzKCkuZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZ2xvYmFscygpLnN1YlRpdGxlLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJ1bkNoYW5nZVN1YnRpdGxlKCkge1xuICAgIF9jaGFuZ2VTdWJ0aXRsZSgpO1xuICB9XG5cbiAgcmV0dXJuIHsgcnVuQ2hhbmdlU3VidGl0bGUgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdsb2JhbHMoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgY29uc3QgdG9Eb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRvRG9JbnB1dCcpO1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG4gIGNvbnN0IHN1YlRpdGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Yi10aXRsZV9fZGl2Jyk7XG4gIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Jyk7XG4gIGNvbnN0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhci1kYXknKTtcbiAgY29uc3Qgd2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhci13ZWVrJyk7XG4gIGNvbnN0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVUb0RvJyk7XG4gIGNvbnN0IGdldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvSXRlbScpO1xuICBjb25zdCBmbGV4Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsZXgtY29udGFpbmVyJyk7XG4gIGNvbnN0IHJlbW92ZUFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmVBbGwnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbiAgY29uc3QgcmlnaHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWFyZWEnKTtcbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsJyk7XG4gIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Yi10aXRsZScpO1xuICBsZXQgdG9Eb0xpc3QgPSBbXTtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICAgIHRvRG9JbnB1dCxcbiAgICBwcm9qZWN0LFxuICAgIHN1YlRpdGxlRGl2LFxuICAgIGluYm94LFxuICAgIGRheSxcbiAgICB3ZWVrLFxuICAgIGNyZWF0ZUJ0bixcbiAgICBnZXRCdG4sXG4gICAgZmxleENvbnRhaW5lcixcbiAgICByZW1vdmVBbGwsXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICB0b0RvQ29udGFpbmVyLFxuICAgIHJpZ2h0QXJlYSxcbiAgICBhZGRUYXNrLFxuICAgIGNhbmNlbCxcbiAgICBzdWJUaXRsZSxcbiAgICB0b0RvTGlzdCxcbiAgICBjb3VudGVyLFxuICB9O1xufVxuIiwiaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5ib3goKSB7XG4gIGZ1bmN0aW9uIF9jaGFuZ2VTdWJ0aXRsZSgpIHtcbiAgICBnbG9iYWxzKCkuaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBnbG9iYWxzKCkuc3ViVGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuQ2hhbmdlU3VidGl0bGUoKSB7XG4gICAgX2NoYW5nZVN1YnRpdGxlKCk7XG4gIH1cblxuICByZXR1cm4geyBydW5DaGFuZ2VTdWJ0aXRsZSB9O1xufVxuIiwiaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdCgpIHtcbiAgZnVuY3Rpb24gX2NoYW5nZVN1YnRpdGxlKCkge1xuICAgIGdsb2JhbHMoKS5jb3VudGVyKys7XG4gICAgZ2xvYmFscygpLnByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBnbG9iYWxzKCkuYWRkVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgIGdsb2JhbHMoKS5zdWJUaXRsZURpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm5ldy1wcm9qZWN0IG5ldy1wcm9qZWN0JHtcbiAgICAgICAgZ2xvYmFscygpLmNvdW50ZXJcbiAgICAgIH1cIj5cbiAgICAgIDxicj48aW5wdXQgY2xhc3M9XCJwcm9qZWN0IHByb2plY3Qke1xuICAgICAgICBnbG9iYWxzKCkuY291bnRlclxuICAgICAgfVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb2plY3RcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgbmFtZVwiPlxuICAgICAgPGJyPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC1wcm9qZWN0IGFkZC1wcm9qZWN0JHtcbiAgICAgICAgZ2xvYmFscygpLmNvdW50ZXJcbiAgICAgIH1cIj5BZGQgcHJvamVjdDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC1wcm9qZWN0IGNhbmNlbC1wcm9qZWN0JHtcbiAgICAgICAgZ2xvYmFscygpLmNvdW50ZXJcbiAgICAgIH1cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgIDwvZGl2PmA7XG5cbiAgICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmFkZC1wcm9qZWN0JHtnbG9iYWxzKCkuY291bnRlcn1gXG4gICAgICApO1xuXG4gICAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3Qke2dsb2JhbHMoKS5jb3VudGVyfWApO1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYDxoMiBjbGFzcz1cInN1YlRpdGxlXCI+JHtwcm9qZWN0LnZhbHVlfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtdGFza1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktcGx1cy1zcXVhcmUtZmlsbFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkZC10YXNrX19wYXJhZ3JhZ2hcIj5BZGQgdGFzazwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgIGdsb2JhbHMoKS5yaWdodEFyZWEuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgZ2xvYmFscygpLmFkZFRhc2sucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbiAgICAgICAgZ2xvYmFscygpLnN1YlRpdGxlRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuXG4gICAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIGFkZFRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgLy8gdG8tZG86IGFkZCBmdW5jaXRvbmFsaXR5IHRvIHRoZSBhZGQgdGFzayBidXR0b25cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJ1bkNoYW5nZVN1YnRpdGxlKCkge1xuICAgIF9jaGFuZ2VTdWJ0aXRsZSgpO1xuICB9XG5cbiAgcmV0dXJuIHsgcnVuQ2hhbmdlU3VidGl0bGUgfTtcbn1cbiIsImltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdlZWsoKSB7XG4gIGZ1bmN0aW9uIF9jaGFuZ2VTdWJ0aXRsZSgpIHtcbiAgICBnbG9iYWxzKCkud2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGdsb2JhbHMoKS5zdWJUaXRsZS50ZXh0Q29udGVudCA9ICdXZWVrJztcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJ1bkNoYW5nZVN1YnRpdGxlKCkge1xuICAgIF9jaGFuZ2VTdWJ0aXRsZSgpO1xuICB9XG5cbiAgcmV0dXJuIHsgcnVuQ2hhbmdlU3VidGl0bGUgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcbmltcG9ydCBUb0RvIGZyb20gJy4vY2xhc3MvVG9Ebyc7XG5pbXBvcnQgaW5ib3ggZnJvbSAnLi9pbmJveCc7XG5pbXBvcnQgZGF5IGZyb20gJy4vZGF5JztcbmltcG9ydCB3ZWVrIGZyb20gJy4vd2Vlayc7XG5pbXBvcnQgcHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCBUb0RvTGlzdCA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBjb3VudGVyID0gMDtcblxuICBmdW5jdGlvbiBfY3JlYXRlVG9Eb0Zvcm0oKSB7XG4gICAgZ2xvYmFscygpLmNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGdsb2JhbHMoKS50b0RvSW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlVG9Eb0l0ZW0oKSB7XG4gICAgX2NyZWF0ZVRvRG9Gb3JtKCk7XG4gICAgZ2xvYmFscygpLmdldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHRvRG8gPSBuZXcgVG9EbyhcbiAgICAgICAgdGl0bGUudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICBkdWVEYXRlLnZhbHVlLFxuICAgICAgICBwcmlvcml0eS52YWx1ZSxcbiAgICAgICAgY291bnRlcisrXG4gICAgICApO1xuXG4gICAgICBnbG9iYWxzKCkudG9Eb0xpc3QucHVzaCh0b0RvKTtcbiAgICAgIF9zZXREaXNwbGF5VG9EbygpO1xuICAgICAgZ2xvYmFscygpLmFkZFRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfc2V0RGlzcGxheVRvRG8oKSB7XG4gICAgX2NsZWFuVG9Eb0Rpc3BsYXkoKTtcbiAgICBfcG9wdWxhdGVEaXNwbGF5KCk7XG4gICAgX3JlbW92ZUJ0bigpO1xuICAgIF9yZW1vdmVBbGxCdG4oKTtcbiAgICBfbW9kaWZ5VG9EbygpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3BvcHVsYXRlRGlzcGxheSgpIHtcbiAgICBnbG9iYWxzKCkudG9Eb0xpc3QuZm9yRWFjaCgodG9Eb0l0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY2hpbGQnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGBmbGV4LWNoaWxkJHt0b0RvSXRlbS5jb3VudGVyfWApO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYHJlbW92YWJsZSR7dG9Eb0l0ZW0uY291bnRlcn1gKTtcbiAgICAgIGRpdi5pbm5lckhUTUwgKz0gYDxwIGNsYXNzPVwidGl0bGUgdGl0bGUke1xuICAgICAgICB0b0RvSXRlbS5jb3VudGVyXG4gICAgICB9IGJvbGRcIj5UaXRsZTwvcD48cD4ke3RvRG9JdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uJHtcbiAgICAgICAgICAgIHRvRG9JdGVtLmNvdW50ZXJcbiAgICAgICAgICB9IGJvbGRcIj5EZXNjcmlwdGlvbjwvcD48cD4ke3RvRG9JdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImR1ZURhdGUgZHVlRGF0ZSR7XG4gICAgICAgICAgICB0b0RvSXRlbS5jb3VudGVyXG4gICAgICAgICAgfSBib2xkXCI+RHVlIERhdGU8L3A+PHA+JHtwYXJzZUludCh0b0RvSXRlbS5kdWVEYXRlKX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJwcmlvcml0eSBwcmlvcml0eSR7dG9Eb0l0ZW0uY291bnRlcn0gYm9sZFwiPlByaW9yaXR5PC9wPjxwPiR7XG4gICAgICAgIHRvRG9JdGVtLnByaW9yaXR5XG4gICAgICB9PC9wPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RpZnkgbW9kaWZ5JHt0b0RvSXRlbS5jb3VudGVyfVwiPk1vZGlmeTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmUgcmVtb3ZlJHt0b0RvSXRlbS5jb3VudGVyfVwiPlJlbW92ZTwvYnV0dG9uPmA7XG5cbiAgICAgIGdsb2JhbHMoKS5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfbW9kaWZ5VG9EbygpIHtcbiAgICBjb25zdCB0b01vZGlmeUV2ZW50dWFsbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kaWZ5Jyk7XG4gICAgY29uc3QgdG9Nb2RpZnkgPSBbLi4udG9Nb2RpZnlFdmVudHVhbGx5XTtcblxuICAgIHRvTW9kaWZ5LmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCB0b0RvSXRlbSBvZiBnbG9iYWxzKCkudG9Eb0xpc3QpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRvRG9JdGVtICE9ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbW9kaWZ5SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAubW9kaWZ5JHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoYnRuID09IG1vZGlmeUl0ZW0pIHtcbiAgICAgICAgICAgICAgY29uc3QgZmxleENoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgLmZsZXgtY2hpbGQke3RvRG9JdGVtLmNvdW50ZXJ9YFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGAubW9kaWZ5Rm9ybSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgaWYgKGZvcm1EaXYpIHtcbiAgICAgICAgICAgICAgICBmb3JtRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtb2RpZnlGb3JtJyk7XG4gICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGBtb2RpZnlGb3JtJHt0b0RvSXRlbS5jb3VudGVyfWApO1xuICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYDxmb3JtPlxuICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGUke3RvRG9JdGVtLmNvdW50ZXJ9XCIgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24ke3RvRG9JdGVtLmNvdW50ZXJ9XCIgcGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCIgaWQ9XCJkdWVEYXRlJHt0b0RvSXRlbS5jb3VudGVyfVwiIHBsYWNlaG9sZGVyPVwiZHVlIERhdGVcIj5cbiAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5JHt0b0RvSXRlbS5jb3VudGVyfVwiIHBsYWNlaG9sZGVyPVwicHJpb3JpdHlcIj5cbiAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidXBkYXRlIHRvRG9JdGVtJHt0b0RvSXRlbS5jb3VudGVyfVwiPlVwZGF0ZSBUb0RvIGl0ZW08L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+YDtcblxuICAgICAgICAgICAgICBmbGV4Q2hpbGQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICAgICAgICBjb25zdCB1cGRhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVwZGF0ZScpO1xuICAgICAgICAgICAgICBjb25zdCB1cGRhdGVCdG5zQXJyYXkgPSBbLi4udXBkYXRlQnRuc107XG5cbiAgICAgICAgICAgICAgdXBkYXRlQnRuc0FycmF5LmZvckVhY2goKHVwZGF0ZUJ0bikgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGAjdGl0bGUke3RvRG9JdGVtLmNvdW50ZXJ9YFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYCNkZXNjcmlwdGlvbiR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGAjZHVlRGF0ZSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgI3ByaW9yaXR5JHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgIHRvRG9JdGVtLnRpdGxlID0gdGl0bGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICB0b0RvSXRlbS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgdG9Eb0l0ZW0uZHVlRGF0ZSA9IGR1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICB0b0RvSXRlbS5wcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCBwVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgLnRpdGxlJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgLmRlc2NyaXB0aW9uJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGAuZHVlRGF0ZSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgY29uc3QgcFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYC5wcmlvcml0eSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICBwVGl0bGUudGV4dENvbnRlbnQgPSB0b0RvSXRlbS50aXRsZTtcbiAgICAgICAgICAgICAgICAgIHBEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvRG9JdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgcER1ZURhdGUudGV4dENvbnRlbnQgPSB0b0RvSXRlbS5kdWVEYXRlO1xuICAgICAgICAgICAgICAgICAgcFByaW9yaXR5LnRleHRDb250ZW50ID0gdG9Eb0l0ZW0ucHJpb3JpdHk7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgLm1vZGlmeUZvcm0ke3RvRG9JdGVtLmNvdW50ZXJ9YFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgICAgICAgICAgIGlzTW9kaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX3JlbW92ZUJ0bigpIHtcbiAgICBjb25zdCB0b1JlbW92ZUV2ZW50dWFsbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJyk7XG4gICAgY29uc3QgdG9SZW1vdmVBcnJheSA9IFsuLi50b1JlbW92ZUV2ZW50dWFsbHldO1xuXG4gICAgdG9SZW1vdmVBcnJheS5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgdG9Eb0l0ZW0gb2YgZ2xvYmFscygpLnRvRG9MaXN0KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0b0RvSXRlbSAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLnJlbW92ZSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGJ0biA9PSByZW1vdmVJdGVtKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZsZXhDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYC5mbGV4LWNoaWxkJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZmxleENoaWxkLnJlbW92ZSgpO1xuICAgICAgICAgICAgICBkZWxldGUgZ2xvYmFscygpLnRvRG9MaXN0W3RvRG9JdGVtLmNvdW50ZXJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfY2xlYW5Ub0RvRGlzcGxheSgpIHtcbiAgICBnbG9iYWxzKCkuZmxleENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZW1vdmVBbGxCdG4oKSB7XG4gICAgZ2xvYmFscygpLnJlbW92ZUFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9yZW1vdmVUb0RvSXRlbXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3JlbW92ZVRvRG9JdGVtcygpIHtcbiAgICBjb25zdCBmbGV4Q2hpbGRBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxleC1jaGlsZCcpO1xuICAgIGNvbnN0IGZsZXhDaGlsZEFycmF5ID0gWy4uLmZsZXhDaGlsZEFsbF07XG5cbiAgICBmbGV4Q2hpbGRBcnJheS5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgIGdsb2JhbHMoKS5mbGV4Q29udGFpbmVyLnJlbW92ZUNoaWxkKGRpdik7XG4gICAgfSk7XG5cbiAgICBnbG9iYWxzKCkudG9Eb0xpc3QgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVRvRG9JdGVtKCkge1xuICAgIHJldHVybiBfY3JlYXRlVG9Eb0l0ZW0oKTtcbiAgfVxuXG4gIHJldHVybiB7IGNyZWF0ZVRvRG9JdGVtIH07XG59KSgpO1xuXG5Ub0RvTGlzdC5jcmVhdGVUb0RvSXRlbSgpO1xuXG5nbG9iYWxzKCkuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZ2xvYmFscygpLnRvRG9Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIGdsb2JhbHMoKS5hZGRUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cbmdsb2JhbHMoKS5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGdsb2JhbHMoKS50b0RvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICBnbG9iYWxzKCkuYWRkVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn0pO1xuXG5pbmJveCgpLnJ1bkNoYW5nZVN1YnRpdGxlKCk7XG5kYXkoKS5ydW5DaGFuZ2VTdWJ0aXRsZSgpO1xud2VlaygpLnJ1bkNoYW5nZVN1YnRpdGxlKCk7XG5wcm9qZWN0KCkucnVuQ2hhbmdlU3VidGl0bGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==