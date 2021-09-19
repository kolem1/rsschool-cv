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

console.log(sectionsCoord)