const firebaseConfig = {
  apiKey: "AIzaSyC3QS5kpqgxSZboFvNZXZbyQRfQmOy5pDs",
  authDomain: "dinesh-project-2c976.firebaseapp.com",
  projectId: "dinesh-project-2c976",
  storageBucket: "dinesh-project-2c976.appspot.com",
  messagingSenderId: "94308291661",
  appId: "1:94308291661:web:a5bb00f16e6029ac087804"
};

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    // Function to send data to Firebase
    document.addEventListener('DOMContentLoaded', function() {
      // Define the sendDataToFirebase function
      function sendDataToFirebase() {
        // Get current timestamp
        const timestamp = new Date().toISOString();
  
        // Get current location
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
  
            // Construct data object
            const data = {
              message: "SOS",
              timestamp: timestamp,
              location: {
                latitude: latitude,
                longitude: longitude
              }
            };
  
            // Push data to Firebase database
            const db = firebase.database();
            db.ref('alerts').push(data)
              .then(() => {
                alert("Alert sent to Firebase successfully!");
              })
              .catch(error => {
                console.error("Error sending alert to Firebase: ", error);
                alert("Error sending alert to Firebase. Please try again later.");
              });
          },
          error => {
            console.error("Error getting current location: ", error);
            alert("Error getting current location. Please try again later.");
          },
          { enableHighAccuracy: true } // Request high accuracy for location
        );
      }
  
      // Add an event listener to the anchor element
      const anchorElement = document.querySelector('a.download-button');
      anchorElement.addEventListener('click', sendDataToFirebase);
    });