let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let startBtn = document.querySelector(".btn2");
let lapContainer = document.querySelector(".lap");
let timer = null;
let isStart = false;
let lapNo = 1;

function stopWatch() {
    seconds++;

    if (seconds == 60) {
        seconds = 0;
        minutes++;
        
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = `${h}:${m}:${s}`;
}

function watchStart() {
    isStart = !isStart;
    if (isStart) {
        if (timer !== null) clearInterval(timer);
        timer = setInterval(stopWatch, 1000);
        startBtn.textContent = "Resume";
    } else {
        clearInterval(timer);
        startBtn.textContent = "Start";
    }
}

function watchLap() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    lapContainer.style.display = "block";
    lapContainer.innerHTML += `<p>Lap ${lapNo}: ${h}:${m}:${s}</p>`;
    lapNo++;
}

function watchReset() {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
    startBtn.textContent = "Start";
    isStart = false;

    lapContainer.innerHTML = "";
    lapContainer.style.display = "none";
    lapNo = 1;
}
