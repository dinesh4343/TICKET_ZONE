function storeData() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const mobileNo = document.getElementById("mobile-no").value;
  const address = document.getElementById("address").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  document.getElementById("loading-overlay").style.display = "block";

  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Mobile No:", mobileNo);
  console.log("Address:", address);
  console.log("Gender:", gender);

  realtimeDB.ref("data").push({
    name: name,
    gender: gender,
    age: age,
    mobileNo: mobileNo,
    address: address
    
  })
  .then(() => {
    document.getElementById("loading-overlay").style.display = "none";
    console.log("Data stored successfully in Realtime Database.");

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("mobile-no").value = "";
    document.getElementById("address").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
   
  })
  .catch((error) => {
    console.error("Error storing data:", error);
    document.getElementById("loading-overlay").style.display = "none";
  });

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("User signed up:", userCredential);
      alert("You have successfully signed up!");
      
      // Clear input fields
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";

      // Redirect to login page
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error signing up:", error);
      alert("Error signing up. Please try again.");
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    });
}



    function toggleForms() {
      var registerForm = document.getElementById("register_form");
      var signupForm = document.getElementById("signup_form");
      registerForm.classList.toggle("hidden");
      signupForm.classList.toggle("hidden");
    }
    
    function toggleBack() {
      var registerForm = document.getElementById("register_form");
      var signupForm = document.getElementById("signup_form");
      registerForm.classList.toggle("hidden");
      signupForm.classList.toggle("hidden");
    }




    const menuToggle = document.querySelector('#menuToggle input');

// Add click event listener to the document
document.addEventListener('click', function(event) {
  // Check if the clicked element is inside the menu or menu toggle
  if (!event.target.closest('#menu') && !event.target.closest('#menuToggle')) {
    // Uncheck the menu toggle checkbox to close the menu
    menuToggle.checked = false;
  }
});