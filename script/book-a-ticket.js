function generateQRCode(event) {
      event.preventDefault();

      var passengerName = document.getElementById("passengerName").value;
      var mobileNumber = document.getElementById("mobileNumber").value;
      var busNumber = document.getElementById("busNumber").value;
      var destination = document.getElementById("destination").value;
      var numTickets = document.getElementById("numTickets").value;

      var bookingInfo = `Name: ${passengerName}\nMobile: ${mobileNumber}\nBus: ${busNumber}\nDestination: ${destination}\nTickets: ${numTickets}`;

      var qr = new QRious({
        value: bookingInfo,
        size: 200,
        foreground: 'blue'
      });

      var canvas = document.createElement('canvas');
      canvas.width = 200;
      canvas.height = 200;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(qr.canvas, 0, 0, canvas.width, canvas.height);

      var imgDataUrl = canvas.toDataURL('image/png');

      
      var newTab = window.open();
      newTab.document.write('Your ticket </h1> <img src="' + imgDataUrl + '" alt="QR Code">');
    }
