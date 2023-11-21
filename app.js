const displayArea = document.querySelector(".display-area");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
let interval = undefined;
let hour = 0;
let minute = 0;
let second = 0;
let temp = 0;
let millisecond = 0;
let flag = true;

displayArea.innerHTML = `<div class="time">
<span class="hr">00</span>: <span class="min">00</span> :<span
  class="sec"
  >00</span
>
</div>`;
startBtn.addEventListener("click", () => {
  if (flag) {
    startBtn.innerHTML = "Pause";
    flag = false;
    interval = setInterval(() => {
      if (temp >= 59) {
        temp = 0;
      }
      second += 1;
      temp += 1;

      minute = second / 60;
      hour = minute / 60;
      displayArea.innerHTML = `<div class="time">
    <span class="hr">${
      Math.trunc(hour) < 9 ? "0" + Math.trunc(hour) : Math.trunc(hour)
    }</span>: <span class="min">${
        Math.trunc(minute) < 10 ? "0" + Math.trunc(minute) : Math.trunc(minute)
      }</span> :<span
      class="sec"
      >${temp < 10 ? "0" + temp : temp}</span
    >
  </div>`;
    }, 1000);
  } else {
    clearInterval(interval);
    flag = true;
    startBtn.innerHTML = "Continue";
  }
});

resetBtn.addEventListener("click", () => {
  if (interval != undefined) {
    clearInterval(interval);
  }
  displayArea.innerHTML = `<div class="time">
    <span class="hr">00</span>: <span class="min">00</span> :<span
      class="sec"
      >00</span
    >
  </div>`;
  startBtn.innerHTML = "Start";
  interval = undefined;
  hour = 0;
  minute = 0;
  second = 0;
  temp = 0;
  millisecond = 0;
  flag = true;
});
