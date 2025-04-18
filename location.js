document.getElementById("location-btn").addEventListener("click", function () {
    if (navigator.geolocation) {
      const textEl = document.getElementById("location-text");
      const spinnerEl = document.getElementById("location-spinner");

      textEl.textContent = "Locating...";
      spinnerEl.style.display = "inline-block";

      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  });

  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
      .then(response => response.json())
      .then(data => {
        const location = data.address.suburb || data.address.neighbourhood || data.address.city || data.address.town || data.address.village || "Your Location";
        document.getElementById("location-text").textContent = location;
        document.getElementById("location-spinner").style.display = "none";
      })
      .catch(() => {
        document.getElementById("location-text").textContent = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
        document.getElementById("location-spinner").style.display = "none";
      });
  }

  function showError(error) {
    const textEl = document.getElementById("location-text");
    const spinnerEl = document.getElementById("location-spinner");

    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
    textEl.textContent = "Nungambakkam, Chennai";
    spinnerEl.style.display = "none";
  }