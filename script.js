
document.addEventListener('DOMContentLoaded', function () {
    let min = 1;
    let max = 100;
    let guess;
    let message = document.getElementById('message');
    let question = document.getElementById('question');
    let startButton = document.getElementById('startButton');
    let yesButton = document.getElementById('yesButton');
    let noButton = document.getElementById('noButton');
    let gameArea = document.getElementById('gameArea');
    let movingImage = document.querySelector('.moving-image');
    let confirmDialog = document.getElementById('confirmDialog');
    let customYesButton = document.getElementById('customYesButton');
    let customNoButton = document.getElementById('customNoButton');

    function askGuess() {
        guess = Math.floor((min + max) / 2);
        question.textContent = `¿Tu número es ${guess}?`;
    }

    startButton.addEventListener('click', function () {
        gameArea.style.display = 'block';
        startButton.style.display = 'none';
        askGuess();
    });

    yesButton.addEventListener('click', function () {
        message.innerHTML = `<h2>¡Tu número es ${guess}, he adivinado!</h2>`;
        movingImage.style.animationPlayState = 'running';
        gameArea.style.display = 'none';
    });

    noButton.addEventListener('click', function () {
        confirmDialog.style.display = 'block';

    });
    customYesButton.addEventListener('click', function () {
        confirmDialog.style.display = 'none';
        min = guess + 1;
        askGuess();
    });

    customNoButton.addEventListener('click', function () {
        confirmDialog.style.display = 'none';
        max = guess - 1;
        askGuess();
    });

    movingImage.style.animationPlayState = 'paused';
});
