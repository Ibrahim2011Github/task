
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