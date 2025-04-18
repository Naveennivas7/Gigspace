function openServicesModal() {
    document.getElementById("servicesModal").style.display = "block";
  }

  function closeServicesModal() {
    document.getElementById("servicesModal").style.display = "none";
  }

  // Optional: Close modal if clicked outside of modal-content
  window.onclick = function(event) {
    const modal = document.getElementById("servicesModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  function searchServices() {
    let input = document.getElementById("serviceSearch");
    let filter = input.value.toLowerCase();
    let serviceItems = document.getElementsByClassName("service-item");
  
    for (let i = 0; i < serviceItems.length; i++) {
      let service = serviceItems[i];
      if (service.textContent.toLowerCase().includes(filter)) {
        service.style.display = ""; // Show service if it matches
      } else {
        service.style.display = "none"; // Hide service if it doesn't match
      }
    }
  }
  