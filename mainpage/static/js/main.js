$(function() {
    $('#nav-icon6').click(function() {
        $(this).toggleClass('open');
        $('.overlay-menu').toggleClass('show-overlay-menu'); // Переключаем класс для показа/скрытия overlay-menu
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let words = ['продающих', 'эффективных', 'запоминающихся', 'уникальных'];
    let dynamicWord = document.getElementById('dynamic-word');
    let currentWordIndex = 0;

    setInterval(function() {
        // Начать исчезновение
        dynamicWord.classList.add('fade-out');

        setTimeout(function() {
            // Сменить слово после исчезновения
            currentWordIndex = (currentWordIndex + 1) % words.length;
            dynamicWord.textContent = words[currentWordIndex];

            // Удалить класс исчезновения и добавить класс появления
            dynamicWord.classList.remove('fade-out');
            dynamicWord.classList.add('fade-in');

            // Удалить класс появления для следующего цикла
            setTimeout(function() {
                dynamicWord.classList.remove('fade-in');
            }, 1000); // Длительность анимации fadeIn
        }, 1000); // Длительность анимации fadeOut
    }, 4000); // Увеличиваем интервал для учета анимации
});

document.addEventListener('DOMContentLoaded', function() {
    let marquee = document.querySelector('.marquee p');
    let scrollSpeed = 1;
    let lastScrollTop = 0;
    let rafId;

    function updatePosition() {
        let currentScrolls = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrolls > lastScrollTop) {
            marquee.style.transform = 'translateX(' + -(currentScrolls * scrollSpeed) + 'px)';
        } else {
            marquee.style.transform = 'translateX(' + (-currentScrolls * scrollSpeed) + 'px)';
        }

        lastScrollTop = currentScrolls <= 0 ? 0 : currentScrolls;
        rafId = requestAnimationFrame(updatePosition);
    }

    window.addEventListener('scroll', function() {
        if (rafId) {
            cancelAnimationFrame(rafId);
        }
        rafId = requestAnimationFrame(updatePosition);
    }, false);
});




// Калькулятор

document.addEventListener('DOMContentLoaded', function() {
  const serviceForm = document.getElementById('service-form');
  const totalCostSpan = document.getElementById('total-cost');

  // Стоимость услуг
  const prices = {
    website: 20000,
    clients: 15000,
    upgrade: 30000,
    seo: 10000,
    quality: 5000,
    reasonable: 15000,
    exclusive: 30000,
    urgent: 20000,
    week: 10000,
    'two-weeks': 5000,
    'no-rush': 0
  };

  // Функция для расчета стоимости
  function calculateTotalCost() {
    let totalCost = 0;

    // Перебираем все чекбоксы и радиокнопки
    document.querySelectorAll('#service-form input').forEach(function(input) {
      if (input.checked) {
        totalCost += prices[input.value] || 0;
      }
    });

    // Обновляем итоговую стоимость на странице
    totalCostSpan.textContent = totalCost;
  }

  // Устанавливаем обработчик события на изменения для чекбоксов и радиокнопок
  document.querySelectorAll('#service-form input[type=checkbox], #service-form input[type=radio]').forEach(function(input) {
    input.addEventListener('change', calculateTotalCost);
  });

  // Предотвращаем отправку формы
  serviceForm.addEventListener('submit', function(event) {
    event.preventDefault();
    calculateTotalCost();
  });

  // Вызываем функцию расчета стоимости при инициализации
  calculateTotalCost();
});


const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle === 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
