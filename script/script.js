

const hamburger = document.querySelector('.hamburger');
const navButtonsMobile = document.querySelector('.nav-buttons-mobile');
const lines = document.querySelectorAll('.line');

hamburger.addEventListener('click', () => {
    toggleNavigation();
});

function toggleNavigation() {
    navButtonsMobile.classList.toggle('hidden-nav');
    lines[0].classList.toggle('close-1');
    lines[1].classList.toggle('close-2');
    lines[2].classList.toggle('close-3');
}

document.body.addEventListener('click', (event) => {
    if (!navButtonsMobile.contains(event.target) && !hamburger.contains(event.target)) {
        if (!navButtonsMobile.classList.contains('hidden-nav')) {
            toggleNavigation();
        }
    }
});


const navigationLinks = document.querySelectorAll('.nav-buttons-mobile a');
navigationLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleNavigation();
    });
});



function closeModalOnOutsideClick(modalId) {
    const modal = document.getElementById(modalId);

    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        // If the click target is the modal backdrop, close the modal
        $(modal).modal('hide'); // You can use jQuery here
      }
    });
  }

  // Attach the event listener to each modal
  closeModalOnOutsideClick('staticBackdrop1');
  closeModalOnOutsideClick('staticBackdrop2');
  closeModalOnOutsideClick('staticBackdrop3');
  closeModalOnOutsideClick('staticBackdrop4');













  document.getElementById('profile-button').addEventListener('click', function (event) {
    event.stopPropagation(); 

    var signUpButton = document.getElementById('sign-up-button');
    var signInButton = document.getElementById('sign-in-button');

    signUpButton.style.display = (signUpButton.style.display === 'none') ? 'block' : 'none';
    signInButton.style.display = (signInButton.style.display === 'none') ? 'block' : 'none';
});


document.body.addEventListener('click', function (event) {
    var signUpButton = document.getElementById('sign-up-button');
    var signInButton = document.getElementById('sign-in-button');

   
    if (!document.getElementById('profile-button').contains(event.target)) {
        signUpButton.style.display = 'none';
        signInButton.style.display = 'none';
    }
});









