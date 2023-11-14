function generateQRCode(event) {
  event.preventDefault();

  // Retrieve user input
  var passengerName = document.getElementById("passengerName").value;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var busNumber = document.getElementById("busNumber").value;
  var from = document.getElementById("fromLocation").value;
  var destination = document.getElementById("destination").value;
  var numTickets = document.getElementById("numTickets").value;

  // Format booking information
  var bookingInfo = `Name: ${passengerName}\nMobile: ${mobileNumber}\nFrom: ${from}\nBus: ${busNumber}\nDestination: ${destination}\nTickets: ${numTickets}`;

  // Generate QR Code
  var qr = new QRious({
    value: bookingInfo,
    size: 200,
    foreground: 'red'
  });

  // Convert canvas to data URL
  var imgDataUrl = qr.toDataURL('image/png');

  // Open a new tab and write the ticket structure dynamically
  var newTab = window.open();
  newTab.document.write(`
  <div class="center-container" style="display: flex; justify-content: center; align-items: center; height: 100vh;">
  <div class="card" style="width: 590px; height: 554px; border-radius: 30px; background: #e0e0e0; box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;">

    <div style="text-align: center;">
      <h1>Your Ticket</h1>
      <img src="${imgDataUrl}" alt="QR Code">
      <div style="margin-top: 20px;">
        <p><strong>Name:</strong> ${passengerName}</p>
        <p><strong>Date:</strong> ${getCurrentDate()}</p>
        <p><strong>Bus:</strong> ${busNumber}</p>
        <p><strong>From:</strong> ${from}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <!-- Add more dynamic information as needed -->
      </div>
    </div>
  </div>
</div>

  `);
}


function getCurrentDate() {
  var currentDate = new Date();
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return currentDate.toLocaleDateString('en-US', options);
}
