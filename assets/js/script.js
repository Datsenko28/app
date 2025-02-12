//
document.addEventListener("DOMContentLoaded", () => {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  // slider

  const cards = document.querySelectorAll(".testimonials__card");
  const dots = document.querySelectorAll(".slider__dot");
  const nextButton = document.querySelector(".slider__button--next");
  const prevButton = document.querySelector(".slider__button--prev");

  let currentIndex = 0;

  // Функція оновлення активних карток і індикаторів
  function updateSlider() {
    // Приховуємо всі картки
    cards.forEach((card, index) => {
      card.classList.toggle(
        "testimonials__card--active",
        index === currentIndex || index === (currentIndex + 1) % cards.length
      );
    });

    // Оновлюємо індикатори
    dots.forEach((dot, index) => {
      dot.classList.toggle("slider__dot--active", index === currentIndex);
      removeClass(prevButton, "active");
      removeClass(nextButton, "active");
    });
  }

  // Логіка кнопки "Далі"
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length; // Зациклення вперед
    updateSlider();
    addClass(nextButton, "active");
  });

  // Логіка кнопки "Назад"
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Зациклення назад
    updateSlider();
    addClass(prevButton, "active");
  });

  function addClass(element, className) {
    element.classList.add(className);
  }
  function removeClass(element, className) {
    element.classList.remove(className);
  }

  // Ініціалізація слайдера при завантаженні
  updateSlider();

  //Pop-up
});
