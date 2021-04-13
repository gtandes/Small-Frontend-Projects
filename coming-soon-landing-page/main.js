const countDown = document.querySelector(".countdown");

// Set Launch Date
const launchDate = new Date("Jan 1, 2030 13:00:00").getTime();

// console.log(launchDate);

// Update every second
const interval = setInterval(() => {
  //   console.log("hello");

  // Get today's date and time in milliseconds
  const now = new Date().getTime();

  //   Distance from now to the launch date
  const distance = launchDate - now;

  //   console.log(distance);

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   Display the result
  countDown.innerHTML = `
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;

  //   If launch date has already passed
  if (distance < 0) {
    // Stop Countdown
    clearInterval(interval);
    // Style and output text
    countDown.style.color = "#17a2b8";
    countDown.innerHTML = "Launched!";
  }
}, 1000);
