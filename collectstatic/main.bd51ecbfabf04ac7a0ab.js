/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./mainpage/static/js/main.js":
/*!************************************!*\
  !*** ./mainpage/static/js/main.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\r\n$(function() {\r\n    $('#nav-icon6').click(function() {\r\n        $(this).toggleClass('open');\r\n        $('.overlay-menu').toggleClass('show-overlay-menu'); // Переключаем класс для показа/скрытия overlay-menu\r\n    });\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    let words = ['продающих', 'эффективных', 'запоминающихся', 'уникальных'];\r\n    let dynamicWord = document.getElementById('dynamic-word');\r\n    let currentWordIndex = 0;\r\n\r\n    setInterval(function() {\r\n        // Начать исчезновение\r\n        dynamicWord.classList.add('fade-out');\r\n\r\n        setTimeout(function() {\r\n            // Сменить слово после исчезновения\r\n            currentWordIndex = (currentWordIndex + 1) % words.length;\r\n            dynamicWord.textContent = words[currentWordIndex];\r\n\r\n            // Удалить класс исчезновения и добавить класс появления\r\n            dynamicWord.classList.remove('fade-out');\r\n            dynamicWord.classList.add('fade-in');\r\n\r\n            // Удалить класс появления для следующего цикла\r\n            setTimeout(function() {\r\n                dynamicWord.classList.remove('fade-in');\r\n            }, 1000); // Длительность анимации fadeIn\r\n        }, 1000); // Длительность анимации fadeOut\r\n    }, 4000); // Увеличиваем интервал для учета анимации\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    let marquee = document.querySelector('.marquee p');\r\n    let scrollSpeed = 1;\r\n    let lastScrollTop = 0;\r\n    let rafId;\r\n\r\n    function updatePosition() {\r\n        let currentScrolls = window.pageYOffset || document.documentElement.scrollTop;\r\n\r\n        if (currentScrolls > lastScrollTop) {\r\n            marquee.style.transform = 'translateX(' + -(currentScrolls * scrollSpeed) + 'px)';\r\n        } else {\r\n            marquee.style.transform = 'translateX(' + (-currentScrolls * scrollSpeed) + 'px)';\r\n        }\r\n\r\n        lastScrollTop = currentScrolls <= 0 ? 0 : currentScrolls;\r\n        rafId = requestAnimationFrame(updatePosition);\r\n    }\r\n\r\n    window.addEventListener('scroll', function() {\r\n        if (rafId) {\r\n            cancelAnimationFrame(rafId);\r\n        }\r\n        rafId = requestAnimationFrame(updatePosition);\r\n    }, false);\r\n});\r\n\r\n\r\n\r\n\r\n// Калькулятор\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n  const serviceForm = document.getElementById('service-form');\r\n  const totalCostSpan = document.getElementById('total-cost');\r\n\r\n  // Стоимость услуг\r\n  const prices = {\r\n    website: 20000,\r\n    clients: 15000,\r\n    upgrade: 30000,\r\n    seo: 10000,\r\n    quality: 5000,\r\n    reasonable: 15000,\r\n    exclusive: 30000,\r\n    urgent: 20000,\r\n    week: 10000,\r\n    'two-weeks': 5000,\r\n    'no-rush': 0\r\n  };\r\n\r\n  // Функция для расчета стоимости\r\n  function calculateTotalCost() {\r\n    let totalCost = 0;\r\n\r\n    // Перебираем все чекбоксы и радиокнопки\r\n    document.querySelectorAll('#service-form input').forEach(function(input) {\r\n      if (input.checked) {\r\n        totalCost += prices[input.value] || 0;\r\n      }\r\n    });\r\n\r\n    // Обновляем итоговую стоимость на странице\r\n    totalCostSpan.textContent = totalCost;\r\n  }\r\n\r\n  // Устанавливаем обработчик события на изменения для чекбоксов и радиокнопок\r\n  document.querySelectorAll('#service-form input[type=checkbox], #service-form input[type=radio]').forEach(function(input) {\r\n    input.addEventListener('change', calculateTotalCost);\r\n  });\r\n\r\n  // Предотвращаем отправку формы\r\n  serviceForm.addEventListener('submit', function(event) {\r\n    event.preventDefault();\r\n    calculateTotalCost();\r\n  });\r\n\r\n  // Вызываем функцию расчета стоимости при инициализации\r\n  calculateTotalCost();\r\n});\r\n\r\n\r\nconst items = document.querySelectorAll(\".accordion button\");\r\n\r\nfunction toggleAccordion() {\r\n  const itemToggle = this.getAttribute('aria-expanded');\r\n\r\n  for (let i = 0; i < items.length; i++) {\r\n    items[i].setAttribute('aria-expanded', 'false');\r\n  }\r\n\r\n  if (itemToggle === 'false') {\r\n    this.setAttribute('aria-expanded', 'true');\r\n  }\r\n}\r\n\r\nitems.forEach(item => item.addEventListener('click', toggleAccordion));\r\n\n\n//# sourceURL=webpack://releasehosting/./mainpage/static/js/main.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreleasehosting"] = self["webpackChunkreleasehosting"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_require__("./mainpage/static/js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;