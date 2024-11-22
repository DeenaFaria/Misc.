const clockSidebar = document.getElementById('clock-sidebar');
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    clockSidebar.innerHTML = `<h3>${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}</h3>`;
}
setInterval(updateClock, 1000);
