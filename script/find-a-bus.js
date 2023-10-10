document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const busNumberInput = document.getElementById("busNumber");
    const routeList = document.getElementById("routeList");
    const originBox = document.querySelector(".box h2:first-child + h4");
    const destinationBox = document.querySelector(".box1 h2:first-child + h4");

    // Add an event listener for the "keydown" event on the input field
    busNumberInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission if inside a form
            const busNumber = busNumberInput.value;
            checkBusNumber(busNumber);
        }
    });

    searchButton.addEventListener("click", function () {
        const busNumber = busNumberInput.value;
        checkBusNumber(busNumber);
    });


    const chennaiButton = document.querySelector(".chennaiButton");
    const cbeButton = document.querySelector(".cbeButton");
    const maduraiButton = document.querySelector(".maduraiButton");
    const searchContainer = document.getElementById("search");
    const district = document.getElementById("district");
    const backButton = document.getElementById("backButton");



    let url="";
    chennaiButton.addEventListener("click", function (event) {
      event.preventDefault();
      toggleSearchContainer();
      url="lib/bus_stops.csv";
      backButton.style.display = "block";

    });

    cbeButton.addEventListener("click", function (event) {
      event.preventDefault();
      toggleSearchContainer();
      url="lib/bus_stops_cbe.csv";
      backButton.style.display = "block";
    });

    maduraiButton.addEventListener("click", function (event) {
        alert("Coming soon!");
    });

    backButton.addEventListener("click", function (event) {
        back();
    });

    function toggleSearchContainer() {
      searchContainer.style.display = "block";
      district.style.display = "none";
    }
    document.getElementById("backButton").addEventListener("click", function () {
        goBack();
      });
  
      // Function to go back
      function goBack() {
        // You can customize this logic to navigate back or perform other actions
        busNumberInput.value = "";
        searchContainer.style.display = "none";
        district.style.display = "block";
        routeList.innerHTML = "";
        originBox.textContent = "-";
        destinationBox.textContent = "-";
      }

    
  
    
function checkBusNumber(busNumber) {
    $.ajax({
        url: url,
        
        
        dataType: "text",
        success: function (data) {
            let rows = data.split("\n");
            let foundRows = [];

            for (let i = 0; i < rows.length; i++) {
                let cols = rows[i].split(",");
                if (cols[1] === busNumber) {
                    foundRows.push(cols);
                }
            }

            if (foundRows.length > 0) {
                let routeInfo = "";

                for (let i = 0; i < foundRows.length; i++) {
                    let start = foundRows[i][3];

                    routeInfo += `<li>
                        <div class="timeline--circle"> <i></i></div>
                        <div class="timeline--description">${start}</div>
                    </li>`;
                }

                routeList.innerHTML = routeInfo;

               // Update Origin and Destination boxes
            originBox.textContent = foundRows.length > 0 ? foundRows[0][3] : "-";
            destinationBox.textContent = foundRows.length > 0 ? foundRows[foundRows.length - 1][3] : "-";

            } else {
                routeList.innerHTML = "Bus number not found.";
                // Reset Origin and Destination boxes if bus number is not found
                originBox.textContent = "-";
                destinationBox.textContent = "-";
            }
        }
    });
}

});















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
