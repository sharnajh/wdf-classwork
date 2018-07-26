let timer = () => {
  let clock = document.getElementById("clock");
  let currentDate = new Date();
  hour = currentDate.getHours();
  minute = currentDate.getMinutes();
  seconds = currentDate.getSeconds();
  if((hour+"").length === 1) {
      hour = `0${hour}`
  }
  if((minute+"").length === 1) {
      minute = `0${minute}`
  }
  if((seconds+"").length === 1) {
      seconds = `0${seconds}`
  }
  let hexClock = clock.innerHTML = `#${hour}${minute}${seconds}`;
  document.body.style.backgroundColor = hexClock;
  setTimeout(timer, 1000);
}

timer();
