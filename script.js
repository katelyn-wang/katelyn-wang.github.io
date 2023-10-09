const scrollingBoxes = document.getElementsByClassName("content-box");  // apply to all the boxes

function reveal() {
    const scrollY = window.scrollY;
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
}

window.addEventListener("scroll", reveal);

reveal();   // check when the page is loaded