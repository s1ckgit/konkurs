const modalOpen = document.querySelector('.header__button');
const modalClose = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

modalOpen.addEventListener('click', () => {
    overlay.classList.add('active');
    modal.classList.add('active');
})

modalClose.addEventListener('click', () => {
    overlay.classList.remove('active');
    modal.classList.remove('active');
})