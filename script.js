const ball = document.getElementById('ball');
const startButton = document.getElementById('startButton');
const speed = 5; // Adjust this value to change the speed of the ball

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    ball.style.display = 'block';
    document.addEventListener('mousemove', moveBall);
});

function moveBall(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const ballX = ball.offsetLeft + ball.offsetWidth / 2;
    const ballY = ball.offsetTop + ball.offsetHeight / 2;

    const deltaX = mouseX - ballX;
    const deltaY = mouseY - ballY;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance > 1) {
        ball.style.left = ball.offsetLeft + deltaX * speed / distance + 'px';
        ball.style.top = ball.offsetTop + deltaY * speed / distance + 'px';
    }
}
