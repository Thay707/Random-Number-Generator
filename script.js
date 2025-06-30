document.getElementById('generate-btn').addEventListener('click', function() {
    const randomNum = Math.floor(Math.random() * 50) + 1;
    const display = document.getElementById('number-display');
    display.textContent = randomNum;
    display.style.color = `hsl(${Math.floor(Math.random()*360)}, 70%, 55%)`;
});
