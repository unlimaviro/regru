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
/***/ (() => {

eval("$(function () {\n  $('#nav-icon6').click(function () {\n    $(this).toggleClass('open');\n    $('.overlay-menu').toggleClass('show-overlay-menu'); // Переключаем класс для показа/скрытия overlay-menu\n  });\n});\ndocument.addEventListener('DOMContentLoaded', function () {\n  var words = ['продающих', 'эффективных', 'запоминающихся', 'уникальных'];\n  var dynamicWord = document.getElementById('dynamic-word');\n  var currentWordIndex = 0;\n  setInterval(function () {\n    // Начать исчезновение\n    dynamicWord.classList.add('fade-out');\n    setTimeout(function () {\n      // Сменить слово после исчезновения\n      currentWordIndex = (currentWordIndex + 1) % words.length;\n      dynamicWord.textContent = words[currentWordIndex];\n\n      // Удалить класс исчезновения и добавить класс появления\n      dynamicWord.classList.remove('fade-out');\n      dynamicWord.classList.add('fade-in');\n\n      // Удалить класс появления для следующего цикла\n      setTimeout(function () {\n        dynamicWord.classList.remove('fade-in');\n      }, 1000); // Длительность анимации fadeIn\n    }, 1000); // Длительность анимации fadeOut\n  }, 4000); // Увеличиваем интервал для учета анимации\n});\ndocument.addEventListener('DOMContentLoaded', function () {\n  var marquee = document.querySelector('.marquee p');\n  var scrollSpeed = 1;\n  var lastScrollTop = 0;\n  var rafId;\n  function updatePosition() {\n    var currentScrolls = window.pageYOffset || document.documentElement.scrollTop;\n    if (currentScrolls > lastScrollTop) {\n      marquee.style.transform = 'translateX(' + -(currentScrolls * scrollSpeed) + 'px)';\n    } else {\n      marquee.style.transform = 'translateX(' + -currentScrolls * scrollSpeed + 'px)';\n    }\n    lastScrollTop = currentScrolls <= 0 ? 0 : currentScrolls;\n    rafId = requestAnimationFrame(updatePosition);\n  }\n  window.addEventListener('scroll', function () {\n    if (rafId) {\n      cancelAnimationFrame(rafId);\n    }\n    rafId = requestAnimationFrame(updatePosition);\n  }, false);\n});\n\n// Калькулятор\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var serviceForm = document.getElementById('service-form');\n  var totalCostSpan = document.getElementById('total-cost');\n\n  // Стоимость услуг\n  var prices = {\n    website: 20000,\n    clients: 15000,\n    upgrade: 30000,\n    seo: 10000,\n    quality: 5000,\n    reasonable: 15000,\n    exclusive: 30000,\n    urgent: 20000,\n    week: 10000,\n    'two-weeks': 5000,\n    'no-rush': 0\n  };\n\n  // Функция для расчета стоимости\n  function calculateTotalCost() {\n    var totalCost = 0;\n\n    // Перебираем все чекбоксы и радиокнопки\n    document.querySelectorAll('#service-form input').forEach(function (input) {\n      if (input.checked) {\n        totalCost += prices[input.value] || 0;\n      }\n    });\n\n    // Обновляем итоговую стоимость на странице\n    totalCostSpan.textContent = totalCost;\n  }\n\n  // Устанавливаем обработчик события на изменения для чекбоксов и радиокнопок\n  document.querySelectorAll('#service-form input[type=checkbox], #service-form input[type=radio]').forEach(function (input) {\n    input.addEventListener('change', calculateTotalCost);\n  });\n\n  // Предотвращаем отправку формы\n  serviceForm.addEventListener('submit', function (event) {\n    event.preventDefault();\n    calculateTotalCost();\n  });\n\n  // Вызываем функцию расчета стоимости при инициализации\n  calculateTotalCost();\n});\nvar items = document.querySelectorAll(\".accordion button\");\nfunction toggleAccordion() {\n  var itemToggle = this.getAttribute('aria-expanded');\n  for (var i = 0; i < items.length; i++) {\n    items[i].setAttribute('aria-expanded', 'false');\n  }\n  if (itemToggle === 'false') {\n    this.setAttribute('aria-expanded', 'true');\n  }\n}\nitems.forEach(function (item) {\n  return item.addEventListener('click', toggleAccordion);\n});\n\n//# sourceURL=webpack://releasehosting/./mainpage/static/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./mainpage/static/js/main.js"]();
/******/ 	
/******/ })()
;