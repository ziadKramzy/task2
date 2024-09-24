let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let startX, endX;

const slider = document.querySelector('.slide');
const container = document.querySelector('.container');

let interval;

// Touch event listeners for swipe functionality
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
    if (startX > endX + 50) {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    } else if (startX < endX - 50) {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    }
});

// Next and Previous button functionality
next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

// Function to auto-transition slides
function autoTrans() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}

function startAutoTrans() {
    interval = setInterval(autoTrans, 3000); 
}

function stopAutoTrans() {
    clearInterval(interval);
}

container.addEventListener('mouseenter', stopAutoTrans);
container.addEventListener('mouseleave', startAutoTrans);

startAutoTrans();