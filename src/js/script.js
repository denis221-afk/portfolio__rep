const hamburger = document.querySelector('.huburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');



hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});      




closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});  
