const timeElement = document.querySelector(".time")
const dateElement = document.querySelector(".date")

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

const months = [
  "01","02","03",
  "04","05","06",
  "07","08","09",
  "10","11","12",
];

function updateClock() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const weekday = now.getDay();
  const month = now.getMonth();
  const day = now.getDate().toString().padStart(2, "0");
  const year = now.getFullYear();

  const weekdayName = weekdays[weekday];
  const monthName = months[month];

  timeElement.textContent = `${hours}:${minutes}`;
  dateElement.textContent = `${weekdayName}, ${monthName}.${day}`;
}

updateClock(); // сразу отрисовать, не ждать первый интервал
setInterval(updateClock, 10000); // раз в секунду — дешёво, не нужно городить "6 тиков по 10 сек"
