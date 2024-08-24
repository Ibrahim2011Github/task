
new WOW().init();

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".wow", // элемент с классом wow
  start: "top 80%", // анимация запускается, когда элемент на 80% экрана сверху
  onEnter: () => {
    const element = document.querySelector(".wow");
    element.classList.remove("animate__backInLeft"); // Сначала убираем анимацию
    void element.offsetWidth; // Перезагружаем анимацию (hack)
    element.classList.add("animate__backInLeft"); // Добавляем анимацию заново
  },
  onLeaveBack: () => { // Это запускается, когда элемент уходит за верх экрана
    const element = document.querySelector(".wow");
    element.classList.remove("animate__backInLeft");
  },
});


VanillaTilt.init(document.querySelectorAll(".tilt-element"), {
  max: 12,  // Максимальный угол наклона
  speed: 100,  // Скорость анимации
  glare: true,  // Эффект блика
  "max-glare": 0.5  // Максимальная интенсивность блика
});


function filterItems(category) {
  const items = document.querySelectorAll('.grid-item');
  items.forEach(item => {
    item.classList.remove('active'); // Remove active class first to trigger reflow

    // Delay applying the active class to allow animation effect
    setTimeout(() => {
      if (category === 'all' || item.getAttribute('data-filter') === category) {
        item.classList.add('active');
      }
    }, 350);
  });
}

// Initially show all items with effects
filterItems('all');