
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const busNumberInput = document.getElementById("busNumber");
    const routeList = document.getElementById("routeList");

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
            url: "lib/bus_stops.csv", 
            dataType: "text",
            success: function(data) {
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
        
                        <div class="timeline--circle">       <i></i>
                        </div>
                        <div class="timeline--description">
                        ${start} 
                        </div>
                      </li>
                      `;
                    }

                    routeList.innerHTML = routeInfo;
                } else {
                    routeList.innerHTML = "Bus number not found.";
                }
            }
        });
    }
});

