document.addEventListener("DOMContentLoaded", function () {
   




    const chennaiButton = document.querySelector(".chennaiButton");
    const cbeButton = document.querySelector(".cbeButton");
    const maduraiButton = document.querySelector(".maduraiButton");
    const KancheepuramButton = document.querySelector(".KancheepuramButton");


    const titleDistrict = document.querySelector(".title-district");
    const searchContainer = document.getElementById("search");



    const district = document.getElementById("district");
    const backButton = document.getElementById("backButton");
    const loaderOverlay = document.getElementById("loader-overlay");









    let url="";
    chennaiButton.addEventListener("click", function (event) {
      event.preventDefault();
      toggleSearchContainer();
      url="lib/bus_stops.csv";
      backButton.style.display = "block";
      titleDistrict.style.display = "none";
      showLoader();

    });









    cbeButton.addEventListener("click", function (event) {
      event.preventDefault();
      toggleSearchContainer();
      url="lib/bus_stops_cbe.csv";
      backButton.style.display = "block";
      titleDistrict.style.display = "none";
      showLoader();
    });



    maduraiButton.addEventListener("click", function (event) {
        alert("Coming soon!");
    });

    KancheepuramButton.addEventListener("click", function (event) {
        alert("Coming soon!");
    });


    const SalemButton = document.querySelector(".SalemButton");
    const TirunelveliButton = document.querySelector(".TirunelveliButton");
    const DharmapuriButton = document.querySelector(".DharmapuriButton");


    SalemButton.addEventListener("click", function (event) {
        alert("Coming soon!");
    });

    TirunelveliButton.addEventListener("click", function (event) {
        alert("Coming soon!");
    });

    DharmapuriButton.addEventListener("click", function (event) {
        alert("Coming soon!");
    });







    function toggleSearchContainer() {
      searchContainer.style.display = "block";
      district.style.display = "none";
    }
    document.getElementById("backButton").addEventListener("click", function () {
        goBack();
        titleDistrict.style.display = "block";
        showLoader();
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
        backButton.style.display = "none";
      }










      function showLoader() {
        loaderOverlay.style.display = "flex";
        setTimeout(function () {
          loaderOverlay.style.display = "none";
        }, 1000); // 5000 milliseconds = 5 seconds
      }
  
  
      














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




