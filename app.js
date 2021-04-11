const timeTxt = document.getElementById('timeTxt');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let count = 0;
let IntervalID = null;

play.addEventListener('click', playFn);

function playFn() {
    removeBtnActive();
    this.classList.add('active');

    IntervalID = setInterval(function () {
        count++;
        timeTxt.innerText = count.toString();
    }, 1000);

    play.removeEventListener('click', playFn);
    stop.addEventListener('click', stopFn);
    reset.addEventListener('click', resetFn);
}

function stopFn() {
    removeBtnActive();
    this.classList.add('active');

    clearInterval(IntervalID);

    play.addEventListener('click', playFn);
    stop.removeEventListener('click', stopFn);
}

function resetFn() {
    removeBtnActive();
    this.classList.add('active');

    clearInterval(IntervalID);
    count = 0;
    timeTxt.innerText = count.toString();

    if(reset.classList.contains('active')) {
        setTimeout(function () {
            reset.classList.remove('active');
            play.addEventListener('click', playFn);
        }, 1500);
    }

    play.removeEventListener('click', playFn);
    stop.removeEventListener('click', stopFn);
    reset.removeEventListener('click', resetFn);
}

function removeBtnActive() {
    play.classList.remove('active');
    stop.classList.remove('active');
    reset.classList.remove('active');
}