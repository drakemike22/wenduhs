
const clock = document.querySelector(".clock");

function updateClock() {


    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const displayMinutes = minutes.toString().padStart(2, "0");

    let displayHours = hours % 12;

    if (displayHours === 0) {
    displayHours = 12;
    }

    const amPM = hours >=12 ? "PM" : "AM";
    clock.textContent = `${displayHours}:${displayMinutes} ${amPM}`;
}

updateClock();

setInterval(updateClock, 1000);