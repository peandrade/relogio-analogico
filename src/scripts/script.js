const digitalElement = document.querySelector('.digital');
const hourElement = document.querySelector('.p_h');
const minuteElement = document.querySelector('.p_m');
const secondElement = document.querySelector('.p_s');

function updateClock(){
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let secondDegrees = (6 * second) - 90;
    let minuteDegrees = (6 * minute) - 90;
    let hourDegrees = (30 * hour) - 90;

    secondElement.style.transform = `rotate(${secondDegrees}deg)`;
    minuteElement.style.transform = `rotate(${minuteDegrees}deg)`;
    hourElement.style.transform = `rotate(${hourDegrees}deg)`;

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
}

function fixZero(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();