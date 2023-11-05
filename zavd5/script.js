function formatDate(date) {
    const now = new Date();
    const diff = now - date;
    
    if (diff < 1000) {
        return "прямо зараз";
    } else if (diff < 60000) {
        return `${Math.floor(diff / 1000)} сек. назад`;
    } else if (diff < 3600000) {
        return `${Math.floor(diff / 60000)} хв. назад`;
    } else {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
}

const datetimeInput = document.getElementById("datetime");
const resultElement = document.getElementById("result");
const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", function() {
    const inputDate = new Date(datetimeInput.value);
    const formattedDate = formatDate(inputDate);
    resultElement.textContent = `Результат: ${formattedDate}`;
});
