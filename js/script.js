const burger = document.querySelector('.burger');
const overlay = burger.previousElementSibling;

burger.addEventListener('click', function() {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
  this.previousElementSibling.classList.toggle('active');
})

overlay.addEventListener('click', () => {
  burger.classList.toggle('active');
  burger.nextElementSibling.classList.toggle('active');
  burger.previousElementSibling.classList.toggle('active');
})