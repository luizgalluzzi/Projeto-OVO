let second = 0
let minute = 0

const buttonPlay = document.getElementById("inicio")
const timer = document.getElementById("timer")

let countTime

const eventsButton = {
    inicio() {
        countTime = setInterval(time, 1000)
    },
    },

buttonPlay.addEventListener ("click", eventsButton.inicio)

function formatTime (timer) {
    if (timer < 10) {
        return `0${timer}`
    } else {
        return timer
    }
}

function time () {
    second++

    if (second === 60){
        minute += 1
        second = 0;
    }
    timer.innerHTML = `${formatTime(minute)}:${formatTime(second)}`;

    }
