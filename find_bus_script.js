function checkBusNumber(busNumber) {
    $.ajax({
        url: "bus_stops.csv",
        dataType: "text",
        success: function(data) {
            let rows = data.split("\n");
            let found = false;
            let foundRows = []; // initialize array to store found rows
            for (let i = 0; i < rows.length; i++) {
                let cols = rows[i].split(",");
                if (cols[1] === busNumber) {
                    found = true;
                    foundRows.push(cols); // store found row in array
                }
            }
            if (found) {
                let message = "<ul>"; // start with the unordered list tag
                for (let i = 0; i < foundRows.length; i++) {
                message += "<li>" + foundRows[i][3] + "</li>"; // add each row value as a list item
            }
                message += "</ul>";
                $("#message").html(message);
            } else {
                $("#message").html("Bus number not found.");
            }
        }
    });
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
