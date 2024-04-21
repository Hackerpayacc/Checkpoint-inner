const clocks = document.querySelectorAll(".clock");
const startButtons = document.querySelectorAll(".start");
const stopButtons = document.querySelectorAll(".stop");
const pauseButtons = document.querySelectorAll(".pause");
const stopAllButton = document.querySelector(".stop-all");
const startAllButton = document.querySelector(".start-all");
let intervals = [];

function shownTime(time) {
  const minute = Math.floor(time / 1000 / 60);
  const second = Math.floor((time % (1000 * 60)) / 1000);
  const milisec = Math.floor((time % 1000) / 10);
  return `${String(minute).padStart(2, "0")}:${String(second).padStart(
    2,
    "0"
  )}.${String(milisec).padStart(2, "0")}`;
}
function startClock(clockIndex) {
  const clock = clocks[clockIndex];
  const timeset = clock.querySelector(".time");
  let time = 0;
  const interval = setInterval(() => {
    time += 10;
    timeset.textContent = shownTime(time);
  }, 10);
  intervals[clockIndex] = interval;
}
function stopClock(clockIndex) {
  clearInterval(intervals[clockIndex]);
  const clock = clocks[clockIndex];
  const timeset = clock.querySelector(".time");
  timeset.textContent = "00:00.00";
}
function pauseClock(clockIndex) {
  clearInterval(intervals[clockIndex]);
}
startButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    startClock(index);
  });
});
stopButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    stopClock(index);
  });
});
pauseButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    pauseClock(index);
  });
});
stopAllButton.addEventListener("click", () => {
  stopButtons.forEach((button, index) => {
    button.click();
  });
});
startAllButton.addEventListener("click", () => {
  startButtons.forEach((button, index) => {
    button.click();
  });
});
