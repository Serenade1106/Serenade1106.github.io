const content = document.querySelector('.content');
let isPaused = false;


content.addEventListener('click', () => {
    if (isPaused) {
        content.style.animationPlayState = 'running';
    } else {
        content.style.animationPlayState = 'paused';
    }
    isPaused = !isPaused;
});