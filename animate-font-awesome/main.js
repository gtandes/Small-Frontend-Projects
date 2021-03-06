function brakeChain() {
  let chain = document.getElementById("chain");
  chain.innerHTML = "&#xf0c1;";

  setTimeout(function () {
    chain.innerHTML = "&#xf127;";
  }, 1000);
}

// Call animation
brakeChain();

// Animate every 2 seconds
setInterval(brakeChain, 2000);

// Battery charge animation
function chargeBattery() {
  let battery = document.getElementById("battery");
  battery.innerHTML = "&#xf244;";

  setTimeout(() => {
    battery.innerHTML = "&#xf243;";
  }, 1000);

  setTimeout(() => {
    battery.innerHTML = "&#xf242;";
  }, 2000);

  setTimeout(() => {
    battery.innerHTML = "&#xf241;";
  }, 3000);

  setTimeout(() => {
    battery.innerHTML = "&#xf240;";
  }, 4000);
}

// run battery animation
chargeBattery();

// run charging every 5 seconds
setInterval(chargeBattery, 5000);

// hourglass Tip Animation
function hourGlassTip() {
  let hourGlass = document.getElementById("hourglass");
  hourGlass.innerHTML = "&#xf251;";

  setTimeout(() => {
    hourGlass.innerHTML = "&#xf252;";
  }, 1000);

  setTimeout(() => {
    hourGlass.innerHTML = "&#xf253;";
  }, 2000);
}

hourGlassTip();

setInterval(hourGlassTip, 3000);
