// Get elements
const dropdown = document.querySelector('.profile-dropdown');
const signinLink = document.querySelector('#signin-link');
const loginLink = document.querySelector('#login-link');

// Show dropdown content
dropdown.addEventListener('click', function() {
  this.classList.toggle('active');
  const dropdownContent = this.querySelector('.dropdown-content');
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});

var button1 = document.getElementById('button1');
var modal1 = document.getElementById("modal1");
var span1 = document.getElementsByClassName("close")[0];

button1.onclick = function() {
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

var button2= document.getElementById('button2');
var modal2 = document.getElementById("modal2");
var span2 = document.getElementsByClassName("close")[1];

button2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

var button3 = document.getElementById('button3');
var modal3 = document.getElementById("modal3");
var span3 = document.getElementsByClassName("close")[2];

button3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

