function getLastDayOfMonth(year, month) {
    const date = new Date(year, month, 0);
    return date.getDate();
}

function getMonthName(month) {
    const monthNames = [
        "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
        "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
    ];
    return monthNames[month - 1];
}

const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const resultElement = document.getElementById("result");
const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", function() {
    const year = parseInt(yearInput.value);
    const month = parseInt(monthInput.value);

    if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
        resultElement.textContent = "Будь ласка, введіть коректні дані для року та місяця.";
    } else {
        const lastDay = getLastDayOfMonth(year, month);
        const monthName = getMonthName(month);
        resultElement.textContent = `Останній день місяця ${monthName}: ${lastDay}`;
    }
});
