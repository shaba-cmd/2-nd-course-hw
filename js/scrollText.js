function scroll() {
    const stripScroll = document.querySelector('.animated-strip__scroll');
    
    const originalContent = stripScroll.innerHTML;
    stripScroll.innerHTML = originalContent + originalContent;
    
    const items = stripScroll.querySelectorAll('.animated-strip__text, .animated-strip__star');
    let totalWidth = 0;
    items.forEach(item => {
        totalWidth += item.offsetWidth + 51;
    });
    const singleSetWidth = totalWidth / 2;
    
    let position = 0;
    const speed = 4;
    
    function animateScroll() {
        position -= speed;
        
        if (Math.abs(position) >= singleSetWidth) {
            position = 0;
        }
        
        stripScroll.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animateScroll);
    }
    
    animateScroll();
};

scroll();