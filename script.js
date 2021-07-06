function renderClock() {
  const time = new Date();
  const minutes = leadingZero(time.getMinutes());
  const seconds = leadingZero(time.getSeconds());
  const hours = time.getHours();
  const isAm = hours < 12 || hours === 0;
  let amPm = isAm ? 'AM' : 'PM';

  const timeDisplay = document.getElementById('time-display');
  timeDisplay.textContent = `${formatHour(
    hours
  )}:${minutes}:${seconds} ${amPm}`;
}

function formatHour(hour) {
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;
  return hour;
}

function leadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function renderDate() {
  const today = new Date();

  const weekday = daysIndex[today.getDay()];
  const month = monthsIndex[today.getMonth()];
  const date = dateWithSuffix(today.getDate());
  const year = today.getFullYear();
  const dateDisplay = document.getElementById('date-display');
  dateDisplay.textContent = `${weekday}, ${month} ${date}, ${year}`;
}

const daysIndex = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const monthsIndex = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function dateWithSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}

renderClock();
renderDate();
setInterval(() => {
  renderClock();
  renderDate();
}, 1000);
