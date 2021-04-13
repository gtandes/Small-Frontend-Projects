// Get modal element
var modal = document.getElementById("simpleModal");

// get open modal button
var modalBtn = document.getElementById("modalBtn");

// get close button
var closeBtn = document.getElementById("closeBtn");

// Listen for open click
modalBtn.addEventListener("click", openModal);

// Listen for close click
closeBtn.addEventListener("click", closeModal);

// Listen for outside click
window.addEventListener("click", clickOutside);

// function to open modal
function openModal() {
  //   console.log(1);
  modal.style.display = "block";
}

// function to close modal
function closeModal() {
  modal.style.display = "none";
}

// function to close modal when clicked outside
function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
