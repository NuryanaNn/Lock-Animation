let toggler = document.querySelector('.toggler');
let circle = document.querySelector('.circle');
let cardLock = document.querySelector('.cardLock');

toggler.addEventListener('click', function(){
    this.classList.toggle('active');
    cardLock.classList.toggle('active');
    circle.classList.toggle('active');
})