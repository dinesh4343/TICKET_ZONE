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






    function openNav() {
      document.getElementById("mySidebar").style.width = "450px";
      document.getElementById("main").style.marginLeft = "350px";
    
      // Add click event listener to the document
      document.addEventListener('click', closeNavOnClickOutside);
    }
    
    function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    
      // Remove the click event listener from the document
      document.removeEventListener('click', closeNavOnClickOutside);
    }
    
    function closeNavOnClickOutside(event) {
      var nav = document.getElementById("mySidebar");
      var openButton = document.getElementById("openButton");
    
      if (
        event.target !== nav &&
        event.target !== openButton &&
        !nav.contains(event.target) &&
        !openButton.contains(event.target)
      ) {
        closeNav();
      }
    }
  
