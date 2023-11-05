function getSecondsToTomorrow() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const timeDifference = tomorrow - now;
    return Math.floor(timeDifference / 1000); 
}

const resultElement = document.getElementById("result");
const calculateButton = document.getElementById("calculate");
const secondsToTomorrow = getSecondsToTomorrow();
resultElement.textContent = `Кількість секунд до завтра: ${secondsToTomorrow} секунд`;
