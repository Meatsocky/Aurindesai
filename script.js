let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = '-60px'; // Adjust as needed based on your navbar height
    } else {
        // Scrolling up
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
