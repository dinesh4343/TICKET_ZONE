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
function checkBusNumber(busNumber) {
    $.ajax({
        url: "lib/bus_stops.csv",
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
