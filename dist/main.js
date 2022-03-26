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
  const createBtn = document.querySelector('.createToDo');
  const getBtn = document.querySelector('.toDoItem');
  const flexContainer = document.querySelector('.flex-container');
  const removeAll = document.querySelector('.removeAll');
  const title = document.querySelector('#title');
  const description = document.querySelector('#description');
  const dueDate = document.querySelector('#dueDate');
  const priority = document.querySelector('#priority');
  const toDoContainer = document.querySelector('.todo-container');
  const addTask = document.querySelector('.add-task');
  const cancel = document.querySelector('.cancel');
  let toDoList = [];

  return {
    container,
    toDoInput,
    createBtn,
    getBtn,
    flexContainer,
    removeAll,
    title,
    description,
    dueDate,
    priority,
    toDoContainer,
    addTask,
    cancel,
    toDoList,
  };
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixvREFBTztBQUNwQztBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBLElBQUksb0RBQU87QUFDWDs7QUFFQTtBQUNBLElBQUksb0RBQU87QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLG9EQUFPO0FBQ2IsS0FBSzs7QUFFTCxJQUFJLG9EQUFPO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVEOztBQUVBLG9EQUFPO0FBQ1AsRUFBRSxvREFBTztBQUNULEVBQUUsb0RBQU87QUFDVCxDQUFDOztBQUVELG9EQUFPO0FBQ1A7QUFDQSxFQUFFLG9EQUFPO0FBQ1QsRUFBRSxvREFBTztBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jbGFzcy9Ub0RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvIHtcbiAgdGl0bGUgPSAnTGVhcm4gdG8gY29kZS4nO1xuICBkZXNjcmlwdGlvbiA9ICdMZWFybiB0byBjb2RlIGphdmFzY3JpcHQsIHJlYWN0IGFuZCBub2RlLmpzLic7XG4gIGR1ZURhdGUgPSAnMzAvMDMvMjAyMSc7XG4gIHByaW9yaXR5ID0gZmFsc2U7XG4gIGNvdW50ZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvdW50ZXIpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY291bnRlciA9IGNvdW50ZXI7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdsb2JhbHMoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgY29uc3QgdG9Eb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRvRG9JbnB1dCcpO1xuICBjb25zdCBjcmVhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlVG9EbycpO1xuICBjb25zdCBnZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb0l0ZW0nKTtcbiAgY29uc3QgZmxleENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGV4LWNvbnRhaW5lcicpO1xuICBjb25zdCByZW1vdmVBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlQWxsJyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XG4gIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbiAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xuICBsZXQgdG9Eb0xpc3QgPSBbXTtcblxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICB0b0RvSW5wdXQsXG4gICAgY3JlYXRlQnRuLFxuICAgIGdldEJ0bixcbiAgICBmbGV4Q29udGFpbmVyLFxuICAgIHJlbW92ZUFsbCxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIHRvRG9Db250YWluZXIsXG4gICAgYWRkVGFzayxcbiAgICBjYW5jZWwsXG4gICAgdG9Eb0xpc3QsXG4gIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscyc7XG5pbXBvcnQgVG9EbyBmcm9tICcuL2NsYXNzL1RvRG8nO1xuXG5jb25zdCBUb0RvTGlzdCA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBjb3VudGVyID0gMDtcblxuICBmdW5jdGlvbiBfY3JlYXRlVG9Eb0Zvcm0oKSB7XG4gICAgZ2xvYmFscygpLmNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGdsb2JhbHMoKS50b0RvSW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlVG9Eb0l0ZW0oKSB7XG4gICAgX2NyZWF0ZVRvRG9Gb3JtKCk7XG4gICAgZ2xvYmFscygpLmdldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHRvRG8gPSBuZXcgVG9EbyhcbiAgICAgICAgdGl0bGUudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICBkdWVEYXRlLnZhbHVlLFxuICAgICAgICBwcmlvcml0eS52YWx1ZSxcbiAgICAgICAgY291bnRlcisrXG4gICAgICApO1xuXG4gICAgICBnbG9iYWxzKCkudG9Eb0xpc3QucHVzaCh0b0RvKTtcbiAgICAgIF9zZXREaXNwbGF5VG9EbygpO1xuICAgICAgZ2xvYmFscygpLmFkZFRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfc2V0RGlzcGxheVRvRG8oKSB7XG4gICAgX2NsZWFuVG9Eb0Rpc3BsYXkoKTtcbiAgICBfcG9wdWxhdGVEaXNwbGF5KCk7XG4gICAgX3JlbW92ZUJ0bigpO1xuICAgIF9yZW1vdmVBbGxCdG4oKTtcbiAgICBfbW9kaWZ5VG9EbygpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3BvcHVsYXRlRGlzcGxheSgpIHtcbiAgICBnbG9iYWxzKCkudG9Eb0xpc3QuZm9yRWFjaCgodG9Eb0l0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY2hpbGQnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGBmbGV4LWNoaWxkJHt0b0RvSXRlbS5jb3VudGVyfWApO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYHJlbW92YWJsZSR7dG9Eb0l0ZW0uY291bnRlcn1gKTtcbiAgICAgIGRpdi5pbm5lckhUTUwgKz0gYDxwIGNsYXNzPVwidGl0bGUgdGl0bGUke1xuICAgICAgICB0b0RvSXRlbS5jb3VudGVyXG4gICAgICB9IGJvbGRcIj5UaXRsZTwvcD48cD4ke3RvRG9JdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uJHtcbiAgICAgICAgICAgIHRvRG9JdGVtLmNvdW50ZXJcbiAgICAgICAgICB9IGJvbGRcIj5EZXNjcmlwdGlvbjwvcD48cD4ke3RvRG9JdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImR1ZURhdGUgZHVlRGF0ZSR7XG4gICAgICAgICAgICB0b0RvSXRlbS5jb3VudGVyXG4gICAgICAgICAgfSBib2xkXCI+RHVlIERhdGU8L3A+PHA+JHtwYXJzZUludCh0b0RvSXRlbS5kdWVEYXRlKX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJwcmlvcml0eSBwcmlvcml0eSR7dG9Eb0l0ZW0uY291bnRlcn0gYm9sZFwiPlByaW9yaXR5PC9wPjxwPiR7XG4gICAgICAgIHRvRG9JdGVtLnByaW9yaXR5XG4gICAgICB9PC9wPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RpZnkgbW9kaWZ5JHt0b0RvSXRlbS5jb3VudGVyfVwiPk1vZGlmeTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmUgcmVtb3ZlJHt0b0RvSXRlbS5jb3VudGVyfVwiPlJlbW92ZTwvYnV0dG9uPmA7XG5cbiAgICAgIGdsb2JhbHMoKS5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfbW9kaWZ5VG9EbygpIHtcbiAgICBjb25zdCB0b01vZGlmeUV2ZW50dWFsbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kaWZ5Jyk7XG4gICAgY29uc3QgdG9Nb2RpZnkgPSBbLi4udG9Nb2RpZnlFdmVudHVhbGx5XTtcblxuICAgIHRvTW9kaWZ5LmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCB0b0RvSXRlbSBvZiBnbG9iYWxzKCkudG9Eb0xpc3QpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRvRG9JdGVtICE9ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbW9kaWZ5SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAubW9kaWZ5JHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoYnRuID09IG1vZGlmeUl0ZW0pIHtcbiAgICAgICAgICAgICAgY29uc3QgZmxleENoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgLmZsZXgtY2hpbGQke3RvRG9JdGVtLmNvdW50ZXJ9YFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGAubW9kaWZ5Rm9ybSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgaWYgKGZvcm1EaXYpIHtcbiAgICAgICAgICAgICAgICBmb3JtRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtb2RpZnlGb3JtJyk7XG4gICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGBtb2RpZnlGb3JtJHt0b0RvSXRlbS5jb3VudGVyfWApO1xuICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYDxmb3JtPlxuICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGUke3RvRG9JdGVtLmNvdW50ZXJ9XCIgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24ke3RvRG9JdGVtLmNvdW50ZXJ9XCIgcGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCIgaWQ9XCJkdWVEYXRlJHt0b0RvSXRlbS5jb3VudGVyfVwiIHBsYWNlaG9sZGVyPVwiZHVlIERhdGVcIj5cbiAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5JHt0b0RvSXRlbS5jb3VudGVyfVwiIHBsYWNlaG9sZGVyPVwicHJpb3JpdHlcIj5cbiAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidXBkYXRlIHRvRG9JdGVtJHt0b0RvSXRlbS5jb3VudGVyfVwiPlVwZGF0ZSBUb0RvIGl0ZW08L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+YDtcblxuICAgICAgICAgICAgICBmbGV4Q2hpbGQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICAgICAgICBjb25zdCB1cGRhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVwZGF0ZScpO1xuICAgICAgICAgICAgICBjb25zdCB1cGRhdGVCdG5zQXJyYXkgPSBbLi4udXBkYXRlQnRuc107XG5cbiAgICAgICAgICAgICAgdXBkYXRlQnRuc0FycmF5LmZvckVhY2goKHVwZGF0ZUJ0bikgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGAjdGl0bGUke3RvRG9JdGVtLmNvdW50ZXJ9YFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYCNkZXNjcmlwdGlvbiR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGAjZHVlRGF0ZSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgI3ByaW9yaXR5JHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgIHRvRG9JdGVtLnRpdGxlID0gdGl0bGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICB0b0RvSXRlbS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgdG9Eb0l0ZW0uZHVlRGF0ZSA9IGR1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICB0b0RvSXRlbS5wcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCBwVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgLnRpdGxlJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgLmRlc2NyaXB0aW9uJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGAuZHVlRGF0ZSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgY29uc3QgcFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYC5wcmlvcml0eSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICBwVGl0bGUudGV4dENvbnRlbnQgPSB0b0RvSXRlbS50aXRsZTtcbiAgICAgICAgICAgICAgICAgIHBEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvRG9JdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgcER1ZURhdGUudGV4dENvbnRlbnQgPSB0b0RvSXRlbS5kdWVEYXRlO1xuICAgICAgICAgICAgICAgICAgcFByaW9yaXR5LnRleHRDb250ZW50ID0gdG9Eb0l0ZW0ucHJpb3JpdHk7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgLm1vZGlmeUZvcm0ke3RvRG9JdGVtLmNvdW50ZXJ9YFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgICAgICAgICAgIGlzTW9kaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX3JlbW92ZUJ0bigpIHtcbiAgICBjb25zdCB0b1JlbW92ZUV2ZW50dWFsbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJyk7XG4gICAgY29uc3QgdG9SZW1vdmVBcnJheSA9IFsuLi50b1JlbW92ZUV2ZW50dWFsbHldO1xuXG4gICAgdG9SZW1vdmVBcnJheS5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgdG9Eb0l0ZW0gb2YgZ2xvYmFscygpLnRvRG9MaXN0KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0b0RvSXRlbSAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLnJlbW92ZSR7dG9Eb0l0ZW0uY291bnRlcn1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGJ0biA9PSByZW1vdmVJdGVtKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZsZXhDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYC5mbGV4LWNoaWxkJHt0b0RvSXRlbS5jb3VudGVyfWBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZmxleENoaWxkLnJlbW92ZSgpO1xuICAgICAgICAgICAgICBkZWxldGUgZ2xvYmFscygpLnRvRG9MaXN0W3RvRG9JdGVtLmNvdW50ZXJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfY2xlYW5Ub0RvRGlzcGxheSgpIHtcbiAgICBnbG9iYWxzKCkuZmxleENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZW1vdmVBbGxCdG4oKSB7XG4gICAgZ2xvYmFscygpLnJlbW92ZUFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9yZW1vdmVUb0RvSXRlbXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3JlbW92ZVRvRG9JdGVtcygpIHtcbiAgICBjb25zdCBmbGV4Q2hpbGRBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxleC1jaGlsZCcpO1xuICAgIGNvbnN0IGZsZXhDaGlsZEFycmF5ID0gWy4uLmZsZXhDaGlsZEFsbF07XG5cbiAgICBmbGV4Q2hpbGRBcnJheS5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgIGdsb2JhbHMoKS5mbGV4Q29udGFpbmVyLnJlbW92ZUNoaWxkKGRpdik7XG4gICAgfSk7XG5cbiAgICBnbG9iYWxzKCkudG9Eb0xpc3QgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVRvRG9JdGVtKCkge1xuICAgIHJldHVybiBfY3JlYXRlVG9Eb0l0ZW0oKTtcbiAgfVxuXG4gIHJldHVybiB7IGNyZWF0ZVRvRG9JdGVtIH07XG59KSgpO1xuXG5Ub0RvTGlzdC5jcmVhdGVUb0RvSXRlbSgpO1xuXG5nbG9iYWxzKCkuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZ2xvYmFscygpLnRvRG9Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIGdsb2JhbHMoKS5hZGRUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cbmdsb2JhbHMoKS5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGdsb2JhbHMoKS50b0RvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICBnbG9iYWxzKCkuYWRkVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9