const navbar = document.querySelector('.navbar')

window.addEventListener ('scroll', () => {
    const scrollPos = window.scrollY;
    if( scrollPos > 25 ) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
});