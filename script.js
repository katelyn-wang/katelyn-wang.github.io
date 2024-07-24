window.addEventListener('load', () => {
    const startScroll = window.scrollY;
    const scrollAmount = window.innerHeight * 0.1;
    const targetScroll = startScroll + scrollAmount;
    const duration = 2000;
    const startTime = performance.now();

    const path = window.location.pathname;
    if (path === '/index.html' || path === '/') {
        return;
    }

    function scrollStep(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeInOutQuad = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(0, startScroll + (targetScroll - startScroll) * easeInOutQuad);

        if (elapsedTime < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    if (window.scrollY === 0) {
        requestAnimationFrame(scrollStep);
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollAmount) {
            downArrow.style.display = 'none';
        } else {
            downArrow.style.display = 'block';
        }
    });

    // Scroll down when down arrow is clicked
    downArrow.addEventListener('click', () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {

    // hide navbar after scrolling half the window height
    const navbar = document.getElementById('navbar-custom');
    const scrollTop = window.scrollY;
    const threshold = window.innerHeight * 0.5;

    if (scrollTop > threshold) {
        navbar.classList.add('hidden');  // Hide the navbar
    } else {
        navbar.classList.remove('hidden');  // Show the navbar
    }

    // add scroll animation for content boxes
    const scrollingBoxes = document.getElementsByClassName("content-box");  // apply to all the boxes
    const windowHeight = window.innerHeight;

    for (const scrollingBox of scrollingBoxes) {
        const boxRect = scrollingBox.getBoundingClientRect();
        const boxTop = boxRect.top;

        if (boxTop >= windowHeight * 0.8) {  // box appears when it's at the bottom fifth of the screen
            scrollingBox.classList.add("hidden");
            scrollingBox.classList.remove("visible");
        } else {
            scrollingBox.classList.add("visible");
            scrollingBox.classList.remove("hidden");
        }
    }
});


reveal();   // check when the page is loaded