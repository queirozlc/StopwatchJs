const btn = document.querySelectorAll('.buttons');
const appendSeconds = document.getElementById('seconds');
const appendTens = document.getElementById('tens');
let seconds = 00;
let tens = 00;
let interval;

btn[0].addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 11);
});

btn[1].addEventListener('click', () => {
  clearInterval(interval);
});

btn[2].addEventListener('click', () => {
  clearInterval(interval);
  tens = '00';
  seconds = '0';
  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
});

function startTimer() {
  tens++;
  if (tens <= 9) {
    appendTens.innerHTML = `0${tens}`;
  }

  if (tens > 9) {
    appendTens.innerHTML = `${tens}`;
  }

  if (tens > 99) {
    seconds++;
    console.log('this was a second!');
    appendSeconds.innerHTML = seconds;
    tens = 0;
    appendTens.innerHTML = '0' + 0;
  }

  if (seconds <= 9) {
    appendSeconds.innerHTML = `0${seconds}`;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = `${seconds}`;
  }
}
