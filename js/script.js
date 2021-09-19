const burger = document.querySelector('.burger');
const overlay = burger.previousElementSibling;

burger.addEventListener('click', function() {
  this.closest('.header').classList.toggle('active');
})

overlay.addEventListener('click', function() {
  this.closest('.header').classList.toggle('active');
})

const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', (e) =>{
    e.preventDefault();
    const id = anchor.getAttribute('href');
    const target = document.querySelector(id);
    const topOffset = document.querySelector('.header').offsetHeight;

    const targerPosition = target.getBoundingClientRect().top;
    const offsetPosition = targerPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    })
    if(document.documentElement.clientWidth < 1024) {
      document.querySelector('.header').classList.remove('active');
    }
    anchor.blur();
  })
})

const sections = document.querySelectorAll('.section');
const sectionsCoord = {};

sections.forEach(item => {
  sectionsCoord[item.id] = item.offsetTop;
});

window.onscroll = function() {
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  for(let section in sectionsCoord) {
    if(sectionsCoord[section] <= scrollPosition + 80) {
      document.querySelector('a[href^="#"].active').classList.remove('active');
      document.querySelector('a[href*=' + section + ']').classList.add('active');
    }
  }
}

const selfCheck = `
  150/150
  1. Верстка валидная +10
  2. Верстка семантичная - используются теги: h1, h2, h3, h4, header, nav, main, footer, section, article +20
  3. Используются CSS стили +10
  4. Контент размещается в блоке, который горизонтально центрируется на странице +10
  5. Верстка адаптивная +10
  6. Есть адаптивное бургер меню. При клике на пункт реализован плавный скролл +10
  7. Есть аватарка. Атрибут alt присутствует (пустой) +10
  8. Контакты и навыки оформлены через ul>li +10
  9. Содержится информация о себе, контакты, навыки, а так же уровень английского +10
  10. Есть пример кода с подсветкой через Highlight.js +10
  11. Есть секция с проектами. Каждый проект имеет изображение, название, описание и перечень технологий. Ссылка открывается в новой вкладке +10
  12. CV на английском +10
  13. Выполнены требования к Pull Request +10
  14. Видеорезюме отсутствует +0
  15. +10
  `;

console.log(selfCheck);