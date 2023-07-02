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
