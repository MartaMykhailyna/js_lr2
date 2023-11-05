document.addEventListener("DOMContentLoaded", function() {
    const customDate = new Date(2021, 1, 20, 3, 12); 
    const dateDisplay = document.getElementById("date-display");
    const formattedDate = customDate.toLocaleString("uk-UA", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZoneName: "short"
    });
    dateDisplay.textContent = formattedDate;
});
