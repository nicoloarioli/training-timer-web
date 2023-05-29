const sets = [];
const timerDisplay = document.getElementById('timer');
let j = 0;
let setsNumber = 0;



function addSet() {
    setsNumber++;
    const home = document.getElementById('home');
    const set = document.createElement('p');
    set.textContent = 'Set'+setsNumber;
    const input = document.createElement('input');
    input.setAttribute("type", "number");
    input.setAttribute("placeholder", "insert time in seconds");
    input.setAttribute("id", setsNumber);
    
    set.appendChild(input);
    home.appendChild(set);
    sets.push(setsNumber);
    console.log(setsNumber);
}

function startTimer() {
    if (j >= sets.length){
        timerDisplay.innerHTML = 'Finish!!';
        return;
    }
    let timeLeft = document.getElementById(sets[j]).value;
    //timerDisplay.innerHTML = sets[j];
    let timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerDisplay.innerHTML = 'End ' + 'Set' + sets[j];
        j++;
        startTimer();
        play();
        return;
    }
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.innerHTML = ''+sets[j];
    timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;
    }, 1000);
}

function play() {
    var audio = new Audio('./beep.mp3');
    audio.play();
}