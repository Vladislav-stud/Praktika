 let timerInterval;
        let timeLeft = 0;

const timerDisplay = document.getElementById("timerDisplay");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

        function updateDisplay() {
            let hours = Math.floor(timeLeft / 3600);
            let minutes = Math.floor((timeLeft % 3600) / 60);
            let seconds = timeLeft % 60;

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
            console.log("update");
        }

function startTimer() {
    let initialHours = parseInt(hoursInput.value) || 0;
    let initialMinutes = parseInt(minutesInput.value) || 0;
    let initialSeconds = parseInt(secondsInput.value) || 0;

    timeLeft = initialHours * 3600 + initialMinutes * 60 + initialSeconds;
    updateDisplay();

    if (timeLeft <= 0) {
    alert("Не вводите отрицательное число!");
    return;
            }

            timerInterval = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateDisplay();
                } else {
                    clearInterval(timerInterval);
                    alert("Таймер отработал!");
                    startButton.disabled = false;
                    pauseButton.disabled = true;
                }
            }, 1000);

            startButton.disabled = true;
            pauseButton.disabled = false;
}

function pauseTimer() {
            clearInterval(timerInterval);
            startButton.disabled = false;
            pauseButton.disabled = true;
            console.log("da");
}

function resetTimer() {
            clearInterval(timerInterval);
            timeLeft = 0;
            updateDisplay();

            startButton.disabled = false;
            pauseButton.disabled = true;

            hoursInput.value = "0";
            minutesInput.value = "0";
            secondsInput.value = "0";
            console.log("reset");
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
        resetButton.addEventListener("click", resetTimer);


updateDisplay();