const burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
})