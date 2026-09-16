
const clock = document.querySelector(".clock");

const browserIcon = document.querySelector(".desktop-icon");

const closeButton = document.querySelector(".close-button");

const browserWindow = document.querySelector(".browser-window");

const minimizeButton = document.querySelector(".minimize-button");

const taskbarWindows = document.querySelector(".taskbar-windows");

const browserTaskbarButton = document.createElement("button");

browserTaskbarButton.textContent = "Wenduhs Browser";

browserTaskbarButton.style.display = "none";

taskbarWindows.appendChild(browserTaskbarButton);

browserIcon.addEventListener("click", function () {
    browserWindow.style.display = "block";
});

closeButton.addEventListener("click", function() {
    browserWindow.style.display = "none";
});

minimizeButton.addEventListener("click", function() {
    browserWindow.style.display = "none";
    browserTaskbarButton.style.display = "block";  
});

browserTaskbarButton.addEventListener("click", function() {
    browserWindow.style.display = "block";
    browserTaskbarButton.style.display = "none";
})



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