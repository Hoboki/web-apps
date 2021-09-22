let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let resetBtn = document.getElementById("reset-btn");
let endText = document.getElementById("end-text");
let rest = null;
let timerI;
let timerT;

let attachS = function(x) {
    return (x>=2 ? "s": " ");
}

let attachZero = function(x) {
    return (x<=9 ? "0": "");
}

let countDown = function(targetTime) {
    let dT = new Date();

    rest = (targetTime - dT.getTime());
    M = Math.floor(rest/60000);
    S = Math.floor((rest-M*60000)/1000);

    document.getElementById("time-pass").innerHTML = `${attachZero(M)}${M}minute${attachS(M)} ${attachZero(S)}${S}second${attachS(S)}`;
}

let timeUp = function() {
    rest = null;
    clearInterval(timerI);
    document.getElementById("time-pass").innerHTML = "00minute 00second";
    stopBtn.classList.add("visually-hidden");
    startBtn.classList.remove("visually-hidden");
    endText.classList.remove("visually-hidden");
    console.log("終了しました！");

}

let startTimer = function(rest) {
    let timerM, timerS, targetTime;
    let nowTime = new Date();
    if (rest) {
        targetTime = nowTime.getTime() + rest;
    }
    else {
        timerM = Number(document.getElementById("select-min").value);
        timerS = Number(document.getElementById("select-sec").value);
        rest = (timerM*60 + timerS)*1000;
    }
    targetTime = nowTime.getTime() + rest;
    timerI = setInterval(countDown, 1, targetTime);
    timerT = setTimeout(timeUp, rest);
}

startBtn.addEventListener("click", function() {
    this.classList.add("visually-hidden");
    endText.classList.add("visually-hidden");
    resetBtn.classList.add("visually-hidden");
    stopBtn.classList.remove("visually-hidden");
    startTimer(rest);
});

stopBtn.addEventListener("click", function() {
    clearInterval(timerI);
    clearTimeout(timerT)
    this.classList.add("visually-hidden");
    startBtn.classList.remove("visually-hidden");
    resetBtn.classList.remove("visually-hidden");
});

resetBtn.addEventListener("click", function() {
    this.classList.add("visually-hidden");
    rest = null;
    document.getElementById("time-pass").innerHTML = "00minute 00second";
});
