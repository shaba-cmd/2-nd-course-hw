document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (e) {
        e.preventDefault();

        const anchor = e.target.closest('a[href*="#"]');
        
        const blockId = anchor.getAttribute('href').substring(1);
        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });     
    });

    function toggleScrollTop() {
        const scrollTop = document.querySelector('.arrow');

        if (window.pageYOffset > 800) {
            scrollTop.style.display = 'block';
        } else {
            scrollTop.style.display = 'none';
        }
    }

    toggleScrollTop();

    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(toggleScrollTop, 10);
    });
});