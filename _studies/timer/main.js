let endText = document.getElementById("end-text");
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let resetBtn = document.getElementById("reset-btn");
let timePass = document.getElementById("time-pass");
let rest = null;
let timerI;
let timerT;

startBtn.addEventListener("click", function() {
    this.classList.add("visually-hidden");
    resetBtn.classList.add("visually-hidden");
    stopBtn.classList.remove("visually-hidden");
    startTimer(rest);
});

stopBtn.addEventListener("click", function() {
    this.classList.add("visually-hidden");
    startBtn.classList.remove("visually-hidden");
    resetBtn.classList.remove("visually-hidden");
    clearInterval(timerI);
    clearTimeout(timerT);
});

resetBtn.addEventListener("click", function() {
    this.classList.add("visually-hidden");
    startBtn.classList.remove("visually-hidden");
});

let startTimer = function(rest) {
    let nowTime = new Date();
    timerM = Number(document.getElementById("select-min").value);
    timerS = Number(document.getElementById("select-sec").value);

    rest = (timerM*60 + timerS) * 1000;

    let targetTime = nowTime.getTime() + rest;

    timerI = setInterval(countDown, 1, targetTime);
    timerT = setTimeout(timeUp, rest);
}

let countDown = function(targetTime) {
    let dT = new Date();
    rest = (targetTime - dT.getTime());
    M = Math.floor(rest/60000);
    S = Math.floor((rest-M*60000)/1000);
    timePass.innerHTML = `${M}minute ${S}second`;
    
}

let timeUp = function() {
    clearInterval(timerI);
    endText.classList.remove("visually-hidden");
}