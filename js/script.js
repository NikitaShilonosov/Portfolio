const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});

close.addEventListener('click', () => {
    menu.classList.remove('active')
});

const counters = document.querySelectorAll('.progress__procent'),
    lines = document .querySelectorAll('progress__scale span');
    
counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


