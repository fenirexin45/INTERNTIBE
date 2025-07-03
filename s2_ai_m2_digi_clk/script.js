
function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // 12-hour format and AM/PM
  const amPm = hours >= 12 ? 'PM' : 'AM';
  const originalHours = hours;
  hours = hours % 12 || 12;

  // Pad with zeros if needed (ensures 2-digit format)
  const format = (unit) => (unit < 10 ? '0' + unit : unit);

  const formattedTime = `${format(hours)}:${format(minutes)}:${format(seconds)} ${amPm}`;
  document.getElementById('clock').textContent = formattedTime;

  //greeting based on time
  let greeting = '';
  if (originalHours >= 6 && originalHours < 12) {
    greeting = ' Morning Folks !!!!';
  } else if (originalHours >= 12 && originalHours < 18) {
    greeting = 'Good Afternoon !!!!';
  } else if (originalHours >= 18 && originalHours < 21) {
    greeting = 'Good Evening !!!!!';
  } else {
    greeting = 'Good Night !!!!!!!!';
  }

  document.getElementById('greeting').textContent = greeting;
}

updateClock();
setInterval(updateClock, 1000);
