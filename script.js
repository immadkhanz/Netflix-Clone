const slider = document.querySelector('.innertrending');
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');

function updateButtons() {
    // Hide left button if at the start
    if (slider.scrollLeft <= 0) {
        leftBtn.classList.add('hidden');
    } else {
        leftBtn.classList.remove('hidden');
    }

    // Hide right button if at the end
    // (scrollWidth is total length, clientWidth is visible part)
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
        rightBtn.classList.add('hidden');
    } else {
        rightBtn.classList.remove('hidden');
    }
}

function slide(direction) {
    const scrollAmount = slider.clientWidth;
    if (direction === 'left') {
        slider.scrollLeft -= scrollAmount;
    } else {
        slider.scrollLeft += scrollAmount;
    }
}

// Listen for scroll moves to check button visibility
slider.addEventListener('scroll', updateButtons);

// Run once on page load to hide the left button initially
updateButtons();


const faqBlocks = document.querySelectorAll('.Qasblock');

faqBlocks.forEach(block => {
    block.addEventListener('click', () => {
        // Toggle 'open' class on the clicked block
        block.classList.toggle('open');
        
        // Optional: Close other blocks when one is opened
        faqBlocks.forEach(otherBlock => {
            if (otherBlock !== block) {
                otherBlock.classList.remove('open');
            }
        });
    });
});